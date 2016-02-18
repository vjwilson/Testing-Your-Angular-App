'use strict';

describe('users controller', function() {

  var scope;
  var UsersCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    UsersCtrl = $controller('UsersCtrl', {
    });
  }));

  it( 'should be defined', function() {
    expect(UsersCtrl).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(UsersCtrl.items).toBeDefined();
    expect(UsersCtrl.items.length).toBeGreaterThan(0);
  });

});
