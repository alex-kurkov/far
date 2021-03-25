<template>
  <section class='footer'>
    <Social/>
    <p class='license'>За исключением специально
      оговоренных случаев, содержание сайта залицензировано под
      Creative Commons Attribution 3.0 License
    </p>
    <p class='disclaimer'>Материалы изданы и (или) распространены некоммерческой
      организацией, выполняющей, по мнению Минюста России, функции иностранного агента
    </p>
    <p>Это компонент Footer</p>
  </section>
</template>

<script>
import Social from '~/components/Social'
export default {
  name: 'Footer',
  components: { Social }
}
</script>

<style scoped>
.footer{
  width: 100%;
  min-height: 100px;
  background: #c088f3;
}

.license{
  color: white;
}

.disclaimer{
  color: white;
}
</style>
