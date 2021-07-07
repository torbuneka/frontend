<template>
  <div class="menu">
    <div class="menu_box">
      <img alt="t1" src="@/assets/talent.png" width="170" height="24" />
      <div class="tabs-box">
        <el-tabs v-model="activeName">
          <el-tab-pane label="Вакансии" name="vacancy"></el-tab-pane>
          <el-tab-pane label="Кандидаты" name="candidate"></el-tab-pane>
          <el-tab-pane label="Рассылки" name="mailings"></el-tab-pane>
        </el-tabs>
      </div>

      <div class="search">
        <form>
          <input type="text" placeholder="Поиск" />
          <button type="submit"><i class="fa fa-search">найти</i></button>
        </form>
      </div>
      <div class="login_box">
        <Notification />
        <div><p>Valentin Senin</p></div>
        <Avatar />
      </div>
    </div>
  </div>
</template>

<script >
import Notification from "@/components/elements/Notification";
import Avatar from "@/components/elements/Avatar";

export default {
  components: {
    Notification,
    Avatar,
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
};
</script>

<style  lang="scss" scored>
.login_box {
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
  width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.menu {
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.06);
  background-color: $white;
  justify-content: space-between;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.tabs-box {
  display: flex;
  flex-direction: row;
  position: static;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
}

button {
  position: absolute;
}
.el-tabs {
  &__item {
    font-size: 16px;
    font-weight: bold !important;
    color: $black-900;
    margin: -10px 0px 7px 0px;
    &.is-active {
      color: $blue-600 !important;
    }
  }
  &__nav-scroll {
    margin: 25px 0px 0px 25px;
  }
  &__active-bar {
    background-color: $blue-600 !important;
    height: 3px !important;
  }
  &__header {
    margin: 0px;
  }
  &__nav-wrap::after {
    height: 1px;
  }
  &__nav {
    margin-left: 25px;
  }
}
</style>