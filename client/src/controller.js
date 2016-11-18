"use strict";

let ctrl = {
    testCtrl() {
        console.log("testCtrl");
    },
    // main page
    mainCtrl($scope, $location){
        // main Controller 
        let tabList = [
            "instruction",
            "lectureList",
            "question",
            "discuss"
        ]
        $scope.tabList = tabList;
        angular
        .element(document)
        .ready(function(){
            $scope.curTab = $location.url().split('/')[2];
            console.log($scope.curTab);
            $(".iconcard").click(function(){
                $(".iconcard").removeClass("active");
                $(this).addClass("active");
            });
            
        });
    },
    lectureListCtrl($scope, $http){
        let getLectures = function(){
            $http.get('/lecture')
                 .then(function(response){
                    $scope.lectures = response.data;
                 });
        }
        getLectures();
    },
    questionCtrl($scope, $http){
        let getTemplate = function(){
            $http.get('/template')
                 .then(function(response){
                    $scope.template = response.data; 
                 });
        };
        let chipFunc = function(){
            $('.chips').material_chip();
        }
        chipFunc();
        getTemplate();
    },
    discussCtrl(){},

    currentLectureCtrl(){

    },

    loginCtrl(){
        console.log(1);    
    },
    signupCtrl($scope, $http){
        let signup = function(user){
            $http.post('signup', user)
                 .then(function(){
                     console.log(data);
                 });
        };
        $scope.signup = signup;
    }


}
module.exports = ctrl;
