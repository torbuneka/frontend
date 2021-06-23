<template>
    <div class="main-vacancy-page"  style="overflow-y: auto;  ">
        <div class="top-frame">
            <div class="vac-name">
                <img src="@/assets/people.png" alt="photo" width="96" height="96">
                <p class="name">Щербаков
Андрей Сергеевич</p>
            </div>
            <div class="vac-property">
                <div class="area-middle__item">
                    <Icon iconName="Location" iconColor="#2d81ce" />
                    <p class="text blue">Рязань</p>
                </div>
                <div class="area-middle__item">
                    <Icon iconName="Diamond" iconColor="#2d81ce" />
                    <p class="text blue">30 лет</p>
                </div>
                <div class="area-middle__item">
                    <Icon iconName="Work" iconColor="#2d81ce" />
                    <p class="text blue">Аналитик</p>
                </div>
                
            </div>
            <div class="candidate-menu" >
                <div class="candidate-menu_contacts">
                    <Button1 buttonSize="big" buttonColor="blue"  buttonText="Отправить E-mail" hasLeftIcon iconName="Mail"/>
                    <Button1 buttonSize="big" buttonColor="blue"  buttonText="Тэг" hasLeftIcon iconName="Tag"/>
                    <Button1 buttonSize="big" buttonColor="blue"  buttonText="Изменить" hasLeftIcon iconName="Pencil"/>
                    <Button1 buttonSize="big" buttonColor="blue" buttonText="Поделиться" hasLeftIcon iconName="Share"/>
                </div>
                <div class="candidate-menu_points">
                    <Button1 buttonSize="big" buttonColor="blue" buttonText="" hasLeftIcon iconName="VerticalEllepsis"/>
                </div>
            </div>
        </div>
        <div class="contact-frame">
            <div class="contact-frame_socials">
                <p>Мобильный</p>
                <p class="links"><a title="WhatsApp" href="whatsapp://send?phone=+79281234567">+7 (928) 123-45-67 
                
                </a>
                    <Icon iconName="Whatsapp"/>
                </p>
                
            </div>
            <div class="contact-frame_socials">
                <p>E-mail</p>
                <p class="links"><a href="sherbakov-as5@yandex.ru">sherbakov-as5@yandex.ru</a></p>
            </div>
            <div class="contact-frame_socials">
                <p>Telegram</p>
                <p class="links"><a title="Telegram" href="https://telegram.me/sherbakov" target="_blank">@sherbakov</a></p>
            </div>
            <div class="contact-frame_socials">
                <p>Соц.сети</p>
                <p class="links">
                    <a title="Facebook">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.5 8C8.5 5.5 9.5 4.0001 13 4V6C11 6 11 7 11 8H13.5L13 10H11V16H8.5V10H7V8H8.5Z" fill="#0A569B"/>
                        </svg>
                    </a>
                </p>
                <p class="links">
                    <a title="Linkedin">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM4.79938 7.82617V15.0859H6.72028V7.82617H4.79938ZM6.70062 5.91406C6.70062 6.46635 6.25291 6.91406 5.70062 6.91406C5.14834 6.91406 4.70062 6.46635 4.70062 5.91406C4.70062 5.36178 5.14834 4.91406 5.70062 4.91406C6.25291 4.91406 6.70062 5.36178 6.70062 5.91406ZM13.3785 15.0859H15.2994V10.5742C15.2994 10.0137 15.2629 9.58301 15.19 9.28223C15.1216 8.98145 14.9963 8.71257 14.814 8.47559C14.6363 8.23861 14.372 8.04492 14.0211 7.89453C13.6701 7.73958 13.2828 7.66211 12.8589 7.66211C11.8974 7.66211 11.0998 8.07227 10.4664 8.89258V7.82617H8.68219V15.0859H10.6031V11.7979C10.6031 10.9867 10.6509 10.4307 10.7466 10.1299C10.8469 9.8291 11.0292 9.58757 11.2935 9.40527C11.5578 9.22298 11.8563 9.13184 12.189 9.13184C12.4488 9.13184 12.6698 9.19564 12.8521 9.32324C13.039 9.45085 13.1734 9.63086 13.2554 9.86328C13.3375 10.0911 13.3785 10.597 13.3785 11.3809V15.0859Z" fill="#2D81CE"/>
                        </svg>
                    </a>
                </p>
                
            </div>

        </div>
        
        <div class="tab-bar">
           <el-menu
      default-active="0"
      mode="horizontal"
      text-color="#C0C0C0"
      active-text-color="#2d81ce"
    >
      <el-menu-item index="0">Резюме</el-menu-item>
      <el-menu-item index="1">Чек-лист</el-menu-item>
      <el-menu-item index="2">Коммуникации</el-menu-item>
      <el-menu-item index="3">Документы</el-menu-item>
      <el-menu-item index="4">История</el-menu-item>
    </el-menu>
        </div>
        <div class="candidate-info">
            <div class="candidate-info_update">Обновлено 23.05.2021</div>
            <div class="vacancy-info">
                <div class="vacancy-price">
                <h3 class="candidate-big">Аналитик</h3>
                <h3 class="candidate-big">50 000 ₽</h3>
                </div>
                <div class="about-vacancy">
                    <p>Информационные технологии, интернет, телеком</p>
                    <p style="padding-left: 40px">Поддержка, Helpdesk</p>
                    <p style="padding-left: 40px">Администратор баз данных</p>
                    <p style="padding-left: 40px">Тестирование</p>
                </div>
                <div class="vacancy-link">
                    <hr style="color: #E2E2E2; margin-top: 33px; margin-bottom: 24px" >
                    Ссылка на источник резюме
                    <a style="color: #57A2E8" href="">headhunter <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.84319 14.1569C1.47635 12.79 1.47635 10.5739 2.84319 9.20711L4.61096 7.43934L3.90385 6.73223L2.13608 8.5C0.378723 10.2574 0.378723 13.1066 2.13608 14.864C3.89344 16.6213 6.74268 16.6213 8.50004 14.864L10.2678 13.0962L9.5607 12.3891L7.79294 14.1569C6.4261 15.5237 4.21002 15.5237 2.84319 14.1569ZM7.43938 4.61091L9.20715 2.84315C10.574 1.47631 12.7901 1.47631 14.1569 2.84315C15.5237 4.20998 15.5237 6.42606 14.1569 7.79289L12.3891 9.56066L13.0962 10.2678L14.864 8.5C16.6214 6.74264 16.6214 3.8934 14.864 2.13604C13.1066 0.378679 10.2574 0.37868 8.50004 2.13604L6.73228 3.90381L7.43938 4.61091ZM6.02517 11.682L11.682 6.02513L10.9749 5.31802L5.31806 10.9749L6.02517 11.682Z" fill="#57A2E8"/>
                        </svg>
                    </a>
                    <hr  style="color: #E2E2E2; margin-top: 24px; margin-bottom: 40px" >
                </div>
                <div class="candidate-experience">
                    <h3 class="candidate-big-gray candidate-big">Опыт работы 2 года 4 месяца</h3>
                    <div class="candidate-work">
                        <div class="candidate-work-time">
                            <p>Февраль 2019 — по настоящее время</p>
                            <p>2 года 4 месяца</p>
                        </div>
                        <div class="candidate-work-place">
                            <p class="text_bond">Спарго Технологии, ЗАО</p>
                            <p>Рязань</p>
                            <p>Информационные технологии, системная интеграция, интернет</p>
                            <p>Системная интеграция, автоматизации технологических и бизнес-процессов предприятия, ИТ-консалтинг</p>
                            <p class="text_bond">Системный аналитик</p>
                            <p>— анализ и тестирование ПО, постановка задач на доработку ПО 
                                <br> — консультации и обучение персонала аптек работе с ПО 
                                <br>— консультации аптечных учреждений о методиках использования ПО 
                                <br>— решение проблематики и устранение ошибок у клиентов</p>
                        </div>
                    </div>
                </div>
                <div class="candidate-skill">
                    <h3 class="candidate-big-gray candidate-big">Ключевые навыки</h3>
                    <div class="candidate-skills">
                        <div class="skill-box">
                            <p class="skills">Настройка ПК</p>
                            <p class="skills">Офисная техника</p>
                            <p class="skills">Техническое обслуживание</p>
                            <p class="skills">Деловая переписка</p>
                        </div>
                        <div class="skill-box">
                            <p class="skills">Работа в команде</p>
                            <p class="skills">Телефонные переговоры</p>
                            <p class="skills">Деловое общение</p>
                            <p class="skills">Обучаемость</p>
                        </div>
                        <div class="skill-box">
                            <p class="skills">Тестирование пользовательского интерфейса</p>
                            <p class="skills">MS SQL</p>
                        </div>
                        
                    </div>
                </div>
                <div class="candidate-about">
                    <h3 class="candidate-big-gray candidate-big">Обо мне</h3>
                    <p style="width: 712px; text-align: left">У меня есть желание развиваться в тестировании с уклоном к автоматизации. Владею SQL на уровне простых запросов. Имею навыки общения с клиентами. Могу доступно объяснить, как работать с тем или иным ПО клиенту, не обладающим навыками в IT - сфере. Умею работать в команде.</p>
                </div>
                <div class="candidate-educ">
                    <h3 class="candidate-big-gray candidate-big">Средне-специальное образование</h3>
                    <div class="candidate-educ_box">
                        <p style="width: 164px">2012</p>
                        <p>Московский университет им. С.Ю. Витте, Москва Право социального обеспечения, Юриспруденция</p>
                    </div>
                </div>
                <div class="candidate-languege candidate">
                   <h3 class="candidate-big-gray candidate-big">Средне-специальное образование</h3>
                   <p>Русский — Родной</p> 
                   <p>Английский — Начальный</p> 
                   <p>Французский — Начальный</p> 
                </div>
            </div>
        </div>
        

    </div>
 
