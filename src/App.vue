<template>
  <div id="App" :style="wallpaper" >
    <!-- <preloader v-if="showPreloader"></preloader> -->
    <navigation></navigation>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import $ from "jquery";
import { wallpapers } from "./wallpapers";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Counter from "./components/Counter";
import Preferences from "./components/Preferences";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["showPreloader", "currentWallpaperNumber", "currentTab"]),
    wallpaper() {
      return {
        "background-image": `url(${wallpapers[this.currentWallpaperNumber]})`
      };
    }
  },
  methods: {
    ...mapMutations(["hidePreloader"])
  },

  components: {
    Preloader,
    Navigation,
    Counter,
    Preferences
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        $(".Preloader").fadeOut("slow", () => {
          this.hidePreloader();
        });
      }, 1000);
    });
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: impact;
}

* {
  box-sizing: border-box;
  user-select: none;
  outline: none;
}

#App {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
