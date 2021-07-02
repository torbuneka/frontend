<template>
<div class="tag-box">
    <el-tag v-for="tag in tags"
    :key="tag.name"
     closable
    >
    {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Стажёр SAP Рязань'},
          { name: 'Недозвон'}, 
         
        ]
      };
    }
  }
</script>
<style  lang="scss">
.tag-box{
  margin-top: 24px;
  .el-tag {
    background: $black-100;
    color: $blue-500;
    font-size: 16px;
    padding: 0px 8px;
    border: 1px solid $black-200;
    box-sizing: border-box;
    border-radius: 10px;
    height: 24px;
    align-items:center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-right: 12px;
    .el-tag__close{
      color:  $blue-500;
      
    }
    .el-icon-close:hover{
      background: transparent;
      color:$blue-500;
    }
  }
  .el-tag:hover{
    background: $black-200;
  }
  .el-tag:disabled{
    background: $black-200;
    color: $black-500;
    .el-icon-close:hover{
      background: transparent;
      color:$black-500;
    }
  }
}
</style>