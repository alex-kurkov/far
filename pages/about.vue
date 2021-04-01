<template>
  <section class="about">
    <p>{{ $t('text.aboutPageTitle') }}</p>

    <ul>
      <li>Кто такой Андрей Рыльков</li>
      <li>Миссия</li>
      <li>Команда</li>
      <li>Проекты и отчеты</li>
      <li>Годовые отчеты</li>
      <li>Учредительные документы</li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
}
</style>
