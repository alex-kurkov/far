<template>
  <section class="report-promo">
    <div class="report-promo__title-wrap"> 
      <HeavilyUnderlinedTitle 
      class="report-promo__title" 
      :title="'Финансовые и содержательные годовые отчеты'" 
      lineColor="#b33438"
      height='11'
      bottomOffcet="4"
      />
    </div>
      <div class="report-promo__logo"></div>
  </section>
</template>

<script>
export default {
  name: 'ReportPromo',
}
</script>

<style scoped>
.report-promo {
  height: 150px;
  width: 100%;
  background-color: greenyellow;
  display: flex;
  justify-content: space-between;
}
.report-promo__title-wrap {
  width: 50%;
}
.report-promo__title {
  min-height: 104px;
  color: #313131;
  font-family: Vollkorn, Arial, sans-serif;
  font-size: 25px;
  line-height: 23px;
  letter-spacing: normal;
  font-weight: 700;
  text-align: left;
  margin: 23px 0 23px 14px;
  padding: 0;
}

.report-promo__logo {
  width: 50%;
  min-height: 104px;
  background: black;
}
.repor {
  content: '';
  height: 11px;
  width: 100%;
  position: absolute;
  background-color: #b33438;
  top: 14px;
  left: 0;
}
</style>
