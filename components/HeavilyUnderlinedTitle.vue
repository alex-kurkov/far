<template>
  <h2 class="">
    <span class="word" v-for="(word, index) in words" :key="index">
      {{ word }}
      <div
        class="underline"
        v-bind:style="{ 'background-color': lineColor, height: height + 'px' }"
      />
    </span>
  </h2>
</template>

<script>
export default {
  name: 'HeavilyUnderlinedTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    lineColor: {
      type: String,
      default: 'var(--main-red)',
    },
    height: {
      type: String,
      default: '11',
    },
    bottomOffcet: {
      type: String,
      default: '1.2rem',
    },
  },
  computed: {
    words() {
      return this.title.split(' ').reduce((acc, word, index, arr) => {
        acc.push(word)
        // if (index !== arr.length - 1)
        acc.push(' ')
        return acc
      }, [])
    },
  },
}
</script>

<style scoped>
.word {
  display: inline;
  position: relative;
}

.underline {
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 15%;
}
.word:last-of-type .underline {
  width: 90%;
}
@media screen and (min-width: 768px) {
  .underline {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 25%;
  }
}
@media screen and (min-width: 1280px) {
  .underline {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
  }
}
</style>
