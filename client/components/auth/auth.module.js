'use strict';

angular.module('testappApp.auth', ['testappApp.constants', 'testappApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
