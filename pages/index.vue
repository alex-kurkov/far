<template>
  <div class="container">
    <About/>
    <Promo/>
    <Intro/>
    <div class='container__info'>
      <Mission/>
      <Achievements/>
    </div>
    <div class='container__action'>
      <Help/>
      <Support/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
}

.container__info{
  display: flex;
  flex-direction: row;
}

.container__action{
  display: flex;
  flex-direction: row-reverse;
}

@media screen and (max-width: 768px) {
  .container__info,
  .container__action{
    display: unset;
  }
}


</style>
