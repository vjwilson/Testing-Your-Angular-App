(function () {
  'use strict';

  angular.module('testingApp').controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$scope', '$stateParams'];

  function UserDetailCtrl($scope, $stateParams) {
    $scope.userLogin = $stateParams.userLogin;

    $scope.user = {
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
    };
  }

})();