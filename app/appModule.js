import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppController from './appController.js';
import myFactory from './appFactory.js';
import myDirective from './appDirective.js';

let appModule = angular.module('app', [])
   .controller('AppController', AppController)
   .factory('myFactory', myFactory)
   .directive('myDirective', myDirective);

export default appModule;