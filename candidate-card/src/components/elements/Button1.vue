<template>
  <!-- Новый компонент, сейчас используется для всех кнопок -->
  <el-button
    v-bind:class="{
      blueButton: buttonColor === 'blue',
      darkBlueButton: buttonColor === 'darkBlue',
      transparentButton: buttonColor === 'transparent',
      big: buttonSize === 'big',
      medium: buttonSize === 'medium',
      small: buttonSize === 'small',
    }"
    v-bind:disabled="disabled"
    @click="click"
  >
    <div class="button__content">
      <Icon
        v-if="hasLeftIcon"
        v-bind:icon-name="iconName"
        v-bind:icon-color="contentColor"
      />
      <p
        v-if="buttonText !== ''"
        class="content__text"
        v-bind:style="{ color: contentColor }"
      >
        {{ buttonText }}
      </p>
      <Icon
        v-if="hasRightIcon"
        v-bind:icon-name="iconName"
        v-bind:icon-color="contentColor"
      />
    </div>
  </el-button>
</template>
<script>
import Icon from "@/components/elements/Icon";
export default {
  props: {
    buttonSize: {
      type: String,
      default: "medium",
    },
    buttonColor: {
      type: String,
      default: "blue",
    },
    buttonText: {
      type: String,
      default: "Текст",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hasLeftIcon: {
      type: Boolean,
      default: false,
    },
    hasRightIcon: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: "User-bold",
    },
    click: {
      type: Function,
      default: () => {
        console.log("Нажата кнопка!");
      },
    },
  },
  components: {
    Icon,
  },
  computed: {
    contentColor: function () {
      if (this.buttonColor === "darkBlue") {
        return this.disabled ? "#9E9E9E" : "#FFFFFF";
      } else if (this.buttonColor === "blue") {
        return this.disabled ? "#9E9E9E" : "#2D81CE";
      } else if (this.buttonColor === "transparent") {
        return this.disabled ? "transparent" : "transparent";
      } else return "#FFFFFF";
    },
  },
};
</script>
<style  lang="scss">
.el-button {
  border-radius: 12px;
  padding-top: 7px;
  border-color: transparent !important;
  position: relative;
  align-items: center !important;
}
.el-button.medium {
  border-radius: 12px;
  padding-top: 2px;
}
.el-button.small {
  border-radius: 12px;
  padding-top: 0px;
}
.big {
  height: 40px;
}
.medium {
  height: 30px;
}
.small {
  height: 25px;
  padding-top: 5px;
}
.blueButton {
  background: #eff8ff !important;
}
.blueButton:hover {
  background: #d6ebff;
  color: #1767b1;
}
.blueButton:disabled {
  background: #faf9f9;
}
.darkBlueButton {
  background: #2d81ce;
}
.darkBlueButton:hover {
  background: #1767b1;
}
.darkBlueButton:disabled {
  background: #e2e2e2;
}
.transparentButton {
  background: transparent;
  border-color: transparent;
}
.transparentButton:hover {
  background: transparent;
  border-color: transparent;
  background: #eff8ff;
}
.button__content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button__content-icon {
  padding-bottom: 2px;
}
.content__text {
  font-weight: bold;
  font-size: 16px;
  margin: 5px;
}
</style>