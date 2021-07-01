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
    background: #FAF9F9;;
    color: #378BD8;
    font-size: 16px;
    padding: 0px 8px;
    border: 1px solid #ECECEC;
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
      color:  #378BD8;
      
    }
    .el-icon-close:hover{
      background: transparent;
      color:#378BD8;
    }
  }
  .el-tag:hover{
    background: #ECECEC;
  }
  .el-tag:disabled{
    background: #ECECEC;
    color: #9E9E9E;
    .el-icon-close:hover{
      background: transparent;
      color:#9E9E9E;
    }
  }
}
</style>