import appModule from './appModule.js';

fdescribe('Controller: MyController', function () {
   var AppController, LanguagesService;

   beforeEach(window.module(appModule.name));

   // Initialize the controller and a mock scope.

   /*   beforeEach(inject(function ($injector) {
    $q = $injector.get('$q');
    }));*/

   beforeEach(window.inject(($controller, $injector) => {
      AppController = $controller('AppController');
      LanguagesService = $injector.get('myFactory');
   }));

   it('should have items available on load', function () {
      expect(AppController.items).toEqual([
         {id: 1, label: 'First', done: true},
         {id: 2, label: 'Second', done: false}
      ]);
   });
   it('should have highlight items based on state', function () {

      var item = {id: 1, label: 'First', done: true};
      var actualClass = AppController.getDoneClass(item);

      expect(actualClass.finished).toBeTruthy();

      expect(actualClass.unfinished).toBeFalsy();

      item.done = false;

      actualClass = AppController.getDoneClass(item);

      expect(actualClass.finished).toBeFalsy();

      expect(actualClass.unfinished).toBeTruthy();

   });

   it('should return available languages', function () {
      var languages = LanguagesService.get();
      expect(languages).toContain('en');
      expect(languages).toContain('es');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
   });

});