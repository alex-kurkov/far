<template>
  <h2 class="">
    <span 
    class="word"
    v-for="(word, index) in words" 
    :key="index" 
    >
      {{ word }}
      <div class="underline" v-bind:style="{ 'background-color': lineColor, height: height + 'px', bottom: bottomOffcet + 'px' }" />
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
        default: '#b33438',
      },
      height: {
        type: String,
        default: '11',
      },
      bottomOffcet: {
        type: String,
        default: '4',
      }
    },
    computed: {
      words() {
        return this
          .title
          .split(' ')
          .reduce(
            (acc, word, index, arr) => {
              acc.push(word);
              if (index !== arr.length - 1) acc.push(' ');
              return acc;
            }, [])
      }
    }
  }
</script>

<style scoped>
.word {
  display: inline;
  position: relative;
  white-space: nowrap;
}

.underline {
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
}
.word:last-of-type .underline {
  width: 90%;
}
</style>