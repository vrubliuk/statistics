<template>
  <div >
     <table >
          <tr>
            <td >Previous image:</td>
            <td ><button class="Preferences__button" @click="changeWallpaperPrevious" ><i class="fa fa-arrow-left" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td >Next image:</td>
            <td ><button class="Preferences__button" @click="changeWallpaperNext" ><i class="fa fa-arrow-right" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td>Random image:</td>
            <td ><button class="Preferences__button" @click="changeWallpaperRandom" ><i class="fa fa-random" aria-hidden="true"></i></button></td>
          </tr>
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "changeWallpaperPrevious",
      "changeWallpaperNext",
      "changeWallpaperRandom"
    ])
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  // height: 100%;
  border-collapse: collapse;
  // border: 1px solid blue;
}
td {
  // border: 1px solid red;
  width: 50%;
  font-size: 2vw;
  padding: 0 1vw;
  // color: black;
}
td:last-child {
  text-align: right;
}
button {
  border: none;
  font-size: 1.5vw;
  line-height: 1.8vw;
  height: 1.8vw; 
  background: white;
  color: black;
  width: 10vw;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 8px 0 white;
  &:hover {
    background: red;
    box-shadow: 0 0 8px 0 red;
  }
}

input {
  font-weight: bold;
  border: none;
  font-size: 1.5vw;
  background: white;
  color: black;
  width: 15vw;
  text-align: center;
  box-shadow: 0 0 8px 0 white;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 0 0 8px 0 red;
  }
}
</style>




