<template>
    <div class="steps">
        <Step stepName="Добавлен" done="true" />
        <Step stepName="Телефонное интервью" done="false"/>
        <Step stepName="Назначено интервью с рекрутером"/>
        <Step stepName="Резюме у заказчика"/>
        <Step stepName="Тестовое задание"/>
        <Step stepName="Назначено интервью с внутренним заказчиком"/>
        <Step stepName="Проведено интервью с внутренним заказчиком"/>
        <Step stepName="Резюме у внешнего заказчика"/>
        <Step stepName="Назначено интервью с внешним заказчиком"/>
        <Step stepName="Проведено интервью с внешним заказчиком"/>
        <Step stepName="Оффер"/>
        <Step stepName="Проверка службы безопасности"/>
        <Step stepName="Подготовка к выходу"/>
        <Step stepName="Принят"/>
        <Step stepName="Отказ"/>
    </div>
</template>

<script>
import Step from "@/components/elements/Step";

export default {
    components: {
        Step
    },
    props: ['stage'],
}
</script>

<style  lang="scss">

</style>
