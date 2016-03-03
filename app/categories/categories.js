angular.module('categories', [
    'eggly.models.categories'
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': { //@symbol makes it an absolute path
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    }
                }
            })
    })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel){
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function(result){
                categoriesListCtrl.categories = result;
            });
    })
;