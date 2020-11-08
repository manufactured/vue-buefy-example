<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" v-if="isLoggedIn">
            <div class="is-user-avatar">
              <img class="is-rounded" :src="user.image" :title="user.nane" />
            </div>
            <div class="is-user-name">
              <span>{{ user.name }}</span>
            </div>
          </div>
          <div class="navbar-item" v-if="!isLoggedIn">
            <a class="button is-info" @click="login()">
              Log in
            </a>
          </div>
          <div class="navbar-item" v-if="isLoggedIn">
            <a class="button is-danger" @click="logout()">
              Log out
            </a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: mapState("auth", ["user", "isLoggedIn"]),
  methods: mapActions("auth", ["login", "logout"])
};
</script>

<style lang="scss">
.is-user-avatar {
  margin-right: 0.75rem;
  width: 1.75rem;
  height: 1.75rem;
}

.is-user-avatar img {
  border-radius: 50%;
}
</style>
