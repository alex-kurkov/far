<template>
  <div class="report">
    <div class="report__image">Картинка</div>
    <div class="report__message">
      <h2 class="report__message-title">Заголовок текста</h2>
      <p class="report__message-date">Дата текста</p>
      <p class="report__message-text">Текст текста</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Report',
}
</script>

<style scoped>
.report {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 2px solid lightgoldenrodyellow;
}

.report__image {
  width: 50%;
  height: 100px;
  background-color: blue;
  color: white;
}

.report__message {
  width: 50%;
  height: 100px;
  background-color: #90c5e5;
}
</style>
