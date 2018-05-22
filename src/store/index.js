import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
  siteName: 'tomes basketball',
  metaName: '',
  pageSize: 10,
  userAccount: '',
  dividerInfo: '我是有底线的'
};

// getters
const getters = {
  siteName: state => state.siteName,
  metaName: state => state.metaName,
  pageSize: state => state.pageSize,
  userAccount: state => state.userAccount,
  dividerInfo: state => state.dividerInfo
}
// mutations
const mutations = {
  userAccount(state, account) {
    state.userAccount = account;
  },
}

// actions
const actions = {

}
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
});
