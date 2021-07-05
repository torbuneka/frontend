<template>
<div>
    <div class="right-panel" >
        <div class="top">
            <Menu />
            <hr style="color: $black-200; margin-top: 0" >
        </div>
        <SideVacancy v-if="showSteps == false" v-model="showSteps" />
        <SideSteps v-else v-model="showSteps"/>
  </div>
    
</div>
</template>
<script>
import SideVacancy from "@/components/SideVacancy";
import SideSteps from "@/components/SideSteps";
import Menu from "@/components/elements/Menu";


export default {
    name: 'SideBar',
    components: { SideVacancy, Menu, SideSteps},
    data() {
        return{
          showSteps: false
        }
    }
}
</script>
<style  lang="scss">
.right-panel::-webkit-scrollbar{
  width: 0;
}
.right-panel {
      width:384px;  
      background: $white;
      text-align: left;
      margin-left: 24px;
      position: fixed;
      height: 90vh;
      overflow-y: auto;
      border-radius: 0px 0px 12px 12px;
      .footer-bar{
        height: 88px;
        align-content: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
        border-radius: 0px 0px 12px 12px;
        button{
          align-self: center;
          &:hover{
              background: $blue-900;
          }
          &:disabled{
              background: $black-300;
              color: $black-500;
          }
        }
        .add_vacancy{
          background: $blue-600;
          border-radius: 12px;
          color: $white;
          font-weight: bold;
          font-size: 16px;
          width: 336px;
          height: 40px;
          border: none;
        }
      }
      
      .top{
        position:relative;
        height: 67px;
        display: flex;
        flex-direction: column;
        .Tabs{
          height: 67px;
          border-bottom: none;
          font-size: 18px !important;
        }
      };
      .info-vac{
        p{
          margin: 0;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50px;
        text-align: left;
        align-items: stretch;
        align-content: center;
        align-self: center;
        padding: 24px;
        position: relative;
        border-bottom: 1px solid $black-200;
        .info-big{
          font-weight: bold;
          font-size: 16px;
          
      }
      
      .info-blue{
        color: $blue-500;
      }
      .info-vac_box{
        display: flex;
        flex-direction: row;
        width: 293px;
        align-items: center;
        svg{
            margin-right: 4px;
        }
      }
      
    .time-gray{
        list-style: none;
    }
    }
    
  }

</style>