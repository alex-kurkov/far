<template>
  <ul class="money-options">
    <li class="money-options__option">
      <label class="money-options__radio-label">
        <input
          type="radio"
          name="money"
          class="money-options__radio"
          :value="values.big"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="money-options__option-btn"
          :class="{
            'money-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
        >
          {{ values.big }}<span class="money-options__ruble">&#8381;</span>
        </span>
      </label>
    </li>
    <li class="money-options__option">
      <label class="money-options__radio-label">
        <input
          type="radio"
          name="money"
          class="money-options__radio"
          :value="values.average"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="money-options__option-btn"
          :class="{
            'money-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
        >
          {{ values.average
          }}<span class="money-options__ruble">&#8381;</span></span
        >
      </label>
    </li>
    <li class="money-options__option">
      <label class="money-options__radio-label">
        <input
          type="radio"
          name="money"
          class="money-options__radio"
          :value="values.small"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="money-options__option-btn"
          :class="{
            'money-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
        >
          {{ values.small }}<span class="money-options__ruble">&#8381;</span>
        </span>
      </label>
    </li>
    <li class="money-options__sum-option">
      <input
        class="money-options__sum"
        :class="{
          'money-options__sum_invalid': $v.choice.$dirty && !$v.choice.required,
        }"
        type="text"
        required
        pattern="\d+"
        v-bind:placeholder="$t('support.sumOption')"
        v-model.trim="$v.choice.$model"
      />
      <label class="money-options__agreement">
        <input
          type="checkbox"
          class="money-options__checkbox"
          name="agree"
          value=""
          required
          v-model.trim="$v.agree.$model"
        />
        <span
          class="money-options__agreement-check"
          :class="{
            'money-options__agreement-check_invalid':
              $v.agree.$dirty && !$v.agree.required,
          }"
        ></span>
        <i18n
          tag="span"
          path="support.agree"
          class="money-options__agreement-text"
        >
          <template v-slot:offer>
            <NuxtLink class="money-options__agreement-link" to="/cp/offer">
              {{ $t('support.offer') }}
            </NuxtLink>
          </template>
        </i18n>
      </label>
    </li>
    <li>
      <div class="money-options__input-error">
        <span v-if="$v.choice.$dirty && !$v.choice.required"
          >Введите сумму</span
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'MoneyOptions',
  props: {
    values: {
      type: Object,
      default: () => ({
        big: 1000,
        average: 500,
        small: 200,
      }),
    },
  },
  data() {
    return {
      choice: '',
      otherSum: '',
      agree: '',
    }
  },
  validations: {
    choice: {
      required,
    },
    agree: {
      required,
    },
  },
}
</script>

<style scoped>
.money-options {
  list-style: none;
  padding: 0;
  margin: 11px 0 13px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 283px;
}

.money-options__option {
  margin: 0;
}

.money-options__option:first-of-type {
  margin: 0 17px 10px 0;
}

.money-options__option-btn {
  min-width: 133px;
  height: 83px;
  background: var(--simple-white);
  color: rgba(0, 0, 0, 0.2);
  font-family: 'Tomorrow Wind', Arial, sans-serif;
  font-size: 108px;
  line-height: 0.8;
  text-align: center;
  border-radius: 20px;
}

.money-options__option-btn:hover {
  border: 1px solid var(--simple-black);
  cursor: pointer;
}

.money-options__option-btn_invalid {
  border: 1px solid var(--main-red);
}

.money-options__radio {
  display: none;
}

.money-options__radio-label {
  position: relative;
  display: flex;
  align-items: center;
}

.money-options__radio:checked + .money-options__option-btn {
  background-color: transparent;
  color: var(--simple-black);
  border: 2px solid var(--simple-black);
}

.money-options__ruble {
  color: var(--simple-white);
  font-family: 'Druk Cyr', Arial, sans-serif;
  font-size: 84px;
  text-shadow: -2px 0 var(--light-grey), 0 2px var(--light-grey),
    2px 0 var(--light-grey), 0 -2px var(--light-grey);
  mix-blend-mode: multiply;
}

