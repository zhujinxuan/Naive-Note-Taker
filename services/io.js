app.factory('io', function($http){
  return {
    get: function(){
      return [
        '# How does role=form help accessibility?\n If you add a role="form" to a form, a screen reader sees it as a region on a webpage. That means that a user can easily jump to the form with his/her region quick navigation keys (for example, in JAWS 15 you use R for this). And also, your user will be able to easily find where the form starts and ends because screen readers mark start and end of regions. '
      ].map(function(xx){return {markdown:xx}});
    },
    post: function(datas){
    }
  }
})
