<template>
    <div class="step-box">
        <p class="text-about-blue text-stage"> {{stepName}}</p>
        <el-radio v-model="done" value="true"> {{date_start_stage}} </el-radio>
    </div>
</template>

<script>

export default {
    props: {
        stepName: {
            type: String,
            default: "Новый этап",
        },
        done: {
            type: Boolean,
            default: true,
        },
        date_start_stage: {
            type: String,
            default: "Не назначено"  ,
        },
    },
    
}
</script>

<style>
.step-box{
    background-color: #EFF8FF;
    border: 1px solid #D6EBFF;
    box-sizing: border-box;
    border-radius: 10px;
    align-items: flex-start;
    padding: 16px;
    margin: 8px 0 8px 0;
}
</style>
