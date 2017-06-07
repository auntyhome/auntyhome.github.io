var app = angular.module('auntyhome', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/about.html',
            controller: 'navbar-controller'
        })
        .when('/location', {
            templateUrl: 'pages/location.html',
            controller: 'location-controller'
        })
        .when('/facilities', {
            templateUrl: 'pages/facilities.html',
            controller: 'facilities-controller'
        });
});


app.controller('navbar-controller', function ($scope) {
    $scope.marquee = {
        content: "Decent rooms with Food are available between Rs.6000 -Rs.7500",
        style: {
            "font-size": "18px"
        },
        para: {
            "font-size": "24px"
        }
    },

        $scope.header = {
            title: 'Aunty Homes',
            categories: {
                category1: 'About',
                category2: 'Location',
                category3: 'Facilities',
                category4: 'Contact'
            },
            links: {
                link1: 'index.html',
                link2: 'pages/location.html',
                link3: 'pages/facilities.html',
            },
            listing: {
                "color": "#3F0D12",
                "font-size": "24px",
                "list-style": "none",
                "font-family": "Ubuntu",
                "text-transform": "uppercase",
                "font-weight": "bolder",
                "margin-top": "5px",
                "padding-left": "50px",
                "padding-right": "10px"
            },
            listinga: {
                "color": "#F1F0CC",
                "text-decoration": "none",
                "margin-left": "100px"
            },
            span: {
                "color": "#F1F0CC"
            }
        }
});

app.controller('location-controller', function ($scope) {
    $scope.location = {
        heading: {
            "font-family": "Ubuntu",
            "color": "Black"
        },
        list: {
            "margin-top": "30px",
            "font-family": "Ubuntu",
            "font-size": "17px",
            "margin-left": "15px"
        }
    };
});

app.controller('facilities-controller', function ($scope) {
    $scope.facilities = {
        heading: {
            "font-family": "Ubuntu",
            "color": "black"
        },
        list: {
            "font-size": "18px",
            "list-style": "none"
        },
        span: {
            "margin": "10px"
        }
    }
});


app.controller('SuperCtrl', function($rooteScope, $location){
    $rooteScope.$on('$routeChangeSuccess',function(){

        $window.ga('send'. {
            'hitType': 'screenview',
            'appName': 'auntyhome',
            'screenName': $location.url(),
            'hitCallback': function() {
                console.log('GA hitCallback sent!');
            }
        });

        console.log('Route Changed: '+ $location.url());
    });
});