<template>
  <div class="tumbler">
    <label class="tumbler__label">
      <span class="tumbler__label-text">{{ $t('support.monthly') }}</span>
      <input
        type="checkbox"
        name="periodCheckbox"
        value=""
        class="tumbler__checkbox"
        v-model.trim="$v.choice.$model"
      />
      <span class="tumbler__slider"></span>
      <span class="tumbler__label-text">{{ $t('support.oneTime') }}</span>
    </label>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Tumbler',
  data() {
    return {
      choice: false,
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
.tumbler {
  width: 237px;
  margin: 52px 0 29px;
}

.tumbler__label {
  position: relative;
  display: flex;
  align-items: center;
  width: 58px;
  height: 35px;
}

.tumbler__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 83px;
  right: -84px;
  bottom: 0;
  background-color: transparent;
  border: 2px solid #000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 31px;
}

.tumbler__slider::before {
  position: absolute;
  content: '';
  height: 31px;
  width: 31px;
  left: 0;
  bottom: 0;
  background-color: #b23438;
  border-radius: 50%;
}

.tumbler__checkbox {
  display: none;
}

.tumbler__checkbox:checked + .tumbler__slider {
  background-color: transparent;
}

.tumbler__checkbox:checked + .tumbler__slider::before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

.tumbler__label-text {
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: #b23438;
  border-bottom: 1px solid #b23438;
}

.tumbler__label-text:last-of-type {
  margin: 0 0 0 102px;
}

@media screen and (min-width: 768px) {
  .tumbler {
    width: 470px;
    margin: 50px 0 26px;
  }
  .tumbler__label {
    width: 117px;
    height: 65px;
  }

  .tumbler__slider {
    left: 164px;
    right: -167px;
    border-radius: 61px;
  }

  .tumbler__slider::before {
    height: 61px;
    width: 61px;
  }

  .tumbler__checkbox:checked + .tumbler__slider::before {
    -webkit-transform: translateX(55px);
    -ms-transform: translateX(55px);
    transform: translateX(55px);
  }

  .tumbler__label-text {
    font-size: 28px;
    line-height: 1;
  }

  .tumbler__label-text:last-of-type {
    margin: 0 0 0 179px;
  }
}

@media screen and (min-width: 1280px) {
  .tumbler {
    width: 388px;
    margin: 16px 0 23px;
  }
  .tumbler__label {
    width: 102px;
    height: 58px;
  }

  .tumbler__slider {
    left: 128px;
    right: -132px;
    border: 4px solid #000;
    border-radius: 50px;
  }

  .tumbler__slider::before {
    height: 50px;
    width: 50px;
  }

  .tumbler__checkbox:checked + .tumbler__slider::before {
    -webkit-transform: translateX(48px);
    -ms-transform: translateX(48px);
    transform: translateX(48px);
  }

  .tumbler__label-text {
    font-size: 22px;
    line-height: 1;
  }

  .tumbler__label-text:last-of-type {
    margin: 0 0 0 147px;
  }
}
</style>
