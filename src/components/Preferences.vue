<template>
  <div class="Preferences">
    <table class="Preferences__table">
      <tr>
        <td class="Preferences__nav">
          <div class="Preferences__tab" :class="{'Preferences__tab-active': tab === currentTab}" v-for="tab in tabs" :key="tab">
            <div @click="switchTab(tab)">{{tab}}</div>
          </div>
        </td>
        <td class="Preferences__content">
          <component :is="`Preferences__${currentTab}`"></component>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import Preferences__Counter from "./Preferences__Counter";
import Preferences__Wallpaper from "./Preferences__Wallpaper";
import Preferences__Recipients from "./Preferences__Recipients";
import Preferences__Signature from "./Preferences__Signature";

export default {
  data() {
    return {
      currentTab: "Counter",
      tabs: ["Counter", "Wallpaper", "Recipients", "Signature"]
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    }
  },
  components: {
    Preferences__Counter,
    Preferences__Wallpaper,
    Preferences__Recipients,
    Preferences__Signature
  }
};
</script>

<style>
.Preferences {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 70vw;
  height: 35vw;
  opacity: 0.7;
  background-color: black;
  color: white;
}
.Preferences__table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.Preferences__nav {
  width: 14vw;
  vertical-align: top;
  padding: 1vw 0.5vw;
  background: white;
  position: relative;
}

.Preferences__tab {
  border-left: 0.5vw solid white;
  border-right: 0.5vw solid white;
  color: black;
}

.Preferences__tab > div {
  cursor: pointer;
  padding: 0 0.5vw;
  font-size: 2vw;
  height: 2.5vw;
  line-height: 2.5vw;
}

.Preferences__tab > div:hover {
  background: black;
  color: white;
}

.Preferences__tab-active {
  border-left: 0.5vw solid red;
  color: red;
}

.Preferences__tab-active > div:hover {
  color: red;
}

.Preferences__content {
  width: 56vw;
  padding: 0;
  vertical-align: top;
  position: relative;
}
</style>




