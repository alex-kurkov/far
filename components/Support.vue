<template>
  <section class="support">
    <div class="support__sideblock"></div>
    <form class="support__container" @submit.prevent="handleSubmit" novalidate>
      <h3 class="support__title">
        {{ $t('support.title') }}
        <span class="support__span">{{ $t('support.subtitle') }}</span>
      </h3>
      <SmileIcon
        class="support__smile"
        backgroundColor="#fff"
        mainColor="#000"
      />
      <Tumbler ref="regularity" />
      <PayOptions
        :options="{
          first: $t('support.card'),
          second: $t('support.umoney'),
          third: $t('support.terminal'),
        }"
        ref="payOptions"
      />
      <MoneyOptions
        :values="{ big: firstSum, average: secondSum, small: thirdSum }"
        ref="moneyOptions"
      />
      <input
        class="support__input"
        :class="{
          support__input_invalid:
            $v.formData.name.$dirty && $v.formData.name.$invalid,
        }"
        type="text"
        name="name"
        required
        v-bind:placeholder="$t('support.name')"
        v-model.trim="$v.formData.name.$model"
      />
      <div class="support__input-error">
        <span v-if="$v.formData.name.$dirty && !$v.formData.name.required"
          >Введите имя</span
        >
        <span v-if="$v.formData.name.$dirty && !$v.formData.name.minLength"
          >Минимальная длина {{ $v.formData.name.$params.minLength.min }}
        </span>
        <span v-if="!$v.formData.name.maxLength"
          >Максимальная длина {{ $v.formData.name.$params.maxLength.max }}
        </span>
      </div>
      <input
        class="support__input"
        :class="{
          support__input_invalid:
            ($v.formData.email.$dirty && !$v.formData.email.required) ||
            ($v.formData.email.$dirty && !$v.formData.email.email),
        }"
        type="email"
        name="email"
        required
        placeholder="Email"
        v-model.trim="$v.formData.email.$model"
        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
      />
      <div class="support__input-error">
        <span v-if="$v.formData.email.$dirty && !$v.formData.email.required"
          >Введите почту</span
        >
        <span v-if="$v.formData.email.$dirty && !$v.formData.email.email"
          >Введите электронную почту в правильном формате
        </span>
      </div>
      <button class="support__submit-btn" type="submit">
        {{ $t('support.paymentBtn') }}
      </button>
      <NuxtLink class="support__link" to="#">{{
        $t('support.privacy')
      }}</NuxtLink>
    </form>
  </section>
</template>

<script>
import SmileIcon from './icons/smile'
import PayOptions from './support/PayOptions'
import MoneyOptions from './support/MoneyOptions'
import Tumbler from './support/Tumbler'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Support',
  components: {
    SmileIcon,
    PayOptions,
    MoneyOptions,
    Tumbler,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
      firstSum: this.$store.state.content.support.money[0].sum,
      secondSum: this.$store.state.content.support.money[1].sum,
      thirdSum: this.$store.state.content.support.money[2].sum,
    }
  },

  validations: {
    formData: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(30),
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    handleSubmit() {
      if (
        this.$v.$invalid ||
        this.$refs.moneyOptions.$v.$invalid ||
        this.$refs.payOptions.$v.$invalid
      ) {
        console.log('форма не валидна')
        this.$v.$touch()
        this.$refs.moneyOptions.$v.$touch()
        this.$refs.payOptions.$v.$touch()
        return
      }
      console.log(
        'submit data',
        this.$refs.moneyOptions.$v.choice.$model,
        this.$refs.payOptions.$v.choice.$model
      )
      console.log('согласие с офертой', this.$refs.moneyOptions.$v.agree.$model)
      console.log('однократно', this.$refs.regularity.$v.choice.$model)
    },
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
  margin: 0;
  padding: 0 0 0 13px;
}

.support__input_invalid {
  color: #727272;
  border-bottom: 1px solid #b23438;
}

.support__input:focus {
  outline: none;
}

.support__input-error {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: #b23438;
  margin: 5px 0 5px 0;
  align-self: flex-start;
  padding: 0 0 0 13px;
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

.support__submit-btn:focus {
  outline: none;
}

.support__submit-btn:disabled {
  opacity: 0.5;
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
    /* margin: 0 0 42px 0; */
    margin: 0 0 10px 0;
    padding: 0 0 0 25px;
  }

  .support__submit-btn {
    min-height: 110px;
    width: 67%;
    font-size: 32px;
    margin: 6px 0 28px;
  }

  .support__input-error {
    font-size: 16px;
    margin: 0 0 10px 0;
    padding: 0 0 0 25px;
  }

  .support__link {
    font-size: 22px;
  }
}

@media screen and (min-width: 1280px) {
  .support {
    width: 56%;
    padding: 0;
    max-width: 717px;
  }

  .support .container__donations:nth-child(2) {
    order: 1;
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
    margin: 0 0 12px 0;
    padding: 0 0 0 18px;
    max-width: 448px;
  }

  .support__input-error {
    padding: 0 0 0 18px;
    margin: 0 0 13px 92px;
    font-size: 16px;
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
