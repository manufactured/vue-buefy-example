import { auth } from "@/firebase";

const state = {
  user: {},
  isLoggedIn: false
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
};

const actions = {
  async login() {
    const provider = new auth.GoogleAuthProvider();
    await auth().signInWithPopup(provider);
  },
  async logout() {
    await auth().signOut();
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
