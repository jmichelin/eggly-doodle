angular.module('Eggly', [

])
.controller('MainCtrl', function($scope){
  $scope.categories = [
    {"id": 0, "name": "All"},
    {"id": 1, "name": "Development"},
    {"id": 2, "name": "Design"},
    {"id": 3, "name": "Fellowship"},
    {"id": 4, "name": "Best Practices"},
    {"id": 5, "name": "Humor"}
  ];

  $scope.bookmarks = [
    {"id": 0, "title": "AngularJS", "url": "https://angularjs.org/", "category": "Development"},
    {"id": 1, "title": "Interview Prompts", "url": "http://api.hackreactor.com/prompts/", "category": "Fellowship"},
    {"id": 2, "title": "UX Booth - Best Practices", "url": "http://www.uxbooth.com/articles/making-and-breaking-ux-best-practices/", "category": "Best Practices"},
    {"id": 3, "title": "AngularJS Fundamentals", "url": "https://egghead.io/series/angularjs-app-from-scratch-getting-started", "category": "Development"},
    {"id": 4, "title": "Corgi", "url": "http://www.humorhound.com/tag/corgi-2/", "category": "Humor"},
    {"id": 5, "title": "Information is Beautiful", "url": "http://www.informationisbeautiful.net/", "category": "Design"}
  ];

  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    console.log('category.name => ',category.name);
    if (category.name === "All") {
      $scope.currentCategory = null;
    } else {
      $scope.currentCategory = category;
    }
  }

  function isCurrentCategory(category) {
    return category.name === $scope.currentCategory.name;
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;

  //Creating and editing states
  $scope.isCreating = false; //sets default state to false
  $scope.isEditing = false; //sets default state to false

  function startCreating() {
      $scope.isCreating = true;
      $scope.isEditing = false;
  }

  function cancelCreating() {
    $scope.isCreating = false;
  }

  function startEditing() {
    $scope.isCreating = false;
    $scope.isEditing = true;
  }

  function cancelEditing() {
    $scope.isEditing = false;
  }

  $scope.startCreating = startCreating;
  $scope.cancelEditing = cancelCreating;
  $scope.startEditing = startEditing;
  $scope.cancelEditing = cancelEditing

});
