// Templates
import MainTemplate from './components/main/main.html'
import AboutTemplate from './components/about/about.html'

/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
    // when trying to navigate to a non-existent route, go to login
    $urlRouterProvider.otherwise("/");
    // when there is an empty route, redirect to /login
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('main', {
            url: "/",
            controller: "MainCtrl as app",
            templateUrl: MainTemplate
        })
        .state('about', {
            url: "/about",
            controller: "MainCtrl as app",
            templateUrl: AboutTemplate
        });
}

export { Router }