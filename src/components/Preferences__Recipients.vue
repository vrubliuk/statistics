<template>
  <div class="container">
    <table >
      <tr>
        <td>
          <div class="buttonContainer">
            <input :class="{'input-red': saveButtonHovered }" v-model.trim="inputValue" type="text" placeholder="Enter email here" />
            <div class="button"  @click="handleClick" @mouseover="saveButtonHovered = true" @mouseout="saveButtonHovered = false" >Add</div>
          </div>
        </td>
      </tr>
      <tr v-for="recipient in recipientsArray" :key="recipient">
        <td>
          <div class="recipient">
            <div>{{recipient}}</div>
            <div @click="removeRecipient(recipient)" class="button buttom-remove">&times;</div>
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
    ...mapGetters(["recipientsArray"])
  },
  methods: {
    ...mapMutations(["addRecipient", "removeRecipient"]),
    handleClick() {
      if (this.inputValue !== "") {
        const emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (emailRegExp.test(this.inputValue)) {
          this.addRecipient(this.inputValue);
          this.inputValue = "";
        } else {
          alert("Please enter a valid email address.");
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
  font-size: 2vw;
  padding: 0 1vw;
  height: 2.5vw;
  line-height: 2.5vw;
}

.buttonContainer {
  font-size: 0;
}

.button {
  width: 12vw;
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

.buttom-remove {
  width: 1.8vw;
}

input {
  vertical-align: middle;
  border: 0.1vw solid white;
  padding: 0;
  font-size: 1.4vw;
  line-height: 1.6vw;
  height: 1.8vw;
  background: black;
  color: white;
  width: 41vw;
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

.recipient {
  div:first-child {
    display: inline-block;
  }
}
</style>


