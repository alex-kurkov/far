<template>
  <section class="achievement">
    <h3 class="achievement__title">Итоги нашей работы в 2020</h3>
    <Achievements />
    <p>Получить помощь</p>
    <i>ФАР ЛОГО</i>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.achievement {
  max-width: calc(100vw / 2);
  min-height: 506px;
  background: #ccc;
}
.achievement__title {
  font-family: 'Vollkorn', serif;
  font-weight: bold;
  color: #000;
  font-size: 40px;
  line-height: 28px;
}

</style>
