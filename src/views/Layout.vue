<template>
  <v-app id="inspire">
      
    <sidebar></sidebar>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SiGeCo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }}
        <a
          href="https://github.com/rodrigoUriarte/"
          target="_blank"
          style="color: white"
          >Rodrigo Uriarte</a
        >
      </span>
    </v-footer>

  </v-app>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>