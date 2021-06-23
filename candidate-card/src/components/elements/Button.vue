<template>
  <div class="button">

        <el-button v-bind:type="type" v-bind:class="{
          blueButton: color === 'blue',
          transparentButton: color === 'transparent',}">
          <div class="button__content">
            <Icon v-bind:icon-name="iconName" icon-color="#2D81CE" />
            <p class="button__content-text"  > {{ text }}</p>
          </div>
        </el-button>
  </div>
</template>

<script>
import Icon from "@/components/elements/Icon";

export default {
  props: {
    text: {
      type: String,
      default: "Новая кнопка",
    },
    iconName: {
      type: String,
      default: "Новая кнопка",
    },
    type: {
      type: String,
      default: "primary",
    },
    color: {
      type: String,
      default: "transparent",
    }
  },
  components: {
    Icon,
  },
  computed: {
    contentColor: function () {
       if (this.color === "blue") {
        return  "#2D81CE";
      } else if (this.color === "transparent") {
        return  "#2D81CE";
      } else return "#FFFFFF";
    },
  },
};
</script>

<style>
.el-button {
  align-items: flex-start;
  background: #eff8ff;
  border-radius: 12px;
  border-color: white;
  height: 40px;
  padding: 7px 20px 7px 20px;
  color: #2d81ce;
  margin-right: 12px;
  box-sizing: border-box;
  position: inherit;
}
.button__content {
  display: flex;
  flex-direction: row;
  color: #2d81ce;
}
.button__content-text {
  align-self: center;
  font-size: 16px;
  margin: 2px 0px 0px 5px;
  color: #2d81ce;
}
.blueButton {
  background: #EFF8FF;
  color: #2d81ce;
}
.blueButton:hover {
  background: #d6ebff;
  color: #1767b1;
}
.blueButton:disabled {
  background: #faf9f9;
  color: #2d81ce;
}

.transparentButton {
  background: transparent;
  border-color: transparent;
  color: #2d81ce;
}
.transparentButton:hover {
  background: transparent;
  border-color: transparent;
  background: #eff8ff;
}
</style>