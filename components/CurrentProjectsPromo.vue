<template>
  <div class="promo">
    <div class="content">
      <div class="title-aria">
        <HeavilyUnderlinedTitle
          class="title"
          :title="'Текущие проекты'"
          lineColor="var(--main-red)"
          height="11"
        />
        <p
          class="subtitle"
          v-html="'В данном разделе представлена информация о реализующихся в настоящее время проектах фонда'"
        />
      </div>
      <div class="promo-image"></div>
      <p
        class="text"
        v-html="'В данном разделе представлена информация о реализующихся в настоящее время проектах фонда'"
      />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CurrentProjectsPromo',
    components: {},
  }
</script>

<style scoped>
.promo {
  padding-top: 24px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background: var(--simple-black);
}
.content {
  background: linear-gradient(to bottom, var(--simple-black) 75%, var(--simple-white) 25%);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'title'
    'image'
    'text';
  padding: 8px;
}
.title-aria {
  grid-area: title;
  padding: 12px;
}
.title {
  color: var(--simple-white);
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 40px;
  line-height: 0.8;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 12px;
}

.subtitle {
  text-align: left;
  margin: 0;
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--light-grey);
}
.text {
  grid-area: text;
  text-align: left;
  margin: 0;
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--simple-black);
  padding: 24px;
}
.promo-image {
  grid-area: image;
  width: calc(100% - 12px);
  padding-bottom: calc(100% - 12px);
  background-image: url('/images/promo-bg350px.png');
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 4px 4px 0 4px var(--simple-black);
}
@media screen and (min-width: 420px) {
  .title {
    font-size: 48px;
  }
  .subtitle {
    font-size: 20px;
  }
  .text {
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) {
  .content {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
    grid-template-areas:
      'title image'
      'text image';
    column-gap: 16px;
    padding: 0;
  }
  .title-aria {
    padding: 8px;
    overflow: hidden;
  }
  .title {
    font-size: 60px;
    margin-bottom: 8px;
  }
  .subtitle {
    font-size: 20px;
  }
  .text {
    font-size: 20px;
    padding: 8px;
    overflow: hidden;
  }
  .promo-image {
    width: 96%;
    padding: 48%;
  }
}
@media screen and (min-width: 1280px) {
  .title {
    font-size: 90px;
    margin-bottom: 20px;
  }
  .subtitle {
    font-size: 30px;
  }
  .text {
    font-size: 30px;
  }
  .promo-image {
    width: 96%;
    padding: 48%;
    background-image: url('/images/promo-bg.png');
  }
}
</style>
