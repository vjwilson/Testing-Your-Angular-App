'use strict';

describe('dashboard controller', function() {

  var scope;
  var DashboardController;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    DashboardController = $controller('DashboardCtrl', {
      $scope: scope
    });
  }));

  it( 'should be defined', function() {
    expect(DashboardController).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(DashboardController.items).toBeDefined();
    expect(Object.keys(DashboardController.items).length).toBeGreaterThan(0);
  });

});
