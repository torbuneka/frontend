<template>
  <div class="input-type">
    <el-input
      placeholder=""
      v-model="input"
      v-bind:class="{
        big: inputSize === 'big',
        medium: inputSize === 'medium',
        small: inputSize === 'small',
      }"
      v-bind:disabled="disabled"
      :value="value"
    ></el-input>
  </div>
</template>

<script>
export default {
  props: {
    inputSize: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    input: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.input-type {
  .el-input {
    .el-input__inner {
      border-radius: 12px;
      color: $black_500;
      .small {
        background: $white;
        color: $black_500;
        border: 1px solid $black_300;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 0px 10px 0px 12px;
        font-size: 16px;
        line-height: 24px;
      }
      .medium {
        background: $white;

        border: 1px solid $black_300;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 4px 10px 4px 12px;
        font-size: 16px;
        line-height: 24px;
      }
      .big {
        background: $white;
        color: $black_500;
        border: 1px solid $black_300;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px 10px 8px 16px;
        font-size: 16px;
        line-height: 24px;
      }

      &:hover {
        background: $black_100;
      }
      &:active {
        border: 1px solid #57a2e8;
      }
      &:filled {
        color: $black_900;
      }
      &:error {
        border: 1px solid $red-700;
        color: $black_900;
      }
      &:disabled {
        background: $black_200;
      }
    }
  }
}
</style>