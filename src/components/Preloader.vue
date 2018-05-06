<template>
  <div class="Preloader" >
      <img :src='preloaderImage' alt="Loading..." />
    </div>
</template>

<script>
import preloaderImage from '../assets/preloader.gif'

export default {
  data(){
    return {
      preloaderImage
    }
  }
}
</script>


<style >
  .Preloader {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
}

</style>


