import appModule from './appModule.js';
fdescribe('Testing my-directive', function () {
   var $rootScope, $compile, element, scope;

   beforeEach(function () {

      window.module(appModule.name);

      inject(function ($injector) {

         $rootScope = $injector.get('$rootScope');
         $compile = $injector.get('$compile');
         element = angular.element('<my-profile user="John"></my-profile>');
         scope = $rootScope.$new();

         // wrap scope changes using $apply
         scope.$apply(function () {
            scope.user = {name: "John"};
            $compile(element)(scope);
         });

         //scope.$apply();
         console.log('--- element ---');
         console.log(element);
        // console.log(element[0].innerText);
      });
   });

   it('Name should be rendered', function () {
     // expect(element[0].innerText).toEqual('John');
      expect(element.scope().user.name).toEqual('John');
   });
});