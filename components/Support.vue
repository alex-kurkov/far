<template>
  <section class="support">
    <div class="support__sideblock" v-if="!isOnSupportPage"></div>
    <form class="support__container" @submit.prevent="handleSubmit" novalidate>
      <h3 class="support__title" v-if="!isOnSupportPage">
        {{ $t('support.title') }}
        <span class="support__span">{{ $t('support.subtitle') }}</span>
      </h3>
      <h3 class="support__title support__title_type_on-sup-page" v-else>
        {{ $t('support.titleOnPage') }}
      </h3>
      <SmileIcon
        class="support__smile"
        :class="{ 'support__smile_type_on-sup-page': isOnSupportPage }"
        backgroundColor="var( --simple-white)"
        mainColor="var(--simple-black)"
      />
      <Tumbler ref="regularity" :onChoiceUpdate="onChoiceUpdate" />
      <PayOptions
        :options="{
          first: { value: $t('support.card'), type: typeCard },
          second: {
            value: $t('support.umoney'),
            type: typeUmoney,
          },
          third: {
            value: $t('support.terminal'),
            type: typeTerminal,
          },
        }"
        :isAutoTrue="isAutoTrue"
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
      <button
        class="support__submit-btn"
        :class="{ 'support__submit-btn_on-sup-page': isOnSupportPage }"
        type="submit"
      >
        {{
          !isOnSupportPage
            ? $t('support.paymentBtn')
            : $t('support.paymentBtnOnSupPage')
        }}
      </button>
      <NuxtLink class="support__link" to="/cp/privacy-policy">{{
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
import { returnUrl } from '@/config/index'
const axios = require('axios').default

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
      typeCard: this.$store.state.content.support.supportCard.type,
      typeUmoney: this.$store.state.content.support.supportUMoney.type,
      typeTerminal: this.$store.state.content.support.supportTerminal.type,
      isAutoTrue: true,
    }
  },
  props: {
    isOnSupportPage: {
      type: Boolean,
      default: false,
    },
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
    onChoiceUpdate(choice) {
      this.isAutoTrue = choice
      this.$refs.payOptions.choice = ''
    },
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
        this.$refs.payOptions.$v.choice.$model,
        this.formData.email,
        this.formData.name
      )
      console.log('согласие с офертой', this.$refs.moneyOptions.$v.agree.$model)
      console.log('однократно', this.$refs.regularity.$v.choice.$model)

      this.callRedirect(
        this.$refs.moneyOptions.$v.choice.$model,
        returnUrl,
        this.$refs.payOptions.$v.choice.$model,
        !this.$refs.regularity.$v.choice.$model
      )
        .then((res) => {
          if (this.$refs.payOptions.$v.choice.$model === 'cash') {
            console.log('Оплата наличными не работает в тестовом режиме')
          } else {
            // window.location.href = `${res.data.confirmation.confirmation_url}`
            window.open(`${res.data.confirmation.confirmation_url}`, '_blank')
            localStorage.setItem('paymentId', res.data.id)
          }
        })
        .catch((err) => console.log(err))
      this.checkStatusForAutoPay()
    },

    callRedirect(value, returnUrl, typeOfPayment, isSaved) {
      return axios.get(
        `/server-middleware/get-redirect?value=${value}&currency=RUB&return_url=${returnUrl}&type_of_payment=${typeOfPayment}&is_saved=${isSaved}`
      )
    },
    getStatus(paymentId) {
      return axios.get(`/server-middleware/get-redirect/status?id=${paymentId}`)
    },
    autoPay(value, payMethodId) {
      return axios.get(
        `/server-middleware/get-redirect/auto-pay?value=${value}&currency=RUB&id=${payMethodId}`
      )
    },
    checkStatusForAutoPay() {
      const interval = setInterval(() => {
        if (localStorage.getItem('paymentId')) {
          this.getStatus(localStorage.getItem('paymentId'))
            .then((res) => {
              console.log(res.data.status)
              if (
                res.data.status === 'succeeded' &&
                res.data.payment_method.type !== 'cash'
              ) {
                if (res.data.payment_method.saved) {
                  this.autoPay(
                    res.data.amount.value,
                    res.data.payment_method.id
                  ).catch((err) => console.log(err))
                }
                localStorage.removeItem('paymentId')
                clearInterval(interval)
              }
            })
            .catch((err) => console.log(err))
        }
      }, 3000)
    },
  },
}
</script>

<style scoped>
.support {
  width: 100%;
  height: auto;
  background: var(--light-grey);
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
  font-size: 40px;
  line-height: 1;
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1px var(--simple-black);
  width: 54%;
  word-wrap: break-word;
  align-self: flex-start;
}

.support__title_type_on-sup-page {
  font-weight: 500;
  font-size: 45px;
  line-height: 0.7;
  color: var(--main-red);
  -webkit-text-stroke: unset;
  letter-spacing: -3px;
}

.support__smile {
  position: absolute;
  top: -45px;
  right: -23px;
  width: 153px;
  height: auto;
}

.support__span {
  color: var(--simple-black);
  font-size: 42px;
}

.support__input {
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(--simple-grey);
  color: var(--main-red);
  font-family: 'Vollkorn', sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 0.7;
  margin: 0;
  padding: 0 0 0 13px;
}

.support__input_invalid {
  color: var(--simple-grey);
  border-bottom: 1px solid var(--main-red);
}

.support__input:focus {
  outline: none;
}

.support__input-error {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: var(--main-red);
  margin: 5px 0 5px 0;
  align-self: flex-start;
  padding: 0 0 0 13px;
}

.support__submit-btn {
  border: none;
  box-shadow: none;
  background: var(--main-red);
  border-radius: 50%;
  min-height: 54px;
  width: 79%;
  color: var(--simple-white);
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
  color: var(--simple-grey);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  text-decoration: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--simple-grey);
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
    font-size: 88px;
    width: 58%;
    line-height: 0.8;
    -webkit-text-stroke: 2px var(--simple-black);
  }

  .support__title_type_on-sup-page {
    -webkit-text-stroke: unset;
    margin-top: 44px;
    width: 92%;
  }

  .support__span {
    font-size: 90px;
  }

  .support__smile {
    top: -64px;
    width: 260px;
  }

  .support__smile_type_on-sup-page {
    right: -92px;
    top: -115px;
  }

  .support__input {
    font-size: 38px;
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
    background: var(--simple-black);
  }

  .support__title {
    font-size: 63px;
    line-height: 0.8;
    margin: 8px 0 0 118px;
  }

  .support__title_type_on-sup-page {
    font-size: 109px;
    line-height: 0.7;
    top: -70px;
    left: -450px;
    margin: 27px 0 0 0;
    position: absolute;
    width: 115%;
    word-break: break-all;
  }

  .support__span {
    font-size: 63px;
  }

  .support__smile {
    width: 223px;
    right: 518px;
    top: -74px;
  }

  .support__smile_type_on-sup-page {
    right: -116px;
    top: -125px;
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

  .support__submit-btn_on-sup-page {
    border-radius: 20px;
    width: 222px;
    min-height: 52px;
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 400;
    font-size: 25px;
    text-transform: uppercase;
    position: absolute;
    bottom: 50px;
    left: -231px;
  }

  .support__link {
    font-size: 18px;
    margin: 11px 0 15px;
    order: 8;
  }
}
</style>
