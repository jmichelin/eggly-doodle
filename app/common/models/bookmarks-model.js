angular.module('eggly.models.bookmarks', [

])
    .service('BookmarksModel', function($http, $q){
        var model = this,
            bookmarks,
            URLS = {
                FETCH: 'data/bookmarks.json'
            };

        function extract(result) {
            return result.data
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        function findBookmark(bookmarkId){
            return _.find(bookmarks, function(bookmark){
                return bookmark.id === parseInt(bookmarkId, 10);
            })
        }

        model.getBookmarkById = function(bookmarkId){
            var deferred = $q.defer();
            if(bookmarks){
                deferred.resolve(findBookmark(bookmarkId));
            } else {
                model.getBookmarks().then(function(){
                    deferred.resolve(findBookmark(bookmarkId));
                });
            }
            return deferred.promise;
        }

        model.getBookmarks = function() {
            var deferred = $q.defer();
            if(bookmarks){
                deferred.resolve(bookmarks);
            } else {
                $http.get(URLS.FETCH).then(function(bookmarks){
                    deferred.resolve(cacheBookmarks(bookmarks));
                });
            }
            return deferred.promise;
            //return $http.get(URLS.FETCH).then(cacheBookmarks);
        };

        model.createBookmark = function(bookmark) {
            bookmark.id = bookmark.length; //simulates backend server ID set
            bookmarks.push(bookmark);
        };

        model.updateBookmark = function(bookmark) {
            //console.log('bookmarks-model.js in model.updateBookmark bookmark => ', bookmark);
            var index = _.findIndex(bookmarks, function(b){
                return b.id == bookmark.id
            });
            bookmarks[index] = bookmark;
        };

        model.deleteBookmark = function(bookmark){
            _.remove(bookmarks, function(b){
                return b.id == bookmark.id;
            });
        }


    })
;