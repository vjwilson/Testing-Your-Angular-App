'use strict';

describe('github users service', function() {

  var githubEmojisService;

  beforeEach( module( 'github.emojis' ) );

  beforeEach(inject( function( _githubEmojisService_ ) {
    githubEmojisService = _githubEmojisService_;
  }));

  it( 'should return an object with emoji names as keys and image URLs as values', function() {
    var emojis;

    emojis = githubEmojisService.findAllEmojis();
    expect(typeof emojis).toEqual('object');

    var emojiKeys = Object.keys(emojis);
    expect(emojiKeys.indexOf('thumbsup')).toBeGreaterThan(-1);

    var imageUrlRegex = /^https?:\/\/.*(jpe?g|gif|png)(\?.*)?$/;
    var isImageUrl = imageUrlRegex.test(emojis[emojiKeys[0]]);
    expect(isImageUrl).toBeTruthy();
  });

});
