import appModule from './appModule.js';

describe('Directive: myDirective', function () {

   beforeEach(window.module(appModule.name));
//   beforeEach(window.module('templates'));

   var element;
   var scope;
   beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<my-directive something="thing"></my-directive>');
      element = $compile(element)(scope);
      scope.thing = {name: 'My thing'};
      scope.$digest();
   }));

});