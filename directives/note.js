app.directive('note', function(){
  return {
    restrict: 'E',
    scope:{data:'='},
    templateUrl:'directives/note.html',
    link:function($scope,$element){
      $scope.udpate = function(ind){
        $rootScope.editor_ind = ind;
        $scope.$emit('CHANGE_EDITOR_IND',ind);
      }
      $scope.html =  marked($scope.data.markdown);
    }
  }
})
