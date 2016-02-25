'use strict';

describe('users controller', function() {

  var scope;
  var githubUsersService;
  var deferredUsers;
  var UsersCtrl;

  beforeEach( module( 'testingApp' ) );

  beforeEach(inject( function( $controller, $rootScope, $q ) {
    scope = $rootScope.$new();

    githubUsersService = jasmine.createSpyObj('githubUsersService', ['findAllUsers']);
    deferredUsers = $q.defer();
    githubUsersService.findAllUsers.and.returnValue(deferredUsers.promise);

    UsersCtrl = $controller('UsersCtrl', {
      githubUsersService: githubUsersService
    });
  }));

  it( 'should be defined', function() {
    expect(UsersCtrl).toBeDefined();
  });

  it( 'should have a list of items', function() {
    expect(githubUsersService.findAllUsers).toHaveBeenCalled();

    deferredUsers.resolve([
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

    scope.$apply();

    expect(UsersCtrl.users).toBeDefined();
    expect(UsersCtrl.users.length).toBeGreaterThan(0);
  });

});
