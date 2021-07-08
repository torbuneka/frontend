<template>
  <el-select v-model="value" placeholder="Выберите">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "telephon",
          label: "Телефон",
        },
        {
          value: "mail",
          label: "E-mail",
        },
        {
          value: "skype",
          label: "Skype",
        },
        {
          value: "telegram",
          label: "Telegram",
        },
        {
          value: "form",
          label: "Facebook",
        },
        {
          value: "habr",
          label: "Хабр.Карьера",
        },

        {
          value: "linkedin",
          label: "LinkedIn",
        },
        {
          value: "site",
          label: "Сайт",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="scss">
.el-select {
  font-family: "Arial";
  width: 127px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 12px;
  margin-right: 12px;
  :hover{
    background: $black_100; 
  }
  :is-focus{
    border-color: black;
  }
  .el-input {
    border-radius: 12px;
  }
  .el-input__inner {
    border-radius: 12px;
    height: 40px;
    color: $black-900;
  }
}
.el-input.el-input--suffix {
  border-radius: 12px;
}
.el-input.el-input__inner {
  font-family: "Arial";
  border-radius: 12px;
}
.el-select-dropdown__list {
  font-family: "Arial";
  border-radius: 12px;
  .el-select-dropdown__item {
    color: $black-900;
    &.selected{
      color:  $black-900;
    }
  }
}
</style>