.money-options__radio:checked ~ span > span {
  text-shadow: -2px 0 var(--simple-black), 0 2px var(--simple-black),
    2px 0 var(--simple-black), 0 -2px var(--simple-black);
}

.money-options__sum-option {
  display: flex;
  flex-direction: column;
  width: 133px;
  margin: 0 0 0 17px;
  position: relative;
}

.money-options__sum {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--simple-grey);
  margin: 0 0 17px 0;
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  padding: 20px 0 6px;
}

.money-options__sum:focus {
  outline: none;
}

.money-options__sum_invalid {
  color: var(--simple-grey);
  border-bottom: 1px solid var(--main-red);
}

.money-options__input-error {
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: var(--main-red);
  margin: 5px 0 5px 0;
  align-self: flex-start;
  padding: 0 0 0 13px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.money-options__agreement {
  position: relative;
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
}

.money-options__agreement-check {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 1px solid var(--simple-grey);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 4px;
}

.money-options__agreement-check_invalid {
  border: 1px solid var(--main-red);
}

.money-options__checkbox {
  display: none;
}

.money-options__checkbox:checked + .money-options__agreement-check::before {
  content: '✓';
}

.money-options__agreement-text {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 11px;
  line-height: 1.4;
  color: var(--simple-grey);
  display: flex;
  justify-content: space-between;
  min-width: 104px;
  margin: 0 0 0 23px;
}

.money-options__agreement-link {
  color: var(--simple-grey);
  text-decoration: none;
  border-bottom: 1px solid var(--simple-grey);
  transition: opacity 0.5s linear;
}

.money-options__agreement-link:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .money-options {
    margin: 26px 0;
    max-width: 575px;
  }

  .money-options__option:first-of-type {
    margin: 0 27px 19px 0;
  }

  .money-options__option-btn {
    width: 274px;
    height: 174px;
    font-size: 217px;
    line-height: 0.9;
  }

  .money-options__ruble {
    font-size: 169px;
    line-height: 0.9;
  }

  .money-options__sum-option {
    width: 274px;
    margin: 0 0 0 27px;
  }

  .money-options__sum {
    margin: 0 0 30px 0;
    font-size: 30px;
    padding: 42px 0 12px;
  }

  .money-options__input-error {
    font-size: 16px;
    margin: 10px 0 10px 0;
  }

  .money-options__agreement {
    width: 30px;
    height: 30px;
  }

  .money-options__agreement-text {
    font-size: 22px;
    min-width: 211px;
    margin: 0 0 0 42px;
  }

  .money-options__checkbox:checked + .money-options__agreement-check::before {
    content: '✓';
    font-size: 33px;
  }
}

@media screen and (min-width: 1280px) {
  .money-options {
    margin: 26px 0 20px;
  }

  .money-options__option {
    margin: 0 10px 32px 0;
  }

  .money-options__option:first-of-type {
    margin: 0 10px 32px 0;
  }

  .money-options__option:nth-of-type(3) {
    margin: 0 0 32px 0;
  }

  .money-options__option-btn {
    width: 144px;
    height: 88px;
    font-size: 114px;
  }

  .money-options__ruble {
    font-size: 89px;
  }

  .money-options__sum-option {
    width: 448px;
    margin: 0;
    flex-direction: row;
    align-items: baseline;
  }

  .money-options__sum {
    margin: 0 21px 0 0;
    font-size: 24px;
    padding: 0 0 14px 0;
    max-width: 225px;
  }

  .money-options__input-error {
    min-width: 450px;
    padding: 0;
  }

  .money-options__agreement {
    width: 22px;
    height: 22px;
  }

  .money-options__agreement-text {
    font-size: 18px;
    min-width: 171px;
    margin: 0 0 0 30px;
  }

  .money-options__checkbox:checked + .money-options__agreement-check::before {
    content: '✓';
    font-size: 22px;
  }
}
</style>
