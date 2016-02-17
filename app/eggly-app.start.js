angular.module('Eggly', [

])
.controller('MainCtrl', function($scope){
  $scope.categories = [
    {"id": 0, "name": "Development"},
    {"id": 1, "name": "Design"},
    {"id": 2, "name": "Fellowship"},
    {"id": 3, "name": "Best Practices"},
    {"id": 4, "name": "Humor"},
  ];
  $scope.bookmarks = [
    {"id": 0, "title": "AngularJS", "url": "https://angularjs.org/", "category": "Development"},
    {"id": 1, "title": "Interview Prompts", "url": "http://api.hackreactor.com/prompts/", "category": "Fellowship"},
    {"id": 2, "title": "UX Booth - Best Practices", "url": "http://www.uxbooth.com/articles/making-and-breaking-ux-best-practices/", "category": "Best Practices"},
    {"id": 3, "title": "AngularJS Fundamentals", "url": "https://egghead.io/series/angularjs-app-from-scratch-getting-started", "category": "Development"},
    {"id": 4, "title": "Corgi", "url": "http://www.humorhound.com/tag/corgi-2/", "category": "Humor"},
    {"id": 5, "title": "Information is Beautiful", "url": "http://www.informationisbeautiful.net/", "category": "Design"}
  ]
});
