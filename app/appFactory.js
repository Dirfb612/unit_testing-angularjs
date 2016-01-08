function myFactory() {
   var lng = {},
      _languages = ['en', 'es', 'fr'];

   lng.get = function () {
      console.log('--- _languages ---');
      console.log(_languages);
      return _languages;

   };
   console.log('---  lng---');
   console.log(lng);
   return lng;
}
export default myFactory;