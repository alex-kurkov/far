<template>
  <section class="promo">
    <p class="promo__donation">1000<span class="promo__ruble">&#8381;</span></p>
    <p class="promo__donation">200</p>
    <p class="promo__donation">500</p>
    <nuxt-link to="#" class="promo__link">Поддержать &rsaquo;</nuxt-link>
    <nuxt-link to="#" class="promo__link">Получить помощь &rsaquo;</nuxt-link>
    <Icon name="eye" class="promo__eye"></Icon>
  </section>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Promo',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.promo {
  width: 100vw;
  min-height: 426px;
  color: white;
  background: linear-gradient(to bottom, #b23438 51px, #cbcbcb 51px);
  text-align: left;
  display: grid;
  align-items: flex-start;
  justify-items: flex-start;
  column-gap: 12px;
  padding-top: 18px;
  grid-template-rows: repeat(5, minmax(min-content, max-content)) ;
  grid-template-columns: repeat(2, minmax(min-content, max-content)) 1fr;
}

.promo__donation {
  font-family: 'Tomorrow Wind', sans-serif;
  font-size: 121px;
  line-height: 0.9;
  margin: 0;
  box-sizing: border-box;
}

.promo__ruble {
  color: #fff;
  font-family: 'Druk Cyr', sans-serif;
  font-weight: 500;
  font-size: 94px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  mix-blend-mode: multiply;
}

.promo__donation:first-child {
  grid-row: 1/4;
  grid-column: 1;
  color: #000;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 0 8px;
  margin-left: 15px;
}

.promo__donation:nth-child(2) {
  grid-row: 1;
  grid-column: 2;
  font-size: 80px;
  color: #727272;
}

.promo__donation:nth-child(3) {
  grid-row: 1/3;
  grid-column: 3;
  font-size: 102px;
}

.promo__link {
  font-family: 'Vollkorn';
  font-weight: 700;
  color: #b23438;
  text-decoration: none;
  border-bottom: 1px solid #b23438;
  transition: opacity 0.5s linear;
}

.promo__link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.promo__link:first-of-type {
  grid-row: 3;
  grid-column: 2/4;
}

.promo__link:last-of-type {
  grid-row: 5;
  grid-column: 1/4;
  text-align: center;
  justify-self: center;
  margin: 0 0 18px 0;
}

.promo__eye {
  margin: 20px 0;
  width: 100%;
  grid-row: 4;
  grid-column: 1/4;
}

@media screen and (min-width: 768px) {
  .promo {
    column-gap: 25px;
      background: linear-gradient(to bottom, #b23438 78px, #cbcbcb 78px);
  }

  .promo__donation {
    font-size: 212px;
  }

  .promo__donation:nth-child(2) {
    font-size: 123px;
  }

  .promo__donation:nth-child(3) {
    font-size: 157px;
  }

  .promo__ruble {
    font-size: 164px;
  }

  .promo__link {
    font-size: 35px;
  }

  .promo__link:first-of-type {
    grid-column: 3;
  }
}

@media screen and (min-width: 1280px) {
  .promo {
    padding: 0;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #b23438 96px, #cbcbcb 96px);
    grid-template-rows: repeat(4,0.25fr) 1fr;
    grid-template-columns:
      0.8fr minmax(min-content, max-content)
      minmax(min-content, max-content);
  }

  .promo__donation {
    font-size: 217px;
    line-height: 0.75;
  }

  .promo__donation:first-child {
    grid-column: 2;
    grid-row: 2/4;
    margin: 0;
  }

  .promo__donation:nth-child(2) {
    font-size: 123px;
    grid-column: 3;
    grid-row: 2;
  }

  .promo__donation:nth-child(3) {
    font-size: 145px;
    grid-column: 3;
    grid-row: 3;
  }

  .promo__ruble {
    font-size: 164px;
  }

  .promo__link {
    font-size: 22px;
  }

  .promo__link:first-of-type {
    grid-column: 2;
    grid-row: 4;
    align-self: flex-end;
  }

  .promo__link:last-of-type {
    grid-column: 2;
    grid-row: 5;
    align-self: flex-start;
    justify-self: flex-start;
    margin: 30px 0 0 0;
  }
  .promo__eye {
    grid-row: 1/6;
    grid-column: 1;
    min-width: 833px;
    margin: 0;
  }
}
</style>
