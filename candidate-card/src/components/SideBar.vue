<template>
<div>
    <div class="right-panel" >
        <header class="top">
            <Menu />
        </header>
        <hr style="color: #ECECEC; " >
        <div class="info-vac">
            <div class="info-vac_box">
                <p class="info-big info-blue">Рассматривается на вакансии </p>
                
                <div class="area-middle__item">
                    <Icon iconName="Work" iconColor="#2d81ce" />
                    <p class="text blue">3</p>
                </div>
            </div>
            <p style="color: #C0C0C0; margin-top: 0">В работе с 24.05.2021</p>
        </div>
        <hr style="color: #ECECEC" >
        <Vacancy vacancy="Бизнес аналитик" stage="Назначено интервью с внутренним заказчиком"   time="В работе 4 дня" nameP="Елена Васина"/>
        <Vacancy vacancy="Аналитик" stage="Добавлен"   time="В работе 5 дней" nameP="Артем Паловинчев"/>
        <Vacancy vacancy="Системный аналитик" stage="Проверка службы безопасности"  time="В работе 12 дней" nameP="Семён Инванов"/>
        

        <button class="add_vacancy">Прикрепить к вакансии</button>
    </div>
    </div>
</template>
<script>
import Vacancy from "@/components/elements/Vacancy";
import Menu from "@/components/elements/Menu";
import Icon from "@/components/elements/Icon";

export default {
    name: 'SideBar',
    components: {Icon, Vacancy, Menu, }
}
</script>
<style  lang="scss">

.info-vac{
    width: 384px;
    height: 98px;
    text-align: center;
    
}
.add_vacancy{
    background: #2D81CE;
    border-radius: 12px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    width: 336px;
    height: 40px;
    position: relative;
    border-color: none;
}
.time-gray{
    list-style: none;
}
.info-big{
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    padding: 0;
}
.info-blue{
    color: #378BD8;
}
.info-vac_box{
    display: flex;
    flex-direction: row;
    padding: 3%;
    justify-content: space-around;
    align-items: center;
}
.right-panel {
    width:384px;  
    background: #FFFFFF;
   text-align: left;
   
   margin-left: 24px;
    
    /*position:fixed;*/
    align-self: right;
}
.top{
    display: flex;
    flex-direction: row;
    position: static;
    height: 67px;
    margin-left: 24px;
}
.template{
    text-align: left;
}


</style>