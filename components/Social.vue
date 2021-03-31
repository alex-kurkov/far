<template>
  <section class="social">
    <a href="https://www.facebook.com/rylkov.foundation/" target="_blank"
      ><Icon name="fb" class="social__logo"
    /></a>
    <a href="https://www.instagram.com/farfond/" target="_blank"
      ><Icon name="insta" class="social__logo"
    /></a>
    <a href="https://twitter.com/rylkovfond" target="_blank"
      ><Icon name="twitter" class="social__logo"
    /></a>
  </section>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Social',
  components: { Icon },
}
</script>

<style scoped>
.social {
  max-width: 120px;
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 30px 0;
}
.social__logo {
  width: 25px;
  height: auto;
  fill: #b23438;
}

@media screen and (min-width: 500px) and (max-width: 1023px) {
  .social {
    max-width: 325px;
    padding: 60px 0 80px 0;
  }
  .social__logo {
    width: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .social {
    max-width: 130px;
    padding: 30px 0 15px 0;
  }
  .social__logo {
    width: 25px;
  }
}
</style>
