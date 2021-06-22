<template>
    <div class="menu">
      <div class="menu_box">
      
      <img alt="t1" src="@/assets/talent.png" width="170" height="24">
      <div class="propblems">
      <el-menu
      default-active="0"
      mode="horizontal"
      text-color="#C0C0C0"
      active-text-color="#2d81ce"
    >
      <el-menu-item index="0">Вакансии</el-menu-item>
      <el-menu-item index="1">Кандидаты</el-menu-item>
      <el-menu-item index="2">Рассылки</el-menu-item>
    </el-menu>
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
  }
}
</script>

<style>
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
  
  margin: auto; 
  
}
.menu{
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.06);
  background-color: #FFFFFF;
  justify-content: space-between;
}
.propblems {
  display: flex;
  flex-direction: row;
  /*justify-content: space-between;*/
  position: static;
}
.li{
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
}
button {
  position: absolute;
}
.el-tabs__header {
  margin-bottom: 0px !important;
}
.el-menu {
  /*margin-top: -20px;*/
  justify-content: space-around;
  display: flex;
  flex-direction: row;
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