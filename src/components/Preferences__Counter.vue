<template>
  <div class="container" >
     <table >
        <tr>
          <td >Current number:</td>
          <td  > <div class="counterValue">{{counterValue}}</div></td>
        </tr>
        <tr>
          <td >Reset number:</td>
          <td>  <div class="button button-reset"  @click="resetCounter" >Reset</div>   </td>
        </tr>
          <tr>
          <td  >Adjust number:</td>
          <td >
            <div class="buttonContainer">
              <input :class="{'input-red': saveButtonHovered }" v-model.trim="inputValue" type="text" maxlength='3' placeholder="Enter here" />
              <div class="button button-save"  @click="handleClick" @mouseover="saveButtonHovered = true" @mouseout="saveButtonHovered = false" >Save</div>
            </div>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
      saveButtonHovered: false
    };
  },
  computed: {
    ...mapGetters(["counterValue"])
  },
  methods: {
    ...mapMutations(["resetCounter", "setCounter"]),
    handleClick() {
      if (this.inputValue !== "") {
        let errors = 0;
        this.inputValue.split("").forEach(digit => {
          if (isNaN(digit)) errors++;
        });
        if (errors > 0) {
          alert("Please enter a valid number.");
          this.inputValue = "";
        } else {
          this.setCounter(this.inputValue);
          this.inputValue = "";
        }
      } else {
        alert("Nothing has been entered :(");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1vw 0.5vw;
}

table {
  width: 100%;
  border-collapse: collapse;
}
td {
  width: 50%;
  font-size: 2vw;
  padding: 0 1vw;
  height: 2.5vw;
  line-height: 2.5vw;
}
td:last-child {
  text-align: right;
}
.counterValue {
  color: red;
  text-shadow: 0 0 8px red;
}

.buttonContainer {
  font-size: 0;
}

.button {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 1.4vw;
  line-height: 1.8vw;
  height: 1.8vw;
  background: white;
  color: black;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 8px 0 white;
  &:hover {
    background: red;
    box-shadow: 0 0 8px 0 red;
  }
}

.button-reset {
  width: 12vw;
}
.button-save {
  width: 4vw;
}

input {
  user-select: auto;
  vertical-align: middle;
  border: 0.1vw solid white;
  padding: 0;
  font-size: 1.4vw;
  line-height: 1.6vw;
  height: 1.8vw;
  background: black;
  color: white;
  width: 8vw;
  text-align: center;
  box-shadow: 0 0 8px 0 white;
  transition: 0.2s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}

.input-red {
  color: red;
  border: 0.1vw solid red;
  box-shadow: 0 0 8px 0 red;
  &::placeholder {
    color: rgba(255, 0, 0, 0.5);
  }
}
</style>

