<template>
  <section class="report-promo">
    <div class="report-promo__content">
      <div class="report-promo__title-wrap">
        <HeavilyUnderlinedTitle
          class="report-promo__title"
          :title="$t('pages.reports.mainTitleLocale')"
          lineColor="var(--main-red)"
          height="11"
        />
      </div>
      <p
        class="report-promo__text"
        v-html="$t('pages.reports.subTitlesLocale[0]')"
      />
      <div class="report-promo__graphics">
        <Bolt
          class="report-promo__svg"
          mainColor="var(--simple-black)"
          boltColor="#fff"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Bolt from '@/components/icons/Bolt'
export default {
  components: { Bolt },
  name: 'ReportPromo',
}
</script>

<style scoped>
.report-promo {
  background: linear-gradient(
    to right,
    var(--simple-black) 50%,
    var(--light-grey) 0
  );
}
.report-promo__content {
  padding: 24px 0;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  width: 100%;
  background-color: var(--simple-white);
  display: grid;
  grid-template-areas:
    'title title'
    'text graphics';
  grid-template-columns: 1fr 1fr;
  gap: 0;
  overflow: hidden;
  padding: 12px 0 12px 12px;
}
.report-promo__title-wrap {
  grid-area: title;
  margin: 0;
}
.report-promo__title {
  color: var(--main-black);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-size: 32px;
  line-height: 0.8;
  font-weight: 600;
  letter-spacing: normal;
  text-align: left;
}
.report-promo__text {
  grid-area: text;
  display: inline-block;
  margin: 12px 0 0 0;
  text-align: left;
  padding: 0;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--blacky-grey);
  padding: 8px;
  width: 120%;
}

.report-promo__graphics {
  grid-area: graphics;
  align-self: end;
  padding-top: 32px;
}
.report-promo__svg {
  transform: translateX(25%);
}
@media screen and (min-width: 420px) {
  .report-promo__content {
    grid-template-areas:
      'title graphics'
      'text graphics';
    grid-template-columns: 2fr 1fr;
    overflow: hidden;
  }
  .report-promo__title {
    font-size: 40px;
  }
}
@media screen and (min-width: 768px) {
  .report-promo__content {
    grid-template-areas:
      'title graphics'
      'text graphics';
    grid-template-columns: 3fr 1fr;
    overflow: hidden;
    padding: 16px 0 16px 16px;
  }
  .report-promo__title {
    font-size: 60px;
  }
  .report-promo__text {
    width: 50%;
  }
  .report-promo__svg {
    transform: none;
  }
}
@media screen and (min-width: 1280px) {
  .report-promo__title {
    font-size: 80px;
  }
}
@media screen and (min-width: 1320px) {
  .report-promo__content {
    overflow: visible;
    padding: 24px 0 24px 24px;
  }
  .report-promo__svg {
    transform: translateX(20px);
  }
}
</style>
