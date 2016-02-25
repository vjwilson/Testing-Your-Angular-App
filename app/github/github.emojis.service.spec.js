'use strict';

describe('github emojis service', function() {

  var githubEmojisService;
  var httpBackend;

  beforeEach( module( 'github.emojis' ) );

  beforeEach(inject( function( _githubEmojisService_, $httpBackend ) {
    githubEmojisService = _githubEmojisService_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it( 'should return an array of emoji object with names and image URLs', function() {
    var getAllUrl = 'https://api.github.com/emojis';
    var emojis;

    httpBackend.whenGET(getAllUrl).respond({
      "100": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v5",
      "1234": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v5",
      "+1": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v5",
      "-1": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v5",
    });

    httpBackend.expectGET(getAllUrl);

    githubEmojisService.findAllEmojis()
      .then(function(response) {
        emojis = response;

        expect(emojis.constructor).toEqual(Array);

        var testArray = emojis.filter(function(emoji) {
          return emoji.name === '+1';
        });
        expect(testArray.length).toEqual(1);

        var imageUrlRegex = /^https?:\/\/.*(jpe?g|gif|png)(\?.*)?$/;
        var isImageUrl = imageUrlRegex.test(emojis[0].emojiUrl);
        expect(isImageUrl).toBeTruthy();
      });
  });

});
