import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppController from './appController.js';
import myFactory from './appFactory.js';
import directive from './appDirective.js';
import component from './appComponent.js'

let appModule = angular.module('app', [])
   .controller('AppController', AppController)
   .factory('myFactory', myFactory)
   .directive('myDirective', directive)
   .directive('myComponent', component);

export default appModule;