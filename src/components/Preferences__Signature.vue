<template>
  <div class="container">
    <table>
      <tr>
        <td>Your name:</td>
        <td><input v-model="name" type="text" placeholder="Enter here"></td>
      </tr>
      <tr>
        <td>Your surname:</td>
        <td><input v-model="surname" type="text" placeholder="Enter here"></td>
      </tr>
      <tr>
        <td>You are the Team Lead:</td>
        <td>
          <label class="checkbox">
            <input class="checkbox__input" type="checkbox" v-model="teamLead">
            <span class="checkbox__slider"></span>
          </label>
        </td>
      </tr>
       <tr>
        <td>Style:</td>
        <td>
          <label class="radio">Default
            <input type="radio" name="radio" value="default" v-model="type">
            <span class="checkmark"></span>
          </label>
          <label class="radio">Custom
            <input type="radio" name="radio" value="custom" v-model="type">
            <span class="checkmark"></span>
          </label>
          <label class="radio">None
            <input type="radio" name="radio" value="none" v-model="type">
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>
      <tr v-if="signatureType === 'default' || signatureType === 'custom' ">
        <td class="textareaContainer" colspan="2">
          <textarea rows="5" placeholder="Add your signature here" :disabled="signatureType === 'default'" v-model="text" ></textarea>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "userName",
      "userSurname",
      "userTeamLead",
      "signatureType",
      "signatureText"
    ]),
    name: {
      get() {
        return this.userName;
      },
      set(value) {
        this.setUserName(value);
      }
    },
    surname: {
      get() {
        return this.userSurname;
      },
      set(value) {
        this.setUserSurname(value);
      }
    },
    teamLead: {
      get() {
        return this.userTeamLead;
      },
      set(value) {
        this.setUserTeamLead(value);
      }
    },
    type: {
      get() {
        return this.signatureType;
      },
      set(value) {
        this.setSignatureType(value);
      }
    },
    text: {
      get() {
        return this.signatureText;
      },
      set(value) {
        this.setSignatureCustom(value);
      }
    }
  },
  methods: {
    ...mapMutations([
      "setUserName",
      "setUserSurname",
      "setUserTeamLead",
      "setSignatureType",
      "setSignatureCustom"
    ])
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1vw 0.5vw;
  font-size: 2vw;
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
  width: 12vw;
  text-align: center;
  box-shadow: 0 0 8px 0 white;
  transition: 0.2s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}

.checkbox {
  position: relative;
  display: inline-block;
  width: 3vw;
  height: 1.8vw;
}

.checkbox input {
  display: none;
}

.checkbox__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  box-shadow: 0 0 8px 0 white;
  transition: 0.4s;
}

.checkbox__slider:before {
  position: absolute;
  content: "";
  height: 1.6vw;
  width: 1.6vw;
  left: 0.1vw;
  top: 0.1vw;
  background-color: black;
  transition: 0.4s;
}

.checkbox__input:checked + .checkbox__slider {
  background-color: red;
  box-shadow: 0 0 8px 0 red;
}

.checkbox__input:focus + .checkbox__slider {
  box-shadow: 0 0 1px red;
}

.checkbox__input:checked + .checkbox__slider:before {
  transform: translateX(75%);
}

.radio {
  display: inline-block;
  position: relative;
  padding-left: 2.2vw;
  margin-bottom: -0.3vw;
  cursor: pointer;
  font-size: 1.4vw;
  user-select: none;
  margin-left: 1vw;
}

.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.8vw;
  width: 1.8vw;
  background-color: white;
  box-shadow: 0 0 8px 0 white;
}

.radio input:checked ~ .checkmark {
  background-color: red;
  box-shadow: 0 0 8px 0 red;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.radio input:checked ~ .checkmark:after {
  display: block;
}

.radio .checkmark:after {
  left: 0.6vw;
  top: 0.3vw;
  width: 0.4vw;
  height: 0.8vw;
  border: solid black;
  border-width: 0 0.2vw 0.2vw 0;
  transform: rotate(45deg);
}

textarea {
  user-select: auto;
  color: black;
  margin: 0.7vw 0;
  width: 100%;
  font-size: 1.4vw;
  resize: none;
  padding: 0 0.5vw;
}
</style>
