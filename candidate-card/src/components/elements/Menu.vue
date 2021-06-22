<template>
    <el-menu
      default-active="0"
      mode="horizontal"
      text-color="#C0C0C0"
      active-text-color="#2d81ce"
    >
      <el-menu-item index="0">Подбор</el-menu-item>
      <el-menu-item index="1">Комментарии</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    
}
</script>

<style>

.el-tabs__header {
  margin-bottom: 0px !important;
}
.el-menu {
  /*margin-top: -20px;*/
  justify-content: space-around;
}
.el-menu-item {
  font-size: 18px;
  font-weight: bold;
  margin-right: 40px;
  
}
.el-menu-item.is-active {
  font-size: 18px;
}
.el-menu-item:hover {
  font-size: 18px;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: 4px solid #409eff;
  padding-left: 24px;
  margin-right: 24px;
  overflow-block: 24px;
  margin-block: 24px;
}

</style>
