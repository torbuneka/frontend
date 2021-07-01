<template>
  <div id="app">
    <MenuBar />
    <div class="wrapper">
      <div class="main_page">
        <CandidatePage />
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
import CandidatePage from '@/components/CandidatePage';
import SideBar from '@/components/SideBar'
import MenuBar from '@/components/MenuBar'

export default {
  name: 'App',
  components: {
    CandidatePage, SideBar, MenuBar
  }
}
</script>

<style  lang="scss">

</style>
