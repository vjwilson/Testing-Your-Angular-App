'use strict';

describe('documents file-upload directive', function() {

  var compile;
  var scope;
  var directiveElem;

  beforeEach(module('tyaa-emjoi.directive'));

  beforeEach(function(){
    inject(function($templateCache, $compile, $rootScope) {

      compile = $compile;
      scope = $rootScope.$new();
    });

    var element = angular.element('<tyaa-emjoi emoji="emoji"></tyaa-emjoi>');

    directiveElem = compile(element)(scope);
    scope.$digest();

  });

  it('should compile with a <img> tag', function () {
    var elementToTest = directiveElem.find('img');

    expect(elementToTest).toBeDefined();
  });

  it('should compile with a <a> tag', function () {
    var elementToTest = directiveElem.find('a');

    expect(elementToTest).toBeDefined();
  });
});
