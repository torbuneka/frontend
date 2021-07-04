<template>
  <div class="box">
    <div class="top-box">
        <div class="top-box_info">
          <div class="flex-row">
            <a class="vacancy-name"> {{ vacancy }} </a>
            <button class="button-info"> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0025 8.53271C17.9467 8.92889 20.8645 12.8748 21.7225 17.7124C21.8953 18.6866 20.557 19.1888 19.8 18.5517C17.8605 16.9197 15.2249 15.7356 11.9997 15.5314C11.4485 15.4965 11 15.9477 11 16.5V18.1801C11 19.0573 9.95111 19.5094 9.31338 18.9071L2.79344 12.7494C2.3669 12.3465 2.37719 11.6647 2.8157 11.2749L9.33564 5.47943C9.98054 4.90619 11 5.364 11 6.22684V7.5C11 8.05228 11.4514 8.49599 12.0025 8.53271Z" fill="#E2E2E2"/>
              </svg>
            </button>
          </div>
            <button class="button-info" v-on:click="showSteps = !showSteps">
              <svg v-show="!showSteps"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" transform="matrix(1 0 0 -1 0 24)" fill="#ECECEC"/>
                <path d="M14 12L10 16V8L14 12Z" fill="#0C0C0C"/>
              </svg>


              <svg v-show="showSteps" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" transform="matrix(1 0 0 -1 0 24)" fill="#ECECEC"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.266 12L8 15.266L8.73398 16L12 12.734L15.266 16L16 15.266L12.734 12L16 8.73398L15.266 8L12 11.266L8.73398 8L8 8.73398L11.266 12Z" fill="#0C0C0C"/>
              </svg>


            </button>
        </div>
        <p class="text-about-blue">{{ company }}</p>
    </div>
    <div class="stage-box" v-show="showSteps">
      <VacancySteps stage="stage"/>
    </div>
    <div class="bottom-box" v-show="!showSteps">
      <div class="bottom-box_info">
        <p class="text-stage text-about-blue">{{ stage }}</p>
      </div>
    <div class="bottom-progress-bar" >
        <el-progress  :percentage="fot(stage)" :stroke-width="12" :class="comput_color(stage)"  :show-text="false" ></el-progress>
      </div>
        
        <div class="bottom-box_info">
          <div class="flex-row">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49988 8C8.49988 6.067 10.0669 4.5 11.9999 4.5C13.9329 4.5 15.4999 6.067 15.4999 8C15.4999 9.933 13.9329 11.5 11.9999 11.5C10.0669 11.5 8.49988 9.933 8.49988 8ZM11.9999 3.5C9.5146 3.5 7.49988 5.51472 7.49988 8C7.49988 9.6374 8.37441 11.0705 9.68187 11.8578C6.75069 12.782 4.48488 15.388 3.75331 18.4009C3.39629 19.8713 4.66163 21 5.99988 21H17.9999C19.3381 21 20.6035 19.8713 20.2465 18.4009C19.5149 15.388 17.2491 12.782 14.3179 11.8578C15.6254 11.0705 16.4999 9.6374 16.4999 8C16.4999 5.51472 14.4852 3.5 11.9999 3.5ZM4.72507 18.6369C5.55104 15.2352 8.52422 12.5 11.9999 12.5C15.4755 12.5 18.4487 15.2352 19.2747 18.6369C19.4389 19.3133 18.8708 20 17.9999 20H5.99988C5.12899 20 4.56084 19.3133 4.72507 18.6369Z" fill="#1767B1"/>
            </svg>

            <p class="text-about-blue">{{ nameP }}</p>
          </div>
            <p class="text-about-blue text-about-gray" >{{ time }}</p>
        </div>
         
    </div>
  </div>
</template>

<script>
import VacancySteps from "@/components/VacancySteps"
export default {
  components: {
    VacancySteps
  },
    methods: {
        fot(stage) {
            return stage == "Добавлен"? 12.5 : stage == "Телефонное интервью"? 25 : stage == "Назначено интервью с рекрутером"? 37.5 : stage == "Резюме у заказчика"? 50 : stage == "Тестовое задание"? 62.5 : stage == "Назначено интервью с внутренним заказчиком"? 75 : stage == "Проверка службы безопасности"? 87.5 : stage == "Принят на работу" || stage == "Отказ" ? 100 : 0      
        },
        comput_color (stage) {
           return stage == "Добавлен" ? 'orange' : stage == "Телефонное интервью" ? 'orange' : stage == "Назначено интервью с рекрутером"? 'orange' : stage == "Резюме у заказчика"? 'yellow' : stage == "Тестовое задание"? 'yellow' : stage == "Назначено интервью с внутренним заказчиком"? 'yellow' : stage == "Проверка службы безопасности"? 'green' : stage == "Принят на работу" ? 'green' : stage == "Отказ" ? 'red' : 'gray'      
        },

    },
  props: {
    vacancy: {
      type: String,
      default: "Аналитик",
    },
    company: {
      type: String,
      default: "BTБ УИП",
    },
    stage: {
      type: String,
      default: "Добавлен",
    },
    percentage: {
      type: Number,
      default: 50,
    },
    time: {
      type: String,
      default: "В работе 1 день",
    },
    nameP:  {
      type: String,
      default: "Иван Иванов",
    }
  },
  data() {
    return {
      showSteps: false
    }
  }
};
</script>

<style  lang="scss">
.margin-bot{
  margin-bottom: 20px;
}
.flex-row{
  display: flex;
  flex-direction: row;
  align-items: center;
  a{
    margin-right: 6px;
  }
  svg{
    margin-right: 4px;
  }
}
.vacancy-name{
  font-weight: bold;
  font-size: 16px;
  margin: 0 4px 0 0;
  line-height: 24px;
  align-items: bottom;
  padding:0;
  a{
    color: $black-900;
    text-decoration: none;
    line-height: 24px;
  }
}
.text-about-blue{
    font-weight: normal;
    font-size: 14px;
    color: $blue-600;
    margin: 0 0 0 0;
    line-height: 20px;
}
.text-about-gray {
    color: $black-400;
}
.bottom-box_info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.bottom-progress-bar{
  margin: 12px 0 14px 0;
}
    
.text-stage{
    font-weight: bold;
    margin: 0;
}
.top-box{
  height: 48px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .top-box_info{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.bottom-box{
    /*height: 80px;*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content:space-around;
}
.button-info{
  position: static;
  padding: 0;
  border: none;
  background: none;
  align-items: right;
}
.box{
    text-align: left;
    padding: 16px;
    background: $background-light;
    border: 1px solid $black-200;
    box-sizing: border-box;
    border-radius: 12px;
    width: 368px;
    /*height: 184px;*/
    margin: 8px 8px 0 8px;
    height: fit-content;
    
}
.el-progress-bar{
    background-color: $black-200;
    border-radius: 4px;
    width:336px;
    height:12px;
    position: static;
}
.el-progress-bar__inner{
    border-radius: 4px;
    height: 12px;
    position: relative;
}
.el-progress-bar__outer {
    border-radius: 4px;
    height: 12px;
    position: static;
}
.el-progress-line{
    background-color: $black-200;
    border-radius: 4px;
    width:336px;
    height:12px;
}
.el-progress.orange .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #FFC266 0%, #D77A24 129.17%);
}
.el-progress.yellow .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #EDFF5C 0%, #D5C004 129.17%);
}
.el-progress.green .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #67E453 0%, #1F8235 129.17%);
}
.el-progress.red .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #FF8686  0%, #EC2222 129.17%);
}
</style>