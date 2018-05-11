<template>
  <div class="Counter" :class="{'Counter_maximized': counterMaximized, [`animated ${animationType}`]: animationRunning}" :style="{ 'animation-duration': animationDuration + 'ms' }">
      <div class="Counter__number" @click="handleClick">{{counterValue}}</div>
      <div class="Counter__resize-button" @click="resizeCounter" >
        <i :class="counterMaximized ? 'fa fa-compress' : 'fa fa-expand'" aria-hidden="true"></i>
      </div>
    </div>
</template>


<script>
import $ from "jquery";
import "animate.css/animate.min.css";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "counterValue",
      "counterMaximized",
      "animationType",
      "animationDuration",
      "animationRunning",
      "currentTab"
    ])
  },
  methods: {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter",
      "runAnimation",
      "stopAnimation",
      "resizeCounter"
    ]),
    handleClick() {
      if (!this.animationRunning) {
        if (this.counterValue < 999) {
          this.increaseCounter();
          this.runAnimation();
          setTimeout(() => {
            this.stopAnimation();
          }, this.animationDuration);
        } else {
          alert("You've reached the limit!");
        }
      }
    },
  }
 
};
</script>

<style>
.Counter {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 70vw;
  height: 35vw;
  line-height: 35vw;
  font-size: 30vw;
  opacity: 0.6;
  box-shadow: 0 0 8px 0 black;
  text-align: center;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.Counter_maximized {
  width: 80vw;
  height: 40vw;
  line-height: 40vw;
  font-size: 32vw;
}

.Counter__resize-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 3vw;
  height: 4vw;
  width: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Counter__resize-button:hover {
  background-color: white;
  color: black;
  box-shadow: 0 0 8px 0 white;
}
</style>



