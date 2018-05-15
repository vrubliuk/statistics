<template>
  <div id="App" :style="wallpaper" >
    <preloader v-if="showPreloader"></preloader>
    <navigation></navigation>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import { settingsDefault } from "./settingsDefault";
import { wallpapers } from "./wallpapers";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Counter from "./components/Counter";
import Email from "./components/Email";
import Preferences from "./components/Preferences";

export default {
  computed: {
    ...mapGetters([
      "showPreloader",
      "currentTab",
      "counterValue",
      "counterMaximized",
      "currentWallpaperNumber",
      "recipientsArray",
      "userName",
      "userSurname",
      "userTeamLead",
      "signatureType",
      "signatureCustom"
    ]),
    settings: {
      get() {
        return {
          counterValue: this.counterValue,
          counterMaximized: this.counterMaximized,
          wallpaperNumber: this.currentWallpaperNumber,
          recipients: this.recipientsArray,
          userName: this.userName,
          userSurname: this.userSurname,
          userTeamLead: this.userTeamLead,
          signatureType: this.signatureType,
          signatureCustom: this.signatureCustom
        };
      },
      set(value) {
        this.setCounter(value.counterValue);
        this.setCounterSize(value.counterMaximized);
        this.setWallpaper(value.wallpaperNumber);
        this.setRecipients(value.recipients);
        this.setUserName(value.userName);
        this.setUserSurname(value.userSurname);
        this.setUserTeamLead(value.userTeamLead);
        this.setSignatureType(value.signatureType);
        this.setSignatureCustom(value.signatureCustom);
      }
    },
    wallpaper() {
      return {
        "background-image": `url(${wallpapers[this.currentWallpaperNumber]})`
      };
    }
  },
  watch: {
    settings() {
      if (typeof Storage !== "undefined") {
        localStorage.setItem("settingsLocal", JSON.stringify(this.settings));
      }
    }
  },

  methods: {
    ...mapMutations([
      "hidePreloader",
      "increaseCounter",
      "decreaseCounter",
      "setCounter",
      "setCounterSize",
      "setWallpaper",
      "setRecipients",
      "setUserName",
      "setUserSurname",
      "setUserTeamLead",
      "setSignatureType",
      "setSignatureCustom"
    ])
  },
  components: {
    Preloader,
    Navigation,
    Counter,
    Email,
    Preferences
  },

  beforeMount() {
    if (
      typeof Storage !== "undefined" &&
      localStorage.getItem("settingsLocal")
    ) {
      this.settings = JSON.parse(localStorage.getItem("settingsLocal"));
    } else {
      this.settings = settingsDefault;
    }
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
