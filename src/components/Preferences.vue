<template>
  <div class="Preferences">
      <table class="Preferences__table">
          <tr>
            <td class="Preferences__title" colspan="2" >Counter</td>
          </tr>
          <tr>
            <td class="Preferences__section">Reset number:</td>
            <td class="Preferences__section Preferences__section_right"><button class="Preferences__button" @click="resetCounter"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td class="Preferences__section" >Adjust number:</td>
            <td class="Preferences__section Preferences__section_right"><input class="Preferences__input" v-model.trim.number="currentCounterValue" type="text" maxlength='3'/></td>
          </tr>
          <tr>
            <td class="Preferences__title" colspan="2">Wallpaper</td>
          </tr>
          <tr>
            <td class="Preferences__section">Previous image:</td>
            <td class="Preferences__section Preferences__section_right"><button class="Preferences__button" @click="changeWallpaperPrevious" ><i class="fa fa-arrow-left" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td class="Preferences__section">Next image:</td>
            <td class="Preferences__section Preferences__section_right"><button class="Preferences__button" @click="changeWallpaperNext" ><i class="fa fa-arrow-right" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td class="Preferences__section">Random image:</td>
            <td class="Preferences__section Preferences__section_right"><button class="Preferences__button" @click="changeWallpaperRandom" ><i class="fa fa-random" aria-hidden="true"></i></button></td>
          </tr>
    </table>

    </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["counterValue"]),
    currentCounterValue: {
      get() {
        return this.counterValue;
      },
      set(value) {
        this.setCounter(value);
      }
    }
  },
  methods: {
    ...mapMutations([
      "resetCounter",
      "setCounter",
      "changeWallpaperPrevious",
      "changeWallpaperNext",
      "changeWallpaperRandom"
    ])
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
  opacity: 0.6;
  box-shadow: 0 0 8px 0 black;
  background-color: black;
  color: white;
}

.Preferences__table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.Preferences__title {
  font-size: 4vw;
  text-align: center;
  text-transform: uppercase;
}

.Preferences__section {
  width: 50%;
  font-size: 3vw;
  padding: 0.5vw;
}

.Preferences__section_right {
  text-align: right;
}

.Preferences__button {
  border: none;
  font-size: 3vw;
  background: white;
  color: black;
  width: 15vw;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 8px 0 white;
}

.Preferences__button:hover {
  background: red;
  box-shadow: 0 0 8px 0 red;
}

.Preferences__input {
  font-weight: bold;
  border: none;
  font-size: 3vw;
  background: white;
  color: black;
  width: 15vw;
  text-align: center;
  box-shadow: 0 0 8px 0 white;
}

.Preferences__input:hover,
.Preferences__input:focus {
  color: red;
  box-shadow: 0 0 8px 0 red;
}
</style>


