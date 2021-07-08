<template>
  <div class="main-contact-box">
    <div class="top-contact">
      <h3>Средства связи</h3>
      <p>Добавьте, или измените средства связи кандидата</p>
    </div>
    <div class="middle flex-row">
      <CandidateContactList />
      <Input input="dfdfdf" inputSize="big" />
      <Icon iconName="delete" iconColor="#C0C0C0" />
    </div>
    <div class="middle flex-row">
      <CandidateContactList />
      <Input input="dfdfdf" inputSize="big" />
      <Icon iconName="delete" iconColor="#C0C0C0" />
    </div>
    <div class="middle flex-row">
      <CandidateContactList />
      <Input input="dfdfdf" inputSize="big" />
      <Icon iconName="delete" iconColor="#C0C0C0" />
    </div>
    <div class="middle flex-row">
      <CandidateContactList />
      <Input input="dfdfdf" inputSize="big" />
      <Icon iconName="delete" iconColor="#C0C0C0" />
    </div>
    <div class="middle flex-row">
      <CandidateContactList />
      <Input input="" inputSize="big" />
      <Icon iconName="delete" iconColor="#C0C0C0" />
    </div>
    <div class="bottom">
      <button class="add-info">Добавить</button>
    </div>
  </div>
</template>

<script>
import Input from "@/components/elements/Input";
import Icon from "@/components/elements/Icon";
import CandidateContactList from "@/components/CandidateContactList";

export default {
  components: { Input, CandidateContactList, Icon },
};
</script>

<style lang="scss">
.main-contact-box {
  width: 399px;
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  border: 1px solid $black-200;
  padding: 24px;
  font-family: 'Arial';
  .middle {
    margin: 12px 0;
    .Input{
      margin-right: 12px;
    }
  }
  .top-contact {
    margin: 0 0 24px 0;
    h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      color: $black_900;
      margin: 0;
    }
    p {
      color: $black_500;
      font-weight: normal;
      font-size: 15px;
      line-height: 24px;
      margin: 4px 0 0 0;
      padding: 0;
    }
  }
  .bottom {
    margin: 24px 0 0 0;
    button {
      align-self: center;
      position: relative;
      &:hover {
        background: $blue-900;
      }
      &:disabled {
        background: $black-300;
        color: $black-500;
      }
    }
    .add-info {
      background: $blue-600;
      border-radius: 12px;
      color: $white;
      font-weight: bold;
      font-size: 16px;
      width: 428px;
      height: 40px;
      border: none;
    }
  }
}
</style>