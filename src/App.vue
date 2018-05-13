<template>
  <div id="App" :style="wallpaper" >
    <!-- <preloader v-if="showPreloader"></preloader> -->
    <navigation></navigation>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import { wallpapers } from "./wallpapers";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Counter from "./components/Counter";
import Email from "./components/Email";
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
    ...mapMutations(["hidePreloader", "increaseCounter", "decreaseCounter"])
  },
  components: {
    Preloader,
    Navigation,
    Counter,
    Email,
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
    window.addEventListener("keydown", event => {
      if (this.currentTab !== "counter") return;
      if (event.keyCode === 38) {
        this.increaseCounter();
      } else if (event.keyCode === 40) {
        this.decreaseCounter();
      }
    });
  }
};
</script>

<style>
@font-face {
  font-family: localImpact;
  src: url("./assets/fonts/impact.ttf");
}

body {
  margin: 0;
  padding: 0;
  /* font-family: localImpact; */
}

* {
  box-sizing: border-box;
  user-select: none;
  outline: none;
  font-family: localImpact;
}

 /* remove IE's “clear field” X button */
 input::-ms-clear {
   display: none;
 }

#App {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  transition: background 0.5s linear;
}
</style>
