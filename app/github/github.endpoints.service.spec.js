'use strict';

describe('github api service', function() {

  var githubEndpointsService;

  beforeEach( module( 'github.endpoints' ) );

  beforeEach(inject( function( _githubEndpointsService_ ) {
    githubEndpointsService = _githubEndpointsService_;
  }));

  /**
   * we are using an undocumented feature of Jasmine here
   *   - if you pass an extra string as a final parameter to a Jasmine matcher,
   *     and the matcher fails, it prints that string after the failure message
   *
   * See: https://github.com/jasmine/jasmine/issues/641#issuecomment-54736801
   */
  it( 'should return an object with endpoint names as keys and endpoint URLs as values', function() {
    var endpoints;

    endpoints = githubEndpointsService.findAllEndpoints();
    expect(typeof endpoints).toEqual('object', 'but the service did not return an object');

    var endpointKeys = Object.keys(endpoints);
    expect(endpointKeys.indexOf('current_user_url')).toBeGreaterThan(-1, 'but could not find a key of "current_user_url"');

    var endpointUrlRegex = /^https:\/\/api\.github\.com\/.*$/;
    var isEndpointUrl = endpointUrlRegex.test(endpoints[endpointKeys[0]]);
    expect(isEndpointUrl).toBeTruthy('but the endpoint URL is not in the correct format');
  });

});
