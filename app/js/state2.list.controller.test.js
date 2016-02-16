'use strict';

describe('state2 list controller', function() {

  var scope;
  var state2ListController;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope ) {
    scope = $rootScope.$new();

    state2ListController = $controller('StateList2Ctrl');
  }));

  it( 'should be defined', function() {
    expect(state2ListController).toBeDefined();
  });

  it( 'should have a list of things', function() {
    expect(state2ListController.things).toBeDefined();
    expect(state2ListController.things.length).toBeGreaterThan(0);
  });

});
