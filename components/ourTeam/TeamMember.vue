<template>
  <li class="member">
      <img class="member__image" :src="image" :alt="name" />
      <div class="member__info">
        <!-- <h3 class="member__name" v-html="name"></h3> -->
        <HeavilyUnderlinedTitle
          :title="name"
          class="member__name"
          lineColor="#727272"
          height="8"
        />
        <p class="member__text" v-html="info"></p>
      </div>
  </li>
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
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  max-width: 320px;
  position: relative;
}

.member__image {
  width: 320px;
  height: 326px;
  object-fit: cover;
  margin-bottom: 128px;
}

.member__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 294px;
  padding: 20px;
  box-sizing: border-box;
  border: 4px solid #b23438;
  border-radius: 49px;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.member__name {
  color: #b23438;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 0.8;
  font-size: 31.5px;
  margin: 0 0 28px 0;
  text-align: center;
}

.member__text {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
  color: #000;
}

.member:nth-of-type(4n + 2) .member__info {
  background: #000;
}

.member:nth-of-type(4n + 2) .member__name {
  color: #fff;
}

.member:nth-of-type(4n + 2) .member__text {
  color: #fff;
}

.member:nth-of-type(8n + 4) .member__info {
  background: #b23438;
  border-color: #000;
}

.member:nth-of-type(8n + 4) .member__name {
  color: #fff;
}

.member:nth-of-type(8n + 4) .member__text {
  color: #fff;
}

@media screen and (min-width: 768px) {
  .member {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 1098px;
    padding-bottom: 18px;
  }

  .member:nth-of-type(2n + 2) {
    flex-direction: row-reverse;
  }

  .member__image {
    width: 256px;
    height: 251px;
    margin: 0;
  }

  .member__info {
    position: static;
    transform: none;
    max-width: 492px;
    min-height: 243px;
    margin: 0 12px;
    padding: 16px 40px 16px 16px;
  }

  .member__name {
    text-align: left;
    width: 80%;
    margin: 0 0 23px 0;
    font-size: 32px;
  }

  .member__text {
    font-size: 15px;
    text-align: left;
  }
}

@media screen and (min-width: 1280px) {
  .member {
    justify-content: space-between;
    padding-bottom: 24px;
  }

  .member__image {
    width: 370px;
    height: 360px;
  }

  .member__info {
    max-width: 719px;
    margin: 0 14px;
    min-height: 360px;
    padding: 31px 50px 31px 31px;
  }

  .member__name {
    font-size: 45px;
    margin-bottom: 25px;
    width: 70%;
  }

  .member__text {
    font-size: 22px;
    line-height: 1.3;
  }
}
</style>
