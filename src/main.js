window.jQuery = require('jquery');
require('bootstrap-webpack');

import Vue from 'vue';

Vue.config.debug = true;

new Vue({
    el: 'body',
    components: {
        App: require('./App')
    }
});
