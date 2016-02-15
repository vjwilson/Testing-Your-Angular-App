'use strict';

describe('state1 list controller', function() {

  var scope;
  var state1ListController;

  beforeEach( module( 'cordeliaApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    state1ListController = $controller('StateList1Ctrl', {
      $scope: scope
    });
  }));

  it( 'should be defined', function() {
    expect(state1ListController).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(scope.items).toBeDefined();
    expect(scope.items.length).toBeGreaterThan(0);
  });

});
