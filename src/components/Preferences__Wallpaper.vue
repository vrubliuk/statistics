<template>
  <div class="container" >
    <div class="imagesContainer">
      <div 
        class="image" 
        :class="{'image-current': currentWallpaperNumber == number }"
        v-for="(wallpaper, number) in wallpapersCompressed" 
        :key="wallpaper" 
        :style="{'background-image': `url(${wallpaper})`}"
        @click="setWallpaper(number)"        
        >
      </div>
    </div>
  </div>
</template>

<script>
import { wallpapersCompressed } from "../wallpapers";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      wallpapersCompressed
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

.image-current {
  box-shadow: 0 0 8px red;
  &:hover {
    box-shadow: 0 0 16px red;
  }
}
</style>