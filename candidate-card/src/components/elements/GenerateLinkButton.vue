<template>
  <el-submenu :index="btn.id" :disabled="btn.disabled">
    <template slot="title">{{ btn.name }}</template>
    <template v-if="!btn.disabled">
      <el-menu-item
        v-for="sub in btn.submenu"
        :key="sub.vacancy_id"
        @click="generateLink(sub)"
      >
        {{ sub.vacancy_data.name_id }}
      </el-menu-item>
      <input
        :id="`link_${urlParams.record}`"
        type="text"
        :value="generatedLink"
        readonly
        class="hidden-copy-input"
      />
    </template>
  </el-submenu>
</template>
<script>



export default {
  
  props: {
    btn: Object
  },
  data() {
    return {
      generatedLink: ''
    };
  },
  mounted() {
    // перенос в body, т.к. копирование в буфер не работает, если список кнопок скрыт
    document.body.append(
      document.getElementById(`link_${this.urlParams.record}`)
    );
  },
  
    
};
</script>
