'use strict';

describe('github users service', function() {

  var githubUsersService;

  beforeEach( module( 'github.users' ) );

  beforeEach(inject( function( _githubUsersService_ ) {
    githubUsersService = _githubUsersService_;
  }));

  it( 'should return an array of user objects', function() {
    var users;

    users = githubUsersService.findAllUsers();
    expect(users.constructor).toEqual(Array);

    expect(typeof users[0]).toBe('object');

    expect(typeof users[0].login).toBe('string');
  });

  it( 'should return one user object when given a user login', function() {
    var login = 'bmizerany';
    var user;

    user = githubUsersService.findOneUser(login);

    expect(typeof user).toBe('object');

    expect(user.login).toBeDefined();

    expect(user.login).toEqual(login);
  });

});
