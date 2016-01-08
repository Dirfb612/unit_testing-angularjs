function myDirective (){

   return {
      restrict: 'E',
      template: '<div>{{user.name}}</div>',
      //templateUrl: 'path/template.tpl.html'
      scope: {
         user: '=data'
      },
      replace: true
   };

}

export default myDirective;