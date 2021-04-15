<template>
  <section class="all-reports">
    <div class="all-reports__content">
      <Report
        v-for="(content, index) in reports"
        :key="index"
        :content="content"
      />
    </div>
  </section>
</template>

<script>
import Report from '@/components/Report'
export default {
  name: 'AllReports',
  components: { Report },
  data() {
    return {
      reports: [
        {
          image: '/images/reports-image-2.png',
          title: 'ОТЧЕТ О РАБОТЕ ПРОЕКТА "СНИЖЕНИЕ ВРЕДА - МОСКВА" В 2018 ГОДУ',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'red',
        },
        {
          image: '/images/reports-image-1.png',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'white',
        },
        {
          title: 'ОТЧЕТ О РАБОТЕ ПРОЕКТА "СНИЖЕНИЕ ВРЕДА - МОСКВА" В 2018 ГОДУ',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'gray',
        },
      ],
    }
  },
}
</script>

<style scoped>
.all-reports {
  background: linear-gradient(to right, #c8c8c8 50%, #000 0);
}
.all-reports__content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
