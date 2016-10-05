"use strict";

let ctrl = {
    testCtrl() {
        console.log("testCtrl");
    },
    // main page
    mainCtrl($scope){
        // main Controller 
        angular
        .element(document)
        .ready(function(){
            $(".iconcard").click(function(){
                $(".iconcard").removeClass("active");
                $(this).addClass("active");
            });
            
        });
    },
    lectureCtrl($scope){
        
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
            $('.chips-initial').material_chip({
                
            });
            $('.chips-placeholder').material_chip({
               placeholder: 'Enter a tag',
               secondaryPlaceholder: '+tag'
            });
        }
        chipFunc();
        getTemplate();
    },
    discussCtrl(){}
}
module.exports = ctrl;
