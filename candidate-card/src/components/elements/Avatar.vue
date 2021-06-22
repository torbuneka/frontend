<template>
    <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="demo-basic--circle">
        <div class="block">
            <el-avatar :size="32" :src="url" :fit="fit">
                <img src="@/assets/login.png"/>
                </el-avatar></div>
        </div>
    </el-col>  
    
  </el-row>
</template>
<script>
    export default {
        data() {
            return {
                url: '"@/assets/login.png"'
            }
        }
}
</script>

<style>
.demo-avatar{
    padding: 0;
    margin: 0;
}
</style>