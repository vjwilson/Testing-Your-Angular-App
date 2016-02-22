'use strict';

describe('dashboard controller', function() {

  var scope;
  var githubEndpointsService;
  var deferredEndpoints;
  var DashboardController;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope, $q ) {
    scope = $rootScope.$new();

    githubEndpointsService = jasmine.createSpyObj('githubEndpointsService', ['findAllEndpoints']);
    deferredEndpoints = $q.defer();
    githubEndpointsService.findAllEndpoints.and.returnValue(deferredEndpoints.promise);

    DashboardController = $controller('DashboardCtrl', {
      $scope: scope,
      githubEndpointsService: githubEndpointsService
    });
  }));

  it( 'should be defined', function() {
    expect(DashboardController).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(githubEndpointsService.findAllEndpoints).toHaveBeenCalled();

    deferredEndpoints.resolve(
      [
        {
          name: "current_user_url",
          url: "https://api.github.com/user"
        }
      ]
    );

    scope.$apply();

    expect(DashboardController.items).toBeDefined();
    expect(DashboardController.items.length).toBeGreaterThan(0);
  });

});
