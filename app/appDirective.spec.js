import appModule from './appModule.js';
fdescribe('Testing my-directive', function () {
   var $rootScope, $compile, element, scope;

   beforeEach(function () {
      window.module(appModule.name);
      inject(function ($injector) {
         $rootScope = $injector.get('$rootScope');
         $compile = $injector.get('$compile');
         element = angular.element('<my-profile data="user"></my-profile>');
         scope = $rootScope.$new();
         // wrap scope changes using $apply
         scope.$apply(function () {
            scope.user = {name: "John"};
            $compile(element)(scope);
         });
      });
   });

   it('Name should be rendered', function () {
      expect(element[0].innerText).toEqual('John');
   });
});