</template>

<script>

import Button1 from "@/components/elements/Button1";
import Icon from "@/components/elements/Icon";

export default {
  name: 'VacancyPage',
  components: { Button1, Icon}
}
</script>

<style>
.candidate{
    text-align: left;
}
.candidate-educ_box{
    display: flex;
    flex-direction: row;
    text-align: left;
}
.candidate-educ{
    width: 518px;
}
.skill-box{
    margin: 8px 0 8px 0;
    
}
.candidate-skills{
    width: 760px;
    text-align: left;
}
.skills{
    color: #797979;
    background: #FAF9F9;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 10px;
    flex-grow: 0;
    display: inline;
    margin: 0px 4px;
    padding: 0px 8px;
    font-size: 16px;
}
.text_bond{
    font-weight: bold;
    font-size: 16px;
}
.candidate-work-time{
    width: 139px;
}
.candidate-work-place{
    width: 548px;
    margin-left: 25px;
}
.candidate-work{
    display: flex;
    flex-direction: row;
    text-align: left;
    
}
.candidate-big-gray{
    color: #C0C0C0;
    text-align: left;
}
.candidate-big{
    font-weight: bold;
    font-size: 24px;
}

.hr {
    color: #E2E2E2;
}
.about-vacancy{
    text-align: left;
}

