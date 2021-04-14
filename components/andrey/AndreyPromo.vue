<template>
  <section class="promo">
<!--    width="286px" height="367px" 1.28-->
    <img :src='img1' class='promo__whois' alt='#'>
<!--    <div class='promo__andrey'/>-->
  </section>
</template>

<script>

export default {
  name: 'AndreyPromo',
  components: {
  },
  data() {
    return {
      img1: require('~/components/andrey/Bitmap.svg'),
    }
  },
}
</script>

<style scoped>
.promo {
  width: 100%;
}

.promo__whois {
  width: 100%;
  height: auto;
  //height: 734px;
  background-color: #b23438;
}

.promo__andrey {
  width: 500px;
  height: 400px;
  background-color: #b23438;
  background-image: url("andrey.png");
}

.promo__whois_add {
  width: 500px;
  height: 400px;
  background-color: #b23438;
}

</style>
