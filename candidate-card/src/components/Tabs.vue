<template>
    <div class="Tabs">
      <el-menu
      default-active="0"
      mode="horizontal"
      text-color="#C0C0C0"
      active-text-color="#2d81ce"
      @select="handleSelect"
    >
      <el-menu-item index="0">Резюме</el-menu-item>
      <el-menu-item index="1">Чек-лист</el-menu-item>
      <el-menu-item index="2">Коммуникации</el-menu-item>
      <el-menu-item index="3">Документы</el-menu-item>
      <el-menu-item index="4">История</el-menu-item>
    </el-menu>
    </div>

    
    
</template>
<script>

export default {
  name: 'Tabs',

  data() {
    return {
      tabToShow: "0",
    };
  },
  
  methods: {
    handleSelect(key) {
      this.tabToShow = key;
    },
  },
  
}
</script>
<style  lang="scss">

</style>