.vacancy-price{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.contact-frame_socials {
    background-color: #FAF9F9;
    height: 40px;
    margin: 2px 0 2px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 40%;
}
.candidate-info_update{
    text-align: left;
    color: #C0C0C0;
    margin-top: 25px;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
::-webkit-scrollbar{width: 2px;}
.main-vacancy-page{
    margin: 40px;
    flex-direction: row;
    background-color: #FFFFFF;
    
}
.top-frame {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
}
.vacancy {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    position: static;
    /*width: 711px;*/
    flex-grow: 0;
    color: black;
    flex: none;
    order: 2;
    text-align: left;
    margin-bottom: 24px;
}
.select-vac {
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 10px;
    width: 126px;
    height: 32px;
    margin: 0px 10px;
    /*padding-left: 16px;
    margin-right: 14px;*/
    text-align: center;
}
.Tags{
    width: 164px;
    height: 32px;
    background: #FAF9F9;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    font-size: 16px;
    color: #9E9E9E;
}
.name {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    width: 588px;
}
.vac-name {
    display: flex;
    flex-direction: row;
}

.top-frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}

.vac-property{
   display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 319px;
    margin: 12px 0 12px  0;
}

.candidate-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px 0 12px  0;
    
}
.candidate-menu_contacts {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    width: 80%;
    margin: 12px 0 12px  0;
}
.tab-bar{
    align-items: flex-start;
}
.candidate-menu_points{
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: end;
    align-items: center;
}
.area-middle__item {
  display: flex;
  flex-direction: row;
  margin-right: 35px;
  align-items: center;
}

.text {
  margin: 0px;
  align-self: center;
  font-size: 16px;
  margin: 2px 5px 0px 5px;
  white-space: nowrap;
}
.blue {
  color: #2d81ce;
}

</style>