<template>
  <el-menu
    ref="menu"
    :collapse="true"
    mode="horizontal"
    menu-trigger="click"
    :unique-opened="true"
    @close="closeCallback"
  >
    <!-- @open="arrowDown = 'is-reverse'"
    @select="arrowDown = ''" -->
    <el-submenu index="1" :disabled="btn.loading">
      <template slot="title">
        <button class="actions-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="4" r="2" fill="#0C0C0C" />
            <circle cx="12" cy="20" r="2" fill="#0C0C0C" />
            <circle cx="12" cy="12" r="2" fill="#0C0C0C" />
          </svg>
        </button>
      </template>
      <div class="el-menu-list">
        <div class="el-menu-item-group">
          <generate-link-button />
          <el-menu-item
            :index="2"
            :disabled="disabledBtns[item.id] || item.disabled"
          >
            Контакт +
          </el-menu-item>
        </div>
      </div>
    </el-submenu>
  </el-menu>
</template>
<script>

export default {
  props: {
    btn: {
      loading: Boolean,
      name: String,
      child: Array,
    },
    disabledBtns: Object,
    btnIcons: Object,
  },
  methods: {},
  
};
</script>
<style>
.actions-btn {
  background-color: transparent;
  border: transparent;
  position: static;
}
</style>
