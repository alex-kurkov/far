<template>
  <section class="current-projects-promo">
    <h1 class="current-projects-promo__title">Текущие проекты</h1>
    <h2 class="current-projects-promo__subtitle">
      В данном разделе предоставлена информация о реализующихся в настоящее
      время проектах фонда
    </h2>
    <p class="current-projects-promo__text">Текст на белом фоне</p>
    <div class="current-projects-promo__image">
      Картинка с улыбками и магнитами
    </div>
  </section>
</template>

<script>
export default {
  name: 'CurrentProjectsPromo',
}
</script>

<style scoped>
.current-projects-promo {
  width: 100%;
  height: 200px;
  background-color: var(--true-grey);
}

.current-projects-promo__title {
  height: 40px;
  color: white;
}

.current-projects-promo__subtitle {
  height: 30px;
  color: var(--light-yellow);
}

.current-projects-promo__text {
  height: 30px;
  color: var(--light-yellow);
}

.current-projects-promo__image {
  height: 30px;
  color: var(--light-yellow);
}
</style>
