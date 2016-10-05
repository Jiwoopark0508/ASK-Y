"use strict";

import angular from "angular";
import "angular-ui-router";
import ctrl from "./controller";            // controllers in here

angular.module("mqApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/main');
        
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
            
            // 
               .state("main.instruction", {
                    url: '/instruction',
                    templateUrl: 'template/instruction.html',
                    controller: ctrl.instructionCtrl
                })
               .state("main.lecture", {
                    url: '/lecture',
                    templateUrl : 'template/lecture.html',
                    controller : ctrl.lectureCtrl
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
    })
