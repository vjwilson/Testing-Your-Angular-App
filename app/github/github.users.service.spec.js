'use strict';

describe('github users service', function() {

  var githubUsersService;
  var httpBackend;

  beforeEach( module( 'github.users' ) );

  beforeEach(inject( function( _githubUsersService_, $httpBackend ) {
    githubUsersService = _githubUsersService_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it( 'should return an array of user objects', function() {
    var getAllUrl = 'https://api.github.com/users';
    var users;

    httpBackend.whenGET(getAllUrl).respond([
      {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": true
      }
    ]);

    httpBackend.expectGET(getAllUrl);

    githubUsersService.findAllUsers()
      .then(function(response) {
        users = response;
 
        expect(users.constructor).toEqual(Array);

        expect(typeof users[0]).toBe('object');

        expect(typeof users[0].login).toBe('string');
      });
  });

  it( 'should return one user object when given a user login', function() {
    var login     = 'bmizerany';
    var getOneUrl = 'https://api.github.com/users/' + login;

    var user;

    httpBackend.whenGET(getOneUrl).respond({
      "login": "bmizerany",
      "id": 46,
      "avatar_url": "https://avatars.githubusercontent.com/u/46?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bmizerany",
      "html_url": "https://github.com/bmizerany",
      "followers_url": "https://api.github.com/users/bmizerany/followers",
      "following_url": "https://api.github.com/users/bmizerany/following{/other_user}",
      "gists_url": "https://api.github.com/users/bmizerany/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bmizerany/subscriptions",
      "organizations_url": "https://api.github.com/users/bmizerany/orgs",
      "repos_url": "https://api.github.com/users/bmizerany/repos",
      "events_url": "https://api.github.com/users/bmizerany/events{/privacy}",
      "received_events_url": "https://api.github.com/users/bmizerany/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Blake Mizerany",
      "company": null,
      "blog": null,
      "location": null,
      "email": "blake.mizerany@gmail.com",
      "hireable": null,
      "bio": null,
      "public_repos": 148,
      "public_gists": 162,
      "followers": 1019,
      "following": 18,
      "created_at": "2008-01-24T04:44:30Z",
      "updated_at": "2016-01-29T09:51:48Z"
    });

    httpBackend.expectGET(getOneUrl);

    user = githubUsersService.findOneUser(login)
      .then(function(response) {
        user = response;

        expect(typeof user).toBe('object');

        expect(user.id).toBeDefined();

        expect(user.login).toEqual(login);
      });
  });

});
