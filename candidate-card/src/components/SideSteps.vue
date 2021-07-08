<template>
  <div>
    <div class="top-step">
      <div class="top-step-flex">
        <div class="flex-row">
          <a class="vacancy-name"> {{ selectedVacancy.name }} </a>
        </div>
        <button class="button-info" v-on:click="closeSteps">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="12"
              transform="matrix(1 0 0 -1 0 24)"
              fill="#ECECEC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.266 12L8 15.266L8.73398 16L12 12.734L15.266 16L16 15.266L12.734 12L16 8.73398L15.266 8L12 11.266L8.73398 8L8 8.73398L11.266 12Z"
              fill="#0C0C0C"
            />
          </svg>
        </button>
      </div>
      <p class="text-about-blue">{{ selectedVacancy.company }}</p>
      <div class="step-progress-bar">
        <el-progress
          :percentage="fot(selectedVacancy.stage)"
          :stroke-width="12"
          :class="comput_color(selectedVacancy.stage)"
          :show-text="false"
        ></el-progress>
      </div>
    </div>
    <hr style="color: $black-200; margin-top: 0" />
    <div class="stage-box">
      <VacancySteps :stage="selectedVacancy.stage" />
    </div>
    <hr style="color: $black-200; margin-top: 4px" />
    <div class="footer-bar">
      <button class="add_vacancy">Открепить кандидата</button>
    </div>
  </div>
</template>

<script>
import VacancySteps from "@/components/VacancySteps";
export default {
  components: {
    VacancySteps,
  },
  methods: {
    fot(stage) {
      return stage == "Добавлен"
        ? 12.5
        : stage == "Телефонное интервью"
        ? 25
        : stage == "Назначено интервью с рекрутером"
        ? 37.5
        : stage == "Резюме у заказчика"
        ? 50
        : stage == "Тестовое задание"
        ? 62.5
        : stage == "Назначено интервью с внутренним заказчиком"
        ? 75
        : stage == "Оффер"
        ? 80
        : stage == "Проверка службы безопасности"
        ? 87.5
        : stage == "Принят на работу" || stage == "Отказ"
        ? 100
        : 0;
    },
    comput_color(stage) {
      return stage == "Добавлен"
        ? "orange"
        : stage == "Телефонное интервью"
        ? "orange"
        : stage == "Назначено интервью с рекрутером"
        ? "orange"
        : stage == "Резюме у заказчика"
        ? "yellow"
        : stage == "Тестовое задание"
        ? "yellow"
        : stage == "Назначено интервью с внутренним заказчиком"
        ? "yellow"
        : stage == "Оффер"
        ? "green"
        : stage == "Проверка службы безопасности"
        ? "green"
        : stage == "Принят на работу"
        ? "green"
        : stage == "Отказ"
        ? "red"
        : "gray";
    },
    closeSteps() {
      // this.showSteps = !this.showSteps;
      this.$emit("select-vacancy", null);
    },
  },
  props: {
    selectedVacancy: {
      type: Object,
      default() {
        return {
          name: String,
          company: String,
          stage: String,
          time: String,
          nameP: String,
          percentage: Number,
        };
      },
    },
    // showSteps: {
    //   type: Boolean,
    // },
  },
};
</script>

<style lang="scss">
.footer-bar {
  height: 88px;
  align-content: center;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  border-radius: 0px 0px 12px 12px;
  button {
    align-self: center;

    &:hover {
      background: $blue-900;
    }

    &:disabled {
      background: $black-300;
      color: $black-500;
    }
  }
  .add_vacancy {
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

.margin-bot {
  margin-bottom: 20px;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    margin-right: 6px;
  }

  svg {
    margin-right: 4px;
  }
}
.vacancy-name {
  font-weight: bold;
  font-size: 16px;
  margin: 0 4px 0 0;
  line-height: 24px;
  align-items: bottom;
  padding: 0;
  a {
    color: $black-900;
    text-decoration: none;
    line-height: 24px;
  }
}
.text-about-blue {
  font-weight: normal;
  font-size: 14px;
  color: $blue-600;
  margin: 0 0 0 0;
  line-height: 20px;
}
.text-about-gray {
  color: $black-400;
}

.step-progress-bar {
  margin: 12px 0 0 0;
}

.text-stage {
  font-weight: bold;
  margin: 0;
}
.top-step {
  padding: 13px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .top-step-flex {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    vertical-align: center;
  }
}

.button-info {
  position: static;
  padding: 0;
  border: none;
  background: none;
  align-items: right;
}
.box {
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
.el-progress-bar {
  background-color: $black-200;
  border-radius: 4px;
  width: 336px;
  height: 12px;
  position: static;
}
.el-progress-bar__inner {
  border-radius: 4px;
  height: 12px;
  position: relative;
}
.el-progress-bar__outer {
  border-radius: 4px;
  height: 12px;
  position: static;
}
.el-progress-line {
  background-color: $black-200;
  border-radius: 4px;
  width: 336px;
  height: 12px;
}
.el-progress.orange .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #ffc266 0%, #d77a24 129.17%);
}
.el-progress.yellow .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #edff5c 0%, #d5c004 129.17%);
}
.el-progress.green .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #67e453 0%, #1f8235 129.17%);
}
.el-progress.red .el-progress-bar__inner {
  background-color: unset;
  border-radius: 4px;
  background: linear-gradient(90deg, #ff8686 0%, #ec2222 129.17%);
}
</style>
