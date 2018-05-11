<template>
  <div >
     <table >
          <tr>
            <td >Reset number:</td>
            <td ><button  @click="resetCounter"><i class="fa fa-refresh" aria-hidden="true"></i></button></td>
          </tr>
           <tr>
            <td  >Adjust number:</td>
            <td ><input  v-model.trim.number="currentCounterValue" type="text" maxlength='3'/></td>
          </tr>
    </table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["counterValue"]),
    currentCounterValue: {
      get() {
        return this.counterValue;
      },
      set(value) {
        this.setCounter(value);
      }
    }
  },
  methods: {
    ...mapMutations(["resetCounter", "setCounter"])
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
  vertical-align: middle;
  padding: 0;
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
  line-height: 1.8vw;
  height: 1.8vw; 
  background: white;
  color: black;
  width: 10vw;
  text-align: center;
  box-shadow: 0 0 8px 0 white;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 0 0 8px 0 red;
  }
}
</style>

