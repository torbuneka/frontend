<template>
    <div class="main-contact-box"> 
        <div class="top">
            <h3>Средства связи</h3>
            <p>Добавьте, или измените средства связи кандидата</p>
        </div>
        <div class="middle">
            <CandidateContactList/>
            <Input input="dfdfdf" inputSize="big"/>
        </div>
        <div class="bottom">
            <button>Добавить</button>
        </div>
    </div>
</template>

<script>
import Input from "@/components/elements/Input";
import CandidateContactList from "@/components/CandidateContactList";

export default {

  components: { Input, CandidateContactList},
  
}
</script>

<style lang="scss">
.main-contact-box{
    width: 399px;
    box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    border: 1px solid $black-200;
    padding: 24px;
    .top{
        margin: 0;
        h3{
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            color: $black_900;
            margin: 0;
        }
        p{
            color: $black_500;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            margin: 4px 0px;
        }
    }
}
</style>