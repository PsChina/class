import Vue from './vue';
import gesture from './vue-gesture';
import main from './main';
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.use(gesture); 

main(Vue);