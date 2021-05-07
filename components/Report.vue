<template>
  <article class="report">
    <div class="report__image-wrap">
      <img
        v-bind:src="image || defaultImage"
        class="report__image"
        alt="report__image"
      />
    </div>
    <div class="report__message-wrap" :class="`theme_${content.theme}`">
      <h3
        class="report__message-title"
        v-html="content.title[`${$i18n.locale}`]"
      />
      <p class="report__message-date" v-html="date" />
      <div class="report__message-line" />
      <p
        class="report__message-text"
        v-html="content.text[`${$i18n.locale}`]"
      />
    </div>
  </article>
</template>

<script>
import { baseUrl } from '@/utils/api'
export default {
  name: 'Report',
  data() {
    return {
      defaultImage: '/images/defReports.png',
    }
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    image() {
      return baseUrl + this.content.image.url
    },
    date() {
      const months = {
        en: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        ru: [
          'Января',
          'Февраля',
          'Марта',
          'Апреля',
          'Мая',
          'Июня',
          'Июля',
          'Августа',
          'Сентября',
          'Октября',
          'Ноября',
          'Декабря',
        ],
      }
      const [year, month, day] = this.content.date.split('-')
      const calculatedDay = day.replace(/^0/, '')
      const calculatedMonth = months[this.$i18n.locale][Number(month)]
      return `${calculatedDay} ${calculatedMonth} ${year}`
    },
  },
}
</script>

<style scoped>
.report {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.report__image-wrap {
  width: 100%;
  height: 200px;
}
.report__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.report__message-wrap {
  width: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  align-items: flex-start;
  text-align: left;
}

.report__message-title {
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.05;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.report__message-date {
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  font-weight: 400;
}
.report__message-line {
  width: 50%;
  height: 4px;
}
.report__message-text {
  width: 100%;
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  font-weight: 400;
  overflow: hidden;
}

.theme_red {
  background-color: var(--main-red);
  color: var(--simple-white);
}
.theme_red .report__message-line {
  background-color: var(--simple-white);
}
.theme_red .report__message-date {
  color: var(--light-grey);
}

.theme_white {
  background-color: var(--simple-white);
  color: var(--simple-black);
}
.theme_white .report__message-title {
  color: var(--main-red);
}
.theme_white .report__message-line {
  background-color: var(--main-red);
}
.theme_white .report__message-text {
  color: var(--blacky-grey);
}

.theme_gray {
  background-color: var(--light-grey);
  color: var(--simple-black);
}
.theme_gray .report__message-title {
  color: var(--main-red);
}
.theme_gray .report__message-line {
  background-color: var(--simple-white);
}

@media screen and (min-width: 768px) {
  .report {
    flex-direction: row;
    min-height: 300px;
  }
  .report:nth-of-type(even) {
    flex-flow: row-reverse;
  }
  .report__image-wrap {
    width: 50%;
    height: auto;
  }
  .report__message-wrap {
    width: 50%;
  }
  .report__message-wrap {
    gap: 16px;
    padding: 20px;
  }
  .report:nth-of-type(even) .report__message-wrap {
    align-items: flex-end;
    text-align: right;
  }
  .report__message-title {
    font-size: 32px;
    margin-bottom: 12px;
  }
  .report__message-date {
    font-size: 24px;
  }
  .report__message-text {
    width: 70%;
    font-size: 24px;
  }
}

@media screen and (min-width: 1280px) {
  .report {
    min-height: 400px;
  }
}
</style>
