/*angular
   .module('MyApp', [])
   .filter('reverse', [function () {
      return function (string) {
         return string.split('').reverse().join('');
      }
   }])

   .controller('ListCtrl', [function () {
      var self = this;
      self.items = [
         {id: 1, label: 'First', done: true},
         {id: 2, label: 'Second', done: false}
      ];
      self.getDoneClass = function (item) {
         return {
            finished: item.done,
            unfinished: !item.done
         };
      }
   }])
   .directive("ehSimple", function () {
      return function (scope, element) {
         element.addClass("plain");
      }
   });*/
