<template>
    <div class="menu">
      <div class="menu_box">
      
      <img alt="t1" src="@/assets/talent.png" width="170" height="24">
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="Вакансии" name="vacancy"></el-tab-pane>
          <el-tab-pane label="Кандидаты" name="candidate"></el-tab-pane>
          <el-tab-pane label="Рассылки" name="mailings"></el-tab-pane>
        </el-tabs>
    </div>
      
      <div class="search">
        <form>
          <input type="text" placeholder="Поиск">
            <button type="submit"><i class="fa fa-search">найти</i></button>
        </form>
      </div>
      <div class="login_box ">
        <Notification />
        <div><p>Valentin Senin</p></div>
        <Avatar />
      </div>
      </div>
    </div>
</template>

<script >
import Notification from '@/components/elements/Notification'
import Avatar from '@/components/elements/Avatar'

export default {
    components: {
    Notification, Avatar
  },
  data() {
    return {
      activeName: "vacancy",
    };
  },
  name: "panel-tabs",
  methods: {
    handleSelect(key) {
      this.tabToShow = key;
    },
  },
}
</script>

<style  lang="scss">
.login_box{
  justify-content: space-between;
  align-items: center;
  width: 200px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: row;
}

.menu_box {
  display: flex;
  flex-direction: row;
  /*height: 32px;*/
  width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: auto; 
  
}
.menu{
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.06);
  background-color: #FFFFFF;
  justify-content: space-between;
  
}
.tabs {
  display: flex;
  flex-direction: row;
  position: static;
  height: 60px;
 
}

button {
  position: absolute;
}
.el-tabs {
  & ::v-deep &__item {
    font-size: 16px;
    font-weight: bold;
    color: $black-400;
    margin: -10px 0px 7px 0px;
    &.is-active {
      color: $blue-600;
    }
  }
  & ::v-deep &__nav-scroll {
    margin: 25px 0px 0px 25px;
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