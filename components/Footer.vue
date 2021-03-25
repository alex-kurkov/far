<template>
  <section class='footer'>
    <div class='footer__social'>
      <Social/>
    </div>
    <p class='footer__license'>За исключением специально
      оговоренных случаев, содержание сайта залицензировано под
      Creative Commons Attribution 3.0 License
    </p>
    <p class='footer__disclaimer'>Материалы изданы и (или) распространены некоммерческой
      организацией, выполняющей, по мнению Минюста России, функции иностранного агента
    </p>
    <p class='footer__copyright'>ФАР 2021</p>
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

  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-template-areas: "license social disclamer"
                        "copyright copyright copyright";
}

@media screen and (max-width: 768px) {
  .footer{
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    grid-template-areas: "social"
                          "disclamer"
                          "license"
                        "copyright";
  }
}

.footer__license{
  color: white;
  background: #c088f3;
  grid-area: license;
}

.footer__disclaimer{
  color: white;
  background: #7896c6;
  grid-area: disclamer;
}

.footer__social{
  grid-area: social;
}

.footer__copyright{
  background: #c4d77b;
  grid-area: copyright;
  text-align: center;
}

</style>
