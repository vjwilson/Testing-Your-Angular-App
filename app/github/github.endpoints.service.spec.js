'use strict';

describe('github api service', function() {

  var githubEndpointsService;
  var httpBackend;

  beforeEach( module( 'github.endpoints' ) );

  beforeEach(inject( function( _githubEndpointsService_, $httpBackend ) {
    githubEndpointsService = _githubEndpointsService_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  /**
   * we are using an undocumented feature of Jasmine here
   *   - if you pass an extra string as a final parameter to a Jasmine matcher,
   *     and the matcher fails, it prints that string after the failure message
   *
   * See: https://github.com/jasmine/jasmine/issues/641#issuecomment-54736801
   */
  it( 'should return an object with endpoint names as keys and endpoint URLs as values', function() {
    var getAllUrl = 'https://api.github.com/';
    var endpoints;

    httpBackend.whenGET(getAllUrl).respond({
        authorizations_url: "https://api.github.com/authorizations",
        code_search_url: "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
        current_user_authorizations_html_url: "https://github.com/settings/connections/applications{/client_id}",
        current_user_repositories_url: "https://api.github.com/user/repos{?type,page,per_page,sort}",
        current_user_url: "https://api.github.com/user"
    });

    httpBackend.expectGET(getAllUrl);

    githubEndpointsService.findAllEndpoints()
      .then(function(response) {
        endpoints = response;

        expect(endpoints.constructor).toEqual(Array, 'or the service did not return an Array');

        var testArray = endpoints.filter(function(endpoint) {
          return endpoint.name === 'current_user_url';
        });
        expect(testArray.length).toEqual(1, 'or could not find an endpoint of "current_usre_url" ');

        var endpointUrlRegex = /^https:\/\/api\.github\.com\/.*$/;
        var isEndpointUrl = endpointUrlRegex.test(endpoints[0].url);
        expect(isEndpointUrl).toBeTruthy('or the endpoint URL is not in the correct format');
      });

  });

});
