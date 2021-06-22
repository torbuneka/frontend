<template>
    <div>    
      <ul>
        <li class="lil" role="presentation" @click="currentTab = 'Резюме'"><a href="#">Резюме</a></li>
        <li class="lil" role="presentation" @click="currentTab = 'Чек-лист'"><a href="#">Чек-лист</a></li>
        <li class="lil" role="presentation" @click="currentTab = 'Коммуникации'"><a href="#">Коммуникации</a></li>
        <li class="lil" role="presentation" @click="currentTab = 'Документы'"><a href="#">Документы</a></li>
        <li class="lil" role="presentation" @click="currentTab = 'История'"><a href="#">История</a></li>
      </ul> 
      <div class="tab-content">
        <div v-if="currentTab == 'Резюме'">Главная
            ffhhfhfhf
            fdfddf
            df </div>
        <div v-if="currentTab == 'Чек-лист'">Профиль</div>
        <div v-if="currentTab == 'Коммуникации'">Сообщения</div>
      </div>
    </div>
    
</template>
<script>

export default {
    name: 'Tabs'
  
}
</script>
<style>
.currentTab {
  color: #16C0B0;
  text-decoration: underline;
}
.lil {
  list-style: none;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.ul {
    list-style: none;
    margin: 0;
}
</style>