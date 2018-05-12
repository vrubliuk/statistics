<template>
  <div class="container" >
     <!-- <table >
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
    </table> -->

  <div class="imagesContainer">


  
    <div 
      class="image" 
      :class="{'imageContainer-current': currentWallpaperNumber == number }"
      v-for="(wallpaper, number) in wallpapers" 
      :key="wallpaper" 
      :style="{ 'background-image': `url(${wallpaper})` }"
      @click="setWallpaper(number)"        
      >
    </div>

  </div>
  </div>
</template>


<script>
import { wallpapers } from "../wallpapers";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      wallpapers
    };
  },
  computed: {
    ...mapGetters(["currentWallpaperNumber"])
  },
  methods: {
    ...mapMutations(["setWallpaper"])
  }
};
</script>

<style lang="scss" scoped>



.container {
  // position: absolute;
  // width: 56vw;
  // height: 35vw;
  // border: 1px solid red;

  height: 100%;
  width: 100%;
  padding: 1vw 1vw;
  font-size: 0;
}
.imagesContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 33vw;
  width: 54vw;
}
.image {
  display: inline-block;
  // height: 18%;
  // width: 21%;
  // margin: 2%;
   height: 6.25vw;
   width: 11.5vw;
  margin: 1vw;

  box-shadow: 0 0 8px white;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    box-shadow: 0 0 16px white;
  }
}

.imageContainer-current {
  box-shadow: 0 0 8px red;
  &:hover {
    box-shadow: 0 0 16px red;
  }
}

table {
  width: 100%;
  // height: 100%;
  border-collapse: collapse;
  border: 1px solid blue;
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




