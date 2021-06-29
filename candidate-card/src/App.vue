<template>
  <div id="app">
    <MenuBar />
    <div class="wrapper">
      <div class="main_page">
        <VacancyPage />
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
import VacancyPage from '@/components/VacancyPage';
import SideBar from '@/components/SideBar'
import MenuBar from '@/components/MenuBar'

export default {
  name: 'App',
  components: {
    VacancyPage, SideBar, MenuBar
  }
}
</script>

<style  lang="scss">

</style>
