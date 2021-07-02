<template>
  <div class="vacancy-tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Подбор" name="search"></el-tab-pane>
      <el-tab-pane label="Комментарии" name="comments"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "search",
    };
  },
  name: "vacancy-tabs",
};
</script>

<style lang="scss" scoped>
.el-tabs {
  & ::v-deep &__item {
    font-size: 18px;
    font-weight: bold;
    color: $black-400;
    margin: -10px 0px 7px 0px;
    &.is-active {
      color: $blue-600;
    }
  }
  & ::v-deep &__nav-scroll {
    margin: 25px 0px 0px 0px;
  }
  & ::v-deep &__active-bar {
    background-color: $blue-600;
    height: 4px;
  }
  & ::v-deep &__header {
    margin: 0px;
  }
  & ::v-deep &__nav-wrap::after {
    height: 1px;
  }
  &__nav {
    margin-left: 25px;
  }
}
</style>