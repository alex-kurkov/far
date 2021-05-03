<template>
  <ul class="pay-options">
    <li class="pay-options__option">
      <label class="pay-options__radio-label">
        <input
          type="radio"
          required
          name="payment"
          class="pay-options__radio"
          :value="options.first.type"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="pay-options__option-btn"
          :class="{
            'pay-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
          >{{ options.first.value }}</span
        >
      </label>
    </li>
    <li class="pay-options__option">
      <label class="pay-options__radio-label">
        <input
          type="radio"
          name="payment"
          class="pay-options__radio"
          :value="options.second.type"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="pay-options__option-btn"
          :class="{
            'pay-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
          >{{ options.second.value }}</span
        >
      </label>
    </li>
    <li class="pay-options__option">
      <label class="pay-options__radio-label">
        <input
          type="radio"
          name="payment"
          class="pay-options__radio"
          :value="options.third.type"
          v-model.trim="$v.choice.$model"
        />
        <span
          class="pay-options__option-btn"
          :class="{
            'pay-options__option-btn_invalid':
              $v.choice.$dirty && !$v.choice.required,
          }"
          >{{ options.third.value }}</span
        >
      </label>
    </li>
  </ul>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'PayOptions',
  props: {
    options: {
      type: Object,
      default: () => ({
        first: () => ({}),
        second: () => ({}),
        third: () => ({}),
      }),
    },
  },
  data() {
    return {
      choice: '',
    }
  },
  validations: {
    choice: {
      required,
    },
  },
}
</script>

<style scoped>
.pay-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.pay-options__option {
  margin: 0 6px 0 0;
}

.pay-options__option:last-of-type {
  margin: 0;
}

.pay-options__radio-label {
  position: relative;
  display: flex;
  align-items: center;
}

.pay-options__radio {
  display: none;
}

.pay-options__option-btn {
  width: 90px;
  height: 33px;
  box-shadow: none;
  border: none;
  background: #fff;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: var(--main-black);
  line-height: 1.3;
}

.pay-options__option-btn:hover {
  background-color: rgba(178, 52, 56, 0.2);
  cursor: pointer;
}

.pay-options__option-btn_invalid {
  border: 1px solid var(--main-red);
}

.pay-options__radio:checked + .pay-options__option-btn {
  background: var(--main-red);
  color: #fff;
}

@media screen and (min-width: 768px) {
  .pay-options__option-btn {
    width: 190px;
    height: 71px;
    border-radius: 17px;
    font-size: 30px;
  }
}

@media screen and (min-width: 1280px) {
  .pay-options__option-btn {
    width: 144px;
    height: 56px;
    font-size: 23px;
  }

  .pay-options__option {
    margin: 0 8px 0 0;
  }
}
</style>
