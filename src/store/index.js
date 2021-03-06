import Vue from "vue";
import Vuex from "vuex";
import firebaseMutations from "vuexfire";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
    auth,
  },
});
