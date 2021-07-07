<template>
<el-cascader :options="options" :show-all-levels="false"></el-cascader>
</template>


<script>
  export default {
    data() {
      return {
        options: [{
          value: 'telephon',
          label: 'Телефон',
          
        }, {
          value: 'mail',
          label: 'E-mail',
          
        }, 
        {
          value: 'skype',
          label: 'Skype',
          
        },{
          value: 'socials',
          label: 'Социальные сети',
          children: [{
            value: 'telegram',
            label: 'Telegram',
          }, {
            value: 'form',
            label: 'Facebook',
          }, {
            value: 'habr',
            label: 'Хабр.Карьера',
          }, {
            value: 'freelance',
            label: 'Freelance',
          }, {
            value: 'linkedin',
            label: 'LinkedIn',
          }, {
            value: 'site',
            label: 'Сайт',
          }, {
            value: 'icq',
            label: 'ICQ',
          }, {
            value: 'livejournal',
            label: 'LiveJournal',
          }]
        }]
      };
    }
  };
</script>

<style lang="scss">

</style>