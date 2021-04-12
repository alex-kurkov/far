<template>
  <article class="member">
    <img class="member__image" :src="image" />
    <div class="member__info">
      <!-- <h3 class="member__name" v-html="name"></h3> -->
      <HeavilyUnderlinedTitle
        :title="name"
        class="member__name"
        lineColor="#000"
      />
      <p class="member__text" v-html="info"></p>
    </div>
  </article>
</template>

<script>
import HeavilyUnderlinedTitle from '../HeavilyUnderlinedTitle'
export default {
  name: 'TeamMember',
  components: {
    HeavilyUnderlinedTitle,
  },
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
* {
  outline: 1px solid red;
}
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 320px;
  position: relative;
  min-height: 454px;
}

.member__image {
  width: 100%;
  max-width: 320px;
  height: 100%;
}

.member__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 294px;
  padding: 20px;
  box-sizing: border-box;
  border: 4px solid #000;
  border-radius: 49px;
  background: #b23438;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.member__name {
  color: #fff;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 0.8;
  font-size: 31.5px;
  margin: 0 0 28px 0;
}

.member__text {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
  color: #fff;
}
</style>
