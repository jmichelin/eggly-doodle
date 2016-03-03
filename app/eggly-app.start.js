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
    .controller('MainCtrl', function ($scope, $state) {

        $scope.isEditing = false;
        $scope.isCreating = false;
        $scope.currentCategory = null;
        $scope.editedBookmark = null;

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
            //$state.go('eggly.categories.bookmarks', { category:category.name });

            //reset CRUD view
            cancelCreating();
            cancelEditing();
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;


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

        //------
        //crud
        //------
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
