<template>
  <article class="report">
    <div class="report__image-wrap">
      <img :src="content.image" class="report__image" />
    </div>
    <div class="report__message-wrap" v-bind:class="themeBackground" >
      <h3 class="report__message-title" v-html="content.title" />
      <p class="report__message-date" v-html="content.date" />
      <div class="report__message-line" />
      <p class="report__message-text" v-html="content.text" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Report',
  props: {
    content: {
      type: Object, 
      default: () => ({
        image: 'transparent',
        title: '',
        date: '',
        text: '',
        theme: 'WHITE'
      }),
    },
  },
  computed: {
    themeBackground() {
      const { theme } = this._props.content;
      return {
        [`theme_${theme}`] : true
      }
    }
  }
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
  background-color: #b33438;
  color: #fff;
}
.theme_red .report__message-line {
  background-color: #fff;
}
.theme_red .report__message-date {
  color: #b3b3b3;
}

.theme_white {
  background-color: #fff;
  color: #000;
}
.theme_white .report__message-title {
  color: #b33438;
}
.theme_white .report__message-line {
  background-color: #b33438;
}
.theme_white .report__message-text {
  color: #493E3E;
}

.theme_gray {
  background-color: #c8c8c8;
  color: #000;
}
.theme_gray .report__message-title {
  color: #b33438;
}
.theme_gray .report__message-line {
  background-color: #fff;
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
