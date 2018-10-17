import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './Modules/stocks';
import portfolio from './Modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});