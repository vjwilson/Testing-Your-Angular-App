'use strict';

describe('user detail controller', function() {

  var scope;
  var UserDetailCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    UserDetailCtrl = $controller('UserDetailCtrl', {
      $scope: scope
    });
  }));

  it( 'should be defined', function() {
    expect(UserDetailCtrl).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(scope.items).toBeDefined();
    expect(scope.items.length).toBeGreaterThan(0);
  });

});
