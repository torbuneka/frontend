<template>
<div>
    <div class="right-panel" >
        <div class="top">
            <Menu />
            <hr style="color: #ECECEC; margin-top: 0" >
        </div>
        
        <div class="info-vac">
            <div class="info-vac_box">

                
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12H10ZM8 15C8 15.5523 8.44772 16 9 16C9.55228 16 10 15.5523 10 15H8ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12H16ZM14 15C14 15.5523 14.4477 16 15 16C15.5523 16 16 15.5523 16 15H14ZM6.66042 13.3727L7.01155 12.4363L6.66042 13.3727ZM17.3396 13.3727L16.9885 12.4363L17.3396 13.3727ZM8 7V5H6V7H8ZM9 4H15V2H9V4ZM16 5V7H18V5H16ZM20 9V10.932H22V9H20ZM4 10.932V9H2V10.932H4ZM5 8H7V6H5V8ZM17 8H19V6H17V8ZM7 8H17V6H7V8ZM7.01155 12.4363L4.35112 11.4387L3.64888 13.3113L6.3093 14.309L7.01155 12.4363ZM3 12.375V19H5V12.375H3ZM6 22H18V20H6V22ZM19.6489 11.4387L16.9885 12.4363L17.6907 14.309L20.3511 13.3113L19.6489 11.4387ZM21 19V12.375H19V19H21ZM9 12.5H7.36267V14.5H9V12.5ZM10 13.5V12H8V13.5H10ZM8 13.5V15H10V13.5H8ZM16.6373 12.5H15V14.5H16.6373V12.5ZM15 12.5H9V14.5H15V12.5ZM16 13.5V12H14V13.5H16ZM14 13.5V15H16V13.5H14ZM3 19C3 20.6569 4.34315 22 6 22V20C5.44772 20 5 19.5523 5 19H3ZM4 9C4 8.44772 4.44772 8 5 8V6C3.34315 6 2 7.34315 2 9H4ZM2 10.932C2 11.9913 2.65707 12.9394 3.64888 13.3113L4.35112 11.4387C4.13992 11.3595 4 11.1576 4 10.932H2ZM6.3093 14.309C6.64613 14.4353 7.00293 14.5 7.36267 14.5V12.5C7.24276 12.5 7.12382 12.4784 7.01155 12.4363L6.3093 14.309ZM20 10.932C20 11.1576 19.8601 11.3595 19.6489 11.4387L20.3511 13.3113C21.3429 12.9394 22 11.9913 22 10.932H20ZM22 9C22 7.34315 20.6569 6 19 6V8C19.5523 8 20 8.44772 20 9H22ZM15 4C15.5523 4 16 4.44772 16 5H18C18 3.34315 16.6569 2 15 2V4ZM16.9885 12.4363C16.8762 12.4784 16.7572 12.5 16.6373 12.5V14.5C16.9971 14.5 17.3539 14.4353 17.6907 14.309L16.9885 12.4363ZM18 22C19.6569 22 21 20.6569 21 19H19C19 19.5523 18.5523 20 18 20V22ZM8 5C8 4.44772 8.44772 4 9 4V2C7.34315 2 6 3.34315 6 5H8Z" fill="#378BD8"/>
                    </svg>

                    <p class="info-big text info-blue">3 вакансии на рассмотрении</p>
    
            </div>
            <p style="color: #C0C0C0; ">В работе с 24.05.2021</p>
            
        </div>
        
        <Vacancy vacancy="Бизнес аналитик" stage="Назначено интервью с внутренним заказчиком"   time="В работе 4 дня" nameP="Елена Васина"/>
        <Vacancy vacancy="Аналитик" stage="Добавлен"   time="В работе 5 дней" nameP="Артем Паловинчев"/>
        <Vacancy vacancy="Системный аналитик" stage="Проверка службы безопасности"  time="В работе 12 дней" nameP="Семён Инванов"/>  
        <div class="footer-bar">
            <button class="add_vacancy">Прикрепить к вакансии</button>
        </div>
    </div>
    
</div>
</template>
<script>
import Vacancy from "@/components/elements/Vacancy";
import Menu from "@/components/elements/Menu";


export default {
    name: 'SideBar',
    components: { Vacancy, Menu, }
}
</script>
<style  lang="scss">
.right-panel {
      width:384px;  
      background: #FFFFFF;
      text-align: left;
      margin-left: 24px;
      /*position:fixed;*/
      .footer-bar{
        height: 88px;
        align-content: center;
        display: flex;
        justify-content: center;
        vertical-align: middle;
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
          background: #2D81CE;
          border-radius: 12px;
          color: #FFFFFF;
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