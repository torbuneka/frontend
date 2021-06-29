<template>
  <div class="box">
    <div class="top-box">
        <div class="bottom-box_info">
            <p class="vacancy-name">{{ vacancy }}</p>

            <button class="bottom-box_info" v-on:click="showSteps = !showSteps">
              <svg v-show="!showSteps" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70706 7.70709L1.70706 13.7071L0.292847 12.2929L5.58574 6.99999L0.292847 1.70709L1.70706 0.292878L7.70706 6.29288C8.09758 6.6834 8.09758 7.31657 7.70706 7.70709Z" fill="#0C0C0C"/>
              </svg>
              <svg v-show="showSteps" width="14" height="14" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.79293 4.50004L0.646484 1.35359L1.35359 0.646484L4.50004 3.79293L7.64648 0.646484L8.35359 1.35359L5.20714 4.50004L8.35359 7.64648L7.64648 8.35359L4.50004 5.20714L1.35359 8.35359L0.646484 7.64648L3.79293 4.50004Z" fill="#0C0C0C"/>
              </svg>

            </button>
        </div>
        <p class="text-about-blue">{{ company }}</p>
    </div>
    <div class="bottom-box" v-show="showSteps">
      <VacancySteps stage="stage"/>
    </div>
    <div class="bottom-box" v-show="!showSteps">
      <div class="bottom-box_info">
        <p class="text-stage text-about-blue">{{ stage }}</p>
      </div>
      <div class="margin-bot" >
        <el-progress  :percentage="fot(stage)" :stroke-width="12" :color="comput_color(stage)" :show-text="false" ></el-progress>
      </div>
        
        <div class="bottom-box_info">
          <div class="flex-row">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 5C5.5 3.067 7.06701 1.5 9 1.5C10.933 1.5 12.5 3.067 12.5 5C12.5 6.933 10.933 8.5 9 8.5C7.06701 8.5 5.5 6.933 5.5 5ZM9 0.5C6.51472 0.5 4.5 2.51472 4.5 5C4.5 6.6374 5.37453 8.07055 6.68199 8.85783C3.75081 9.78197 1.485 12.388 0.753431 15.4009C0.396414 16.8713 1.66175 18 3 18H15C16.3383 18 17.6036 16.8713 17.2466 15.4009C16.515 12.388 14.2492 9.78197 11.318 8.85783C12.6255 8.07055 13.5 6.6374 13.5 5C13.5 2.51472 11.4853 0.5 9 0.5ZM1.7252 15.6369C2.55116 12.2352 5.52434 9.5 9 9.5C12.4757 9.5 15.4488 12.2352 16.2748 15.6369C16.439 16.3133 15.8709 17 15 17H3C2.12911 17 1.56096 16.3133 1.7252 15.6369Z" fill="#1767B1"/>
</svg>

            <p class="text-about-blue">{{ nameP }}</p></div>
            
           
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
           return stage == "Добавлен"? '#FFD766' : stage == "Телефонное интервью"? '#FFD766' : stage == "Назначено интервью с рекрутером"? '#B7CC02' : stage == "Резюме у заказчика"? '#EDFF5C' : stage == "Тестовое задание"? '#68C103' : stage == "Назначено интервью с внутренним заказчиком"? '#67E453' : stage == "Проверка службы безопасности"? '#1F8235' : stage == "Принят на работу" ? '#1F8235' : stage == "Отказ" ? 'red' : 'gray'      
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
}
.vacancy-name{
    font-weight: bold;
    font-size: 16px;
    margin: 0;
}
.text-about-blue{
    font-weight: normal;
    font-size: 14px;
    color: #2D81CE;
    margin: 0 0 0 0;
}
.text-about-gray {
    color: #9E9E9E;
}
.bottom-box_info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: static;
    margin-bottom: 6px;
}
    
.text-stage{
    font-weight: bold;
    margin: 0;
}
.top-box{
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.bottom-box{
    /*height: 80px;*/
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 6px 0 6px 0;
    align-content:space-around;
}
.box{
    text-align: left;
    padding: 16px;
    background: #FCFCFC;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 12px;
    width: 368px;
    /*height: 184px;*/
    justify-content: space-between;
    margin-bottom: 8px;
    height: fit-content;
    
}
.el-progress-bar{
    background-color: #ECECEC;
    border-radius: 4px;
    Width:336px;
    Height:12px;
    position: static;
}
.el-progress-bar__inner{
    border-radius: 4px;
    Height: 12px;
    position: relative;
}
.el-progress-bar__outer {
    border-radius: 4px;
    height: 12px;
    position: static;
}
.el-progress-line{
    background-color: #ECECEC;
    border-radius: 4px;
    Width:336px;
    Height:12px;
}
</style>