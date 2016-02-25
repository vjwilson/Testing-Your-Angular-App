'use strict';

describe('emojis controller', function() {

  var scope;
  var githubEmojisService;
  var deferredEmojis;
  var EmojisCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope, $q ) {
    scope = $rootScope.$new();

    githubEmojisService = jasmine.createSpyObj('githubEmojisService', ['findAllEmojis']);
    deferredEmojis = $q.defer();
    githubEmojisService.findAllEmojis.and.returnValue(deferredEmojis.promise);

    EmojisCtrl = $controller('EmojisCtrl', {
      githubEmojisService: githubEmojisService
    });
  }));

  it( 'should be defined', function() {
    expect(EmojisCtrl).toBeDefined();
  });

  it( 'should have a list of emojis', function() {
    expect(githubEmojisService.findAllEmojis).toHaveBeenCalled();

    deferredEmojis.resolve([
      {
        name:     '100',
        emojiUrl: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v5'
      },
      {
        name:     '1234',
        emojiUrl: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v5'
      }
    ]);

    scope.$apply();

    expect(EmojisCtrl.emojis).toBeDefined();
    expect(EmojisCtrl.emojis.length).toBeGreaterThan(0);
    expect(EmojisCtrl.emojis[0].name).toEqual('100');
    expect(EmojisCtrl.emojis[0].emojiUrl).toEqual('https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v5');
  });

});
