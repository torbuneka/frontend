<template>
    <div  v-bind:class="{
      stepBox: done == 'true' ,
      uncheckedBox: done == 'false' }" >
        <p class="text-about-blue text-stage"> {{stepName}}</p>
        <div v-show="done='true'" class="done-stage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#2D81CE"/>
            <path d="M8 12.6L10.5714 15L17 9" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p> {{date_start_stage}} </p> 
        </div>
        <div v-show="done!='true'" class="done-stage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9.5" stroke="#E2E2E2"/>
            </svg>
            <p> {{date_start_stage}} </p> 
        </div>
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
            type: String,
            default: "true",
        },
        date_start_stage: {
            type: String,
            default: "Не назначено"  ,
        },
    },
    
}
</script>

<style lang="scss">
.stepBox{
    background-color: $white;
    border: 1px solid $black-200;
    box-sizing: border-box;
    border-radius: 10px;
    align-items: flex-start;
    padding: 12px 16px;
    margin: 8px 0 8px 0;
    .done-stage{
        color: $black-400;
        vertical-align: middle;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 24px;
        p{
            margin: 0 0 0 8px;
            font-weight: normal;
            font-size: 14px;
        }
    }
    .text-stage{
        color: $black-700;
        line-height: 20px;
        margin-bottom: 12px;
    }
}
.uncheckedBox{
    background-color: $background-light;
    border: 1px solid $black-200;
    box-sizing: border-box;
    border-radius: 10px;
    align-items: flex-start;
    padding: 12px 16px;
    margin: 8px 0 8px 0;
    .done-stage{
        color: $black-400;
        vertical-align: middle;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 24px;
        p{
            margin: 0 0 0 8px;
            font-weight: normal;
            font-size: 14px;
        }
    }
    .text-stage{
        color: $black-500;
        line-height: 20px;
        margin-bottom: 12px;
    }
}
</style>
