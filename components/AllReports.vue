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
import Report from '@/components/Report';
import image from '@/static/images/reports-image-1.png';
export default {
  name: 'AllReports',
  components: { Report },
  data() {
    return {
      reports: [
        {
          image: 'https://downloader.disk.yandex.ru/preview/f0f41079064658f86fb4b9dbdda83a08bbdf0240f2c52441fa61d903b7f8e1d2/60735518/OQ4Kx1VhbcwD9Qqk1aO10HhEkofeu2RrPiOT9gmNz1dueTSLJALsvkv4uqDV8j0IKl6dV__aiOpD4g4q3LOZkA%3D%3D?uid=0&filename=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%D1%8B%202.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x880',
          title: 'ОТЧЕТ О РАБОТЕ ПРОЕКТА "СНИЖЕНИЕ ВРЕДА - МОСКВА" В 2018 ГОДУ',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'red'
        },
        {
          image: 'https://downloader.disk.yandex.ru/preview/4a2627be935436079f9006bad9306d5e0cca5951d807e6a0c8ab1bd3b8997510/60735518/JMGlpQ9SpQeum0WeXoCUY3hEkofeu2RrPiOT9gmNz1dVUb5974stHzXhtIjhubrVQewsW8XRzQMJa95P6mGw7w%3D%3D?uid=0&filename=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%D1%8B%201.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x880',
          title: 'ОТЧЕТ О РАБОТЕ ПРОЕКТА "СНИЖЕНИЕ ВРЕДА - МОСКВА" В 2018 ГОДУ',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'white'
        },
        {
          image: 'https://downloader.disk.yandex.ru/preview/f0f41079064658f86fb4b9dbdda83a08bbdf0240f2c52441fa61d903b7f8e1d2/60735518/OQ4Kx1VhbcwD9Qqk1aO10HhEkofeu2RrPiOT9gmNz1dueTSLJALsvkv4uqDV8j0IKl6dV__aiOpD4g4q3LOZkA%3D%3D?uid=0&filename=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%D1%8B%202.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x880',
          title: 'ОТЧЕТ О РАБОТЕ ПРОЕКТА "СНИЖЕНИЕ ВРЕДА - МОСКВА" В 2018 ГОДУ',
          date: 'Январь, 16th, 2020',
          text: 'Проект реализовывался ФАР при поддержке AIDSFonds',
          theme: 'gray'
        },
      ]
    }
  }
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
