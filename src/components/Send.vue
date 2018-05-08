<template>
  <div class="Send">
    <table class="Send__table">
      <tr class="Send__main">
        <td class="Send__tabList">
          <div class="Send__tab" :class="{'Send__tab-active': tab === currentTab}" v-for="tab in tabs" :key="tab">
            <div>{{tab}}</div>
          </div>

        </td>
        <td class="Send__content"></td>
      </tr>
      <tr class="Send__footer">
        <button>Create email</button>
      </tr>

    </table>

  </div>
</template>


<script>
export default {
  data() {
    return {
      currentTab: "Message",
      tabs: ["Receivers", "Subject", "Message", "Signature"]
    };
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
  box-shadow: 0 0 8px 0 black;
  background-color: black;
  color: white;
  padding: 1vw;
}
.Send__table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}
.Send__main {
  height: 80%;
}

.Send__tabList {
  width: 20%;
  vertical-align: top;
}

.Send__tab {
  border-left: 10px solid black;
  border-right: 10px solid black;
  color: white;
}

.Send__tab > div {
  cursor: pointer;
  padding: 0 1vw;
  font-size: 2vw;
}

.Send__tab > div:hover {
  background: white;
  color: black;
}

.Send__tab-active {
  border-left: 10px solid red;
  color: red;
}
.Send__tab-active > div:hover {
  color: red;
}
</style>


