var app = angular.module("notes-app", ["hc.marked", "ngSanitize"]);


app.controller("notesController", function($rootScope,$scope,io){
  $rootScope.datas = io.get();
  $scope.global = $rootScope
  $scope.update =function(ind){
    $rootScope.editor_ind = ind;
    $rootScope.$broadcast('CHANGE_EDITOR_IND',ind);
  }
});
