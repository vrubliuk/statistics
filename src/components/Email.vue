<template>
  <div class="Send">
    <table class="Send__table">
    
      <tr class="Send__table__main">
        <td>Released:</td>
        <td class="Send__counterValue">{{counterValue}}</td>
      </tr>
      <tr  class="Send__table__main" >
        <td>Shared inbox:</td>
        <td>
          <label class="Send__checkbox">
            <input class="Send__checkbox__input" type="checkbox" value="Shared inbox" v-model="additionalActivities">
            <span class="Send__checkbox__slider"></span>
          </label>
        </td>
      </tr>
      <tr class="Send__table__main">
        <td>Audit:</td>
        <td>
          <label class="Send__checkbox">
            <input class="Send__checkbox__input" type="checkbox" value="Audit" v-model="additionalActivities"> 
            <span class="Send__checkbox__slider"></span>
          </label>
        </td>
      </tr>
      <tr class="Send__table__main">
        <td>Report:</td>
        <td>
          <label class="Send__checkbox">
            <input class="Send__checkbox__input" type="checkbox" value="Report" v-model="additionalActivities">
            <span class="Send__checkbox__slider"></span>
          </label>
        </td>
      </tr>
      <tr class="Send__table__main">
        <td>Short-term hold:</td>
        <td>
          <label class="Send__checkbox">
            <input class="Send__checkbox__input" type="checkbox" value="Short-term hold" v-model="additionalActivities">
            <span class="Send__checkbox__slider"></span>
          </label>
        </td>
      </tr>
      <tr class="Send__table__footer">
        <td colspan="2">
          <button class="Send__button" @click="handleClick">Create email</button>
        </td>
      </tr> 
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      additionalActivities: []
    };
  },
  computed: {
    ...mapGetters(["counterValue", "recipientsArray", "signatureText"]),
    currentDate() {
      const date = new Date();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    },
    recipients() {
      return "vrubliuk@plslogistics.com; yzborovska@plslogistics.com";
    },
    subject() {
      return `statistics ${this.currentDate}`;
    },
    body() {
      const released = `Released: ${this.counterValue}`;
      const activities = this.additionalActivities.join("%0A");
      return `${released}${
        this.additionalActivities.length ? "%0A" : ""
      }${activities}`;
    },
    signature() {
      const correctedSignature = this.signatureText.replace(/\n/g, "%0A");
      return `${
        correctedSignature.length ? "%0A%0A" : ""
      }${correctedSignature}`;
    }
  },
  methods: {
    createEmail() {
      location.href = `mailto:${this.recipients}?subject=${this.subject}&body=${
        this.body
      }${this.signature}`;
    },
    handleClick() {
      this.createEmail();
    }
  },
  components: {}
};
</script>



<style>
.Send {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 70vw;
  height: 35vw;
  opacity: 0.6;
  /* box-shadow: 0 0 8px 0 black; */
  background-color: black;
  color: white;
  font-size: 3vw;
  padding: 1.5vw;
}
.Send__table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.Send__table__main {
  height: 3vw;
}
.Send__table td {
  /* border: 1px solid red; */
  width: 50%;
  vertical-align: middle;
}

.Send__table td:nth-child(2) {
  text-align: right;
}

.Send__counterValue {
  color: red;
  text-shadow: 0 0 8px red;
}

.Send__checkbox {
  position: relative;
  display: inline-block;
  width: 5vw;
  height: 3vw;
}

.Send__checkbox input {
  display: none;
}

.Send__checkbox__slider {
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

.Send__checkbox__slider:before {
  position: absolute;
  content: "";

  height: 2.4vw;
  width: 2.4vw;
  left: 0.3vw;
  top: 0.3vw;

  background-color: black;
  transition: 0.4s;
}

.Send__checkbox__input:checked + .Send__checkbox__slider {
  background-color: red;
  box-shadow: 0 0 8px 0 red;
}

.Send__checkbox__input:focus + .Send__checkbox__slider {
  box-shadow: 0 0 1px red;
}

.Send__checkbox__input:checked + .Send__checkbox__slider:before {
  /* transform: translateX(2vw); doesn't work properly in IE */
  transform: translateX(83%);
}

.Send__table__footer {
  text-align: center;
}
.Send__table__footer td {
  vertical-align: bottom;
}

.Send__button {
  /* margin: 1vw; */
  border: none;
  padding: 0.5vw 1vw;
  font-size: 3vw;
  line-height: 3vw;
  font-family: localImpact;
  background: white;
  color: black;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 8px 0 white;
  width: 100%;
}

.Send__button:hover {
  background: red;

  box-shadow: 0 0 8px 0 red;
}
</style>


