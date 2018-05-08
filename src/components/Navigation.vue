<template>
  <div class="Navigation">
      <div class="Navigation__triangle Navigation__triangle_triangle-top"></div>
        <div class="Navigation__button" :class="{'Navigation__button_active': tab.name === currentTab }" v-for="tab in tabs" :key="tab.name" @click="switchTab(tab.name)" >
          <i :class="tab.icon" aria-hidden="true"></i>
        </div>
      <div class="Navigation__triangle Navigation__triangle_triangle-bottom"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentTab", "tabs"])
  },
  methods: {
    ...mapMutations(["switchTab"])
  }
};
</script>


<style>
.Navigation {
  height: 24vw;
  opacity: 0.6;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
}

.Navigation__button {
  cursor: pointer;
  background-color: white;
  color: black;
  height: 4vw;
  width: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
}

.Navigation__button:hover {
  background-color: black;
  color: white;
}

.Navigation__button_active {
  color: red;
}

.Navigation__button_active:hover {
  color: red;
}

.Navigation__triangle {
  height: 4vw;
  width: 4vw;
}

.Navigation__triangle_triangle-top {
  border-right: 4vw solid transparent;
  border-bottom: 2vw solid white;
}

.Navigation__triangle_triangle-bottom {
  border-right: 4vw solid transparent;
  border-top: 2vw solid white;
}
</style>




