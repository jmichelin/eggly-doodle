angular.module('Eggly', [
        'ui.router',
        'categories',
        'categories.bookmarks'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('eggly', {
                url: '', // Make to navigate to index.html#/
                abstract: true
            })
        ;
        $urlRouterProvider.otherwise('/');
    })
    .controller('MainCtrl', function ($scope) {
        $scope.categories = [
            {"id": 1, "name": "Development"},
            {"id": 2, "name": "Design"},
            {"id": 3, "name": "Fellowship"},
            {"id": 4, "name": "Best Practices"},
            {"id": 5, "name": "Humor"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "https://angularjs.org/", "category": "Development"},
            {
                "id": 1,
                "title": "Interview Prompts",
                "url": "http://api.hackreactor.com/prompts/",
                "category": "Fellowship"
            },
            {
                "id": 2,
                "title": "UX Booth - Best Practices",
                "url": "http://www.uxbooth.com/articles/making-and-breaking-ux-best-practices/",
                "category": "Best Practices"
            },
            {
                "id": 3,
                "title": "AngularJS Fundamentals",
                "url": "https://egghead.io/series/angularjs-app-from-scratch-getting-started",
                "category": "Development"
            },
            {"id": 4, "title": "Corgi", "url": "http://www.humorhound.com/tag/corgi-2/", "category": "Humor"},
            {
                "id": 5,
                "title": "Information is Beautiful",
                "url": "http://www.informationisbeautiful.net/",
                "category": "Design"
            }
        ];

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            //console.log('category.name => ',category.name);
            $scope.currentCategory = category;
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

            resetCreateForm();
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

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

//crud
        function resetCreateForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: $scope.currentCategory.name
            }
        }

        function createBookmark(bookmark) {
            bookmark.id = $scope.bookmarks.length;
            console.log("bookmark object = >", bookmark);
            console.log("bookmarks before = > ", $scope.bookmarks);
            $scope.bookmarks.push(bookmark);
            console.log("bookmarks after => ", $scope.bookmarks);
            resetCreateForm();
        }

        $scope.editedBookmark = null;

        function setEditedBookmark(bookmark) {
            $scope.editedBookmark = angular.copy(bookmark);
        }

        function updateBookmark(bookmark) {
            var index = _.findIndex($scope.bookmarks, function (b) {
                return b.id == bookmark.id;
            });
            $scope.bookmarks[index] = bookmark;

            $scope.editedBookmark = null;
            $scope.isEditing = false;
        }

        function isSelectedBookmark(bookmarkId) {
            //console.log(bookmark);
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        }

        function deleteBookmark(bookmark) {
            _.remove($scope.bookmarks, function (b) {
                return b.id == bookmark.id;
            });
        }

        $scope.isSelectedBookmark = isSelectedBookmark;
        $scope.updateBookmark = updateBookmark;
        $scope.setEditedBookmark = setEditedBookmark;
        $scope.deleteBookmark = deleteBookmark;

        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;
        $scope.createBookmark = createBookmark;

    });
