
app.directive("editor", function($rootScope){
  return {
    restrict: "EC",
    scope:{},
    templateUrl:"directives/editor.html",
    link: function($scope){
      $scope.parser = {};

      if ($rootScope.editor_ind > 0){
        $scope.parser.md = $scope.datas[$rootScope.editor_ind].markdown;
      } else{
        $rootScope.editor_ind = $rootScope.datas.length;
      }

      // $scope.html = function(){
      //   marked($scope.parser.md);
      // }

      $scope.update=function(){
          $scope.html = marked($scope.parser.md);
        if ($rootScope.editor_ind < 0){
          $rootScope.editor_ind = $rootScope.datas.length;
        }
        var ind = $rootScope.editor_ind;
        $rootScope.datas[ind] = {markdown:$scope.parser.md};
      }

      $scope.change = function(){
        var ind = $rootScope.editor_ind
        $scope.parser.md=$rootScope.datas[ind].markdown;
        $scope.update()
        // alert($scope.parser.md)
        // $scope.update();
      }
      $scope.confirmDelete = function(){
      }

      $scope.delete = function(){
        var ind = $rootScope.editor_ind;;
        $rootScope.editor_ind = -1;
        if (ind >=0) $rootScope.datas.splice(ind,ind);
        $scope.parser.md ="";
        $scope.html = "";
      };

      $scope.$on("CHANGE_EDITOR_IND", function (e, ind){
        $scope.change();
      });
      $scope.newNote = function(){
        $rootScope.editor_ind = $rootScope.datas.length;
        $scope.parser.md = "";
        $scope.html = "";
      }
    },
  }
})
