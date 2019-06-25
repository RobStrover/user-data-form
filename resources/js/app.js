/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.Vuex = require('vuex');

window.Vue.use(window.Vuex);

const FormModule = require('./modules/SiteForms');


$(document).ready(() => {
    FormModule.initSiteForms();
});