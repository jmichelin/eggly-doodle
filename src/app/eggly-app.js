angular.module('Eggly', [
        'ngAnimate',
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

