'use strict';

describe('emoji detail controller', function() {

  var scope;
  var EmojiDetailCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    EmojiDetailCtrl = $controller('EmojiDetailCtrl');
  }));

  it( 'should be defined', function() {
    expect(EmojiDetailCtrl).toBeDefined();
  });

  it( 'should have a list of things', function() {
    expect(EmojiDetailCtrl.things).toBeDefined();
    expect(EmojiDetailCtrl.things.length).toBeGreaterThan(0);
  });

});
