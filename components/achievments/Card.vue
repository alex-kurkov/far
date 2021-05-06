<template>
  <div class="card">
    <div class="card__stamp">
      <span class="card__stamp-text">{{
        $t(`achievements[${index - 1}].stamp`)
      }}</span>
    </div>
    <div class="card__info">
      <h3 class="card__title">
        {{ $t(`achievements[${index - 1}].title`) }}
      </h3>
      <div class="card__line"></div>
      <p class="card__text">{{ $t(`achievements[${index - 1}].text`) }}</p>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon,
  },
  props: {
    news: {
      type: Object,
      default: () => ({
        title: 'Заголовок',
        stamp: '1',
        text: 'Текст достижения/новости',
      }),
    },
    index: {
      type: Number,
    },
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 198px;
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  background: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card__stamp {
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
}
.card__info {
  width: calc(100% - 150px);
  padding: 12px;
  overflow: hidden;
  background: linear-gradient(to right, transparent 10%, var(--main-grey) 10%);
}
.card__stamp-text {
  text-align: center;
  font-family: 'Tomorrow Wind', sans-serif;
  font-size: 104px;
  color: var( --simple-white);
  z-index: 6;
  transform: translateX(-16px);
}
.card__title {
  color: var(--main-red);
  font-family: 'Vollkorn', 'Times New Roman', serif;
  /* font-size: 28px; */
  font-size: 18px;
  font-weight: 700;
  line-height: 1.15;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.card__line {
  width: 100%;
  height: 2px;
  background: var( --simple-white);
  margin-bottom: 4px;
}
.card__text {
  font-family: 'Vollkorn', serif;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  color: var(--main-black);
  text-align: left;
  line-height: 1;
}
@media screen and (min-width: 768px) {
  .card {
    height: 400px;
  }

  .card__stamp {
    width: 535px;
  }

  .card__stamp-text {
    font-size: 278px;
  }

  .card__title {
    font-size: 45px;
    margin-bottom: 35px;
    word-break: break-word;
  }

  .card__text {
    font-size: 30px;
  }
}

@media screen and (min-width: 1280px) {
  .card {
    height: 283px;
  }

  .card__stamp {
    width: 182px;
  }

  .card__stamp-text {
    transform: translateX(-22px);
    font-size: 168px;
  }

  .card__title {
    font-size: 29px;
    margin-bottom: 10px;
    word-break: break-word;
  }

  .card__text {
    margin-top: 10px;
    font-size: 21px;
    /* sfsf */
    max-width: 260px;
  }

  .card__info {
    padding: 0 95px 0 42px;
  }
}
</style>
