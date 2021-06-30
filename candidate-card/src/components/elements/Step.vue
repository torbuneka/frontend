<template>
    <div class="step-box">
        <p class="text-about-blue text-stage"> {{stepName}}</p>
        <p v-show="done=true" class="done-stage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#2D81CE"/>
            <path d="M8 12.6L10.5714 15L17 9" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
         {{date_start_stage}} </p>
        <p v-show="done=false" class="done-stage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9.5" stroke="#E2E2E2"/>
            </svg>
         {{date_start_stage}} </p>
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

<style lang="scss">
.step-box{
    background-color: #EFF8FF;
    border: 1px solid #D6EBFF;
    box-sizing: border-box;
    border-radius: 10px;
    align-items: flex-start;
    padding: 16px;
    margin: 8px 0 8px 0;
    .done-stage{
        color: #C0C0C0;
        vertical-align: middle;
    }
}
</style>
