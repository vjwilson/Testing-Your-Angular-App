'use strict';

describe('global filters', function() {

  beforeEach(module('global.filters'));

  describe('yes filter', function() {
    var yes;

    beforeEach(inject(function(yesFilter) {
      yes = yesFilter;
    }));

    it('outputs Yep for truthy values', function() {
      expect(yes(true)).toEqual('Yep');
      
      expect(yes(1)).toEqual('Yep');
      
      expect(yes('1')).toEqual('Yep');
      
      expect(yes([])).toEqual('Yep');
      
      expect(yes([2])).toEqual('Yep');
      
      expect(yes({})).toEqual('Yep');
      
      expect(yes({ foo: 'bar' })).toEqual('Yep');
    })

    it('outputs Nope for falsy values', function() {
      expect(yes(false)).toEqual('Nope');
      
      expect(yes(0)).toEqual('Nope');
      
      expect(yes('')).toEqual('Nope');
      
      expect(yes(null)).toEqual('Nope');
      
      expect(yes(undefined)).toEqual('Nope');
    })
  })
});
