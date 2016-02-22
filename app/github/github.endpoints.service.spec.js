'use strict';

describe('github api service', function() {

  var githubEndpointsService;
  var httpBackend;

  beforeEach( module( 'github.endpoints' ) );

  beforeEach(inject( function( _githubEndpointsService_, $httpBackend ) {
    githubEndpointsService = _githubEndpointsService_;
    httpBackend = $httpBackend;

    httpBackend.whenGET("https://api.github.com/").respond({
        authorizations_url: "https://api.github.com/authorizations",
        code_search_url: "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
        current_user_authorizations_html_url: "https://github.com/settings/connections/applications{/client_id}",
        current_user_repositories_url: "https://api.github.com/user/repos{?type,page,per_page,sort}",
        current_user_url: "https://api.github.com/user"
    });

  }));

  afterEach(function() {
    httpBackend.flush();
  });

  /**
   * we are using an undocumented feature of Jasmine here
   *   - if you pass an extra string as a final parameter to a Jasmine matcher,
   *     and the matcher fails, it prints that string after the failure message
   *
   * See: https://github.com/jasmine/jasmine/issues/641#issuecomment-54736801
   */
  it( 'should return an object with endpoint names as keys and endpoint URLs as values', function() {
    var endpoints;

    githubEndpointsService.findAllEndpoints()
      .then(function(response) {
        endpoints = response.data;

        // the follow logger shows whether this block is ever called or not
        //   (Now it is!)
        console.log('in then block, endpoints: ', endpoints);

        expect(typeof endpoints).toEqual('object', 'but the service did not return an object');

        var endpointKeys = Object.keys(endpoints);
        expect(endpointKeys.indexOf('current_user_url')).toBeGreaterThan(-1, 'but could not find a key of "current_user_url"');

        var endpointUrlRegex = /^https:\/\/api\.github\.com\/.*$/;
        var isEndpointUrl = endpointUrlRegex.test(endpoints[endpointKeys[0]]);
        expect(isEndpointUrl).toBeTruthy('but the endpoint URL is not in the correct format');
      });

  });

});
