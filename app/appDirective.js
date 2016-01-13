import controller from './appController.js';

function directive () {

   return {
      restrict: 'E',
      template: '<div>{{user.name}}<div>',
      //templateUrl: 'path/template.tpl.html'
      controller,
      scope: {
         user: '=data'
      },
      replace: true
   };

}

export default directive;