import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './Modules/stocks';
import portfolio from './Modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
});