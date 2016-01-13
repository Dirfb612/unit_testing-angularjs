
function AppController() {

   var self = this;

   self.name = 'John';

   self.items = [
      {id: 1, label: 'First', done: true},
      {id: 2, label: 'Second', done: false}
   ];
   self.getDoneClass = function (item) {
      return {
         finished: item.done,
         unfinished: !item.done
      };
   };

   self.users = [
      {name: "John", type: "twitter"},
      {name: "Maria" ,type: "facebook"}
   ];

   console.log('--- users ---');
   console.log(self.users);
}

export default AppController;