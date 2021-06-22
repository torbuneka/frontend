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

<style>
.main_page{
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: auto; 
}
.wrapper{
  max-width: 1200px;
  margin: auto; 
}
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*width: 1200px;*/
  background-color: #FAF9F9;
}


</style>
