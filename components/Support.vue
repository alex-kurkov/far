<template>
  <section class="support">
    <div class="support__sideblock"></div>
    <form class="support__container">
      <h3 class="support__title">
        Поддержать <span class="support__span">ФАР</span>
      </h3>
      <SmileIcon
        class="support__smile"
        backgroundColor="#fff"
        mainColor="#000"
      />
      <Tumbler />
      <PayOptions
        :options="{ first: 'Карта', second: 'ЮMoney', third: 'Терминал' }"
      />
      <MoneyOptions :values="{ big: 1000, average: 500, small: 200 }" />
      <input class="support__input" type="text" required placeholder="Имя" />
      <input
        class="support__input"
        type="email"
        required
        placeholder="Email"
        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
      />
      <button class="support__submit-btn" type="submit">
        Перейти к оплате
      </button>
      <NuxtLink class="support__link" to="#"
        >Политика конфеденциальности</NuxtLink
      >
    </form>
  </section>
</template>

<script>
import SmileIcon from './icons/smile'
import PayOptions from './support/PayOptions'
import MoneyOptions from './support/MoneyOptions'
import Tumbler from './support/Tumbler'
export default {
  name: 'Support',
  components: {
    SmileIcon,
    PayOptions,
    MoneyOptions,
    Tumbler,
  },
}
</script>

<style scoped>
.support {
  width: 100%;
  height: auto;
  background: #cbcbcb;
  display: flex;
  padding: 20px 16px 16px;
}

.support__sideblock {
  display: none;
}

.support__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.support__title {
  margin: 0;
  padding: 0;
  font-family: 'Vollkorn', sans-serif;
  font-weight: 900;
  font-size: 41px;
  line-height: 1;
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  width: 54%;
  word-wrap: break-word;
  align-self: flex-start;
}

.support__smile {
  position: absolute;
  top: -45px;
  right: -23px;
  width: 153px;
  height: auto;
}

.support__span {
  color: #000;
  font-size: 42px;
}

.support__input {
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 1px solid #727272;
  color: #b23438;
  font-family: 'Vollkorn', sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 0.7;
  margin: 0 0 18px 0;
  padding: 0 0 0 13px;
}

.support__input:focus {
  outline: none;
  border-bottom: 1px solid #000;
}

.support__submit-btn {
  border: none;
  box-shadow: none;
  background: #b23438;
  border-radius: 50%;
  min-height: 54px;
  width: 79%;
  color: #fff;
  font-family: 'Vollkorn', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 6px 0 14px;
  transition: opacity 0.5s linear;
}

.support__submit-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.support__link {
  color: #727272;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  text-decoration: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #727272;
  transition: opacity 0.5s linear;
}

.support__link:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media screen and (min-width: 500px) {
  .support__title {
    /* word-wrap: unset; */
    width: 60%;
    letter-spacing: -3px;
  }

  .support__span {
    letter-spacing: -10px;
  }
}

@media screen and (min-width: 768px) {
  .support {
    padding: 24px 53px 47px;
  }

  .support__title {
    font-size: 90px;
    width: 58%;
    line-height: 0.8;
    -webkit-text-stroke: 2px #000;
  }

  .support__span {
    font-size: 90px;
  }

  .support__smile {
    top: -64px;
    width: 260px;
  }

  .support__input {
    font-size: 38px;
    margin: 0 0 42px 0;
    padding: 0 0 0 25px;
  }

  .support__submit-btn {
    min-height: 110px;
    width: 67%;
    font-size: 32px;
    margin: 6px 0 28px;
  }

  .support__link {
    font-size: 22px;
  }
}

@media screen and (min-width: 1280px) {
  .support {
    width: 56%;
    padding: 0;
  }

  .support .container:nth-child(7) {
    order: 6;
  }

  .support__sideblock {
    display: flex;
    flex-direction: column;
    width: 100px;
    background: #000;
  }

  .support__title {
    font-size: 63px;
    line-height: 0.8;
    margin: 8px 0 0 118px;
  }

  .support__span {
    font-size: 63px;
  }

  .support__smile {
    width: 223px;
    right: 518px;
    top: -74px;
  }

  .support__input {
    font-size: 29px;
    margin: 0 0 20px 0;
    padding: 0 0 0 18px;
    max-width: 448px;
  }

  .support__submit-btn {
    min-height: 100px;
    width: 100%;
    font-size: 32px;
    margin: 0;
    order: 9;
  }

  .support__link {
    font-size: 18px;
    margin: 11px 0 15px;
    order: 8;
  }
}
</style>
