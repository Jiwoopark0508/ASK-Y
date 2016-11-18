"use strict";

import angular from "angular";
import "angular-ui-router";
import "angular-animate";
import ctrl from "./controller";            // controllers in here

angular.module("mqApp", ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('main'); 
        
        // StateProvider
        $stateProvider
            .state("test", {
                url : '/test',
                templateUrl : 'template/test.html',
                controller : ctrl.testCtrl
            })
            // main interface frame
            .state("main", {
                url : '/main',
                templateUrl : 'template/main.html',
                controller : ctrl.mainCtrl
            })
            
               .state("main.instruction", {
                    url: '/instruction',
                    templateUrl: 'template/instruction.html',
                    controller: ctrl.instructionCtrl
                })
               .state("main.lectureList", {
                    url: '/lectureList',
                    templateUrl : 'template/lectureList.html',
                    controller : ctrl.lectureListCtrl
                })
               .state("main.selected", {
                    url: '/lectureList/:lectureId',
                    templateUrl : 'template/currentLecture.html',
                    controller : ctrl.currentLectureCtrl
                })
               .state("main.question", {
                    url: '/question',
                    templateUrl : 'template/question.html',
                    controller : ctrl.questionCtrl
                })
               .state("main.discuss", {
                    url: '/discuss',
                    templateUrl : 'template/discuss.html',
                    controller : ctrl.discussCtrl
                })
            
            // login state
            .state("main.login", {
                url : '/login',
                templateUrl : 'template/login.html',
                controller : ctrl.loginCtrl
            })
            // sign up state
            .state("main.signup", {
                url : '/signup',
                templateUrl : 'template/signup.html',
                controller : ctrl.signupCtrl
            })
    })

    .filter('capitalize', function(){
       return function(input) {
           return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : ''
       }
    });
