<template>
<div>
    <div class="right-panel" >
        <div class="top">
            <Menu />
            <hr style="color: #ECECEC; margin-top: 0" >
        </div>
        
        <div class="info-vac">
            <div class="info-vac_box">
                <p class="info-big info-blue">Рассматривается на вакансии </p>
                
                <div class="area-middle__item">
                    <Icon iconName="Work" iconColor="#2d81ce" />
                    <p class="text blue">3</p>
                </div>
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
import Icon from "@/components/elements/Icon";

export default {
    name: 'SideBar',
    components: {Icon, Vacancy, Menu, }
}
</script>
<style  lang="scss">









</style>