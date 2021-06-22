<template>
  <div class="button">
    <el-row>
      <el-col :span="4">
        <el-button v-bind:type="type">
          <div class="button__content">
            <Icon v-bind:icon-name="iconName" icon-color="#2D81CE" />
            <p class="button__content-text">{{ text }}</p>
          </div>
        </el-button>
      </el-col>
    </el-row>
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
  },
  components: {
    Icon,
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
  padding-top: 7px;
}
.button__content {
  display: flex;
  flex-direction: row;
}
.button__content-text {
  align-self: center;
  font-size: 16px;
  margin: 2px 0px 0px 5px;
  color: #2d81ce;
}
</style>