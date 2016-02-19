'use strict';

describe('emojis controller', function() {

  var scope;
  var EmojisCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    EmojisCtrl = $controller('EmojisCtrl', {
    });
  }));

  it( 'should be defined', function() {
    expect(EmojisCtrl).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(EmojisCtrl.emojis).toBeDefined();
    expect(EmojisCtrl.emojis.length).toBeGreaterThan(0);
  });

});
