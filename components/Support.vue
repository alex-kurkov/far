<template>
  <section class="support">
    <div class="support__sideblock"></div>
    <div class="support__container">
      <p class="support__text">Поддержать ФАР</p>
      <p class="support__text">Это компонент Support</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Support',
}
</script>

<style scoped>
.support {
  width: 56%;
  min-height: 70px;
  background: darksalmon;
  display: flex;
}

.support__sideblock {
  display: none;
}

.support__container {
  width: 100%;
}

.support__text {
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 1280px) {
  .support .container:nth-child(7) {
    order: 6;
  }

  .support__sideblock {
    display: flex;
    flex-direction: column;
    width: 100px;
    background: #d5d5d5;
  }
}
</style>
