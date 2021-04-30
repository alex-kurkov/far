<template>
  <form
    class="contact-form"
    method="POST"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <label
      class="contact-form__label contact-form__label_type_theme"
      for="theme"
      >{{ themeLabel }}</label
    >
    <input
      class="contact-form__input contact-form__input_type_theme"
      :class="{
        'contact-form__input_invalid':
          $v.formData.theme.$dirty && $v.formData.theme.$invalid,
      }"
      name="theme"
      id="theme"
      type="text"
      required
      v-model.trim="$v.formData.theme.$model"
    />
    <div class="contact-form__input-error">
      <span v-if="$v.formData.theme.$dirty && !$v.formData.theme.required"
        >Введите тему</span
      >
      <span v-if="$v.formData.theme.$dirty && !$v.formData.theme.minLength"
        >Минимальная длина {{ $v.formData.theme.$params.minLength.min }}
      </span>
      <span v-if="!$v.formData.theme.maxLength"
        >Максимальная длина {{ $v.formData.theme.$params.maxLength.max }}
      </span>
    </div>
    <textarea
      class="contact-form__input contact-form__input_type_letter"
      :class="{
        'contact-form__input_invalid':
          $v.formData.letter.$dirty && $v.formData.letter.$invalid,
      }"
      :placeholder="letterPlaceholder"
      v-model.trim="$v.formData.letter.$model"
      required
    />
    <div class="contact-form__input-error">
      <span v-if="$v.formData.letter.$dirty && !$v.formData.letter.required"
        >Введите письмо</span
      >
      <span v-if="$v.formData.letter.$dirty && !$v.formData.letter.minLength"
        >Минимальная длина {{ $v.formData.name.$params.minLength.min }}
      </span>
    </div>
    <label class="contact-form__label" for="name">{{ nameLabel }}</label>
    <input
      class="contact-form__input contact-form__input_type_name"
      :class="{
        'contact-form__input_invalid':
          $v.formData.name.$dirty && $v.formData.name.$invalid,
      }"
      name="name"
      id="name"
      required
      type="text"
      v-model.trim="$v.formData.name.$model"
    />
    <div class="contact-form__input-error">
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
    <label class="contact-form__label" for="email">{{ emailLabel }}</label>
    <input
      class="contact-form__input contact-form__input_type_email"
      :class="{
        'contact-form__input_invalid':
          $v.formData.email.$dirty && $v.formData.email.$invalid,
      }"
      name="email"
      id="email"
      type="email"
      required
      v-model.trim="$v.formData.email.$model"
      pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
    />
    <div class="contact-form__input-error">
      <span v-if="$v.formData.email.$dirty && !$v.formData.email.required"
        >Введите почту</span
      >
      <span v-if="$v.formData.email.$dirty && !$v.formData.email.email"
        >Введите электронную почту в правильном формате
      </span>
    </div>
    <span class="contact-form__arrows"
      >&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span
    >
    <button
      class="contact-form__submit-btn"
      type="submit"
      :disabled="$v.$invalid"
    >
      {{ btnText }}
    </button>
  </form>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'ContactForm',
  props: {
    themeLabel: {
      type: String,
      default: '',
    },
    nameLabel: {
      type: String,
      default: '',
    },
    emailLabel: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    letterPlaceholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      formData: {
        theme: '',
        letter: '',
        name: '',
        email: '',
      },
    }
  },
  validations: {
    formData: {
      theme: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(30),
      },
      letter: {
        required,
        minLength: minLength(2),
      },
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
      console.log(
        'submit-data',
        this.formData.theme,
        this.formData.name,
        this.formData.email,
        this.formData.letter
      )
    },
  },
}
</script>

<style scoped>
.contact-form {
  background: #cbcbcb;
  display: grid;
  width: 100%;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 3px;
  align-items: flex-end;
  padding: 0 18px 12px;
  position: relative;
}

.contact-form__input {
  border: 1px solid #838383;
  border-radius: 8px;
  background: transparent;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 400;
  font-style: normal;
  color: #303030;
  font-size: 11px;
  padding: 5px;
}

.contact-form__input:focus {
  outline: none;
}

.contact-form__input_invalid {
  color: #b23438;
  border: 1px solid #b23438;
}

.contact-form__input_type_theme {
  background: #fff;
}

.contact-form__input_type_letter {
  width: 100%;
  grid-column: 1/3;
  background: #fff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
}

.contact-form__input_type_letter::placeholder {
  color: #cbcbcb;
}

.contact-form__input-error {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: #b23438;
  margin: 0;
  align-self: flex-start;
  padding: 0 0 0 16px;
  grid-column: 1/3;
}

.contact-form__label {
  padding: 0 0 0 16px;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
}

.contact-form__label_type_theme {
  text-transform: uppercase;
  color: #b23438;
  font-size: 20px;
}

.contact-form__arrows {
  font-size: 24px;
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 18px;
}

.contact-form__submit-btn {
  border: none;
  box-shadow: none;
  border-radius: 12px;
  background: #b23438;
  color: #fff;
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  width: 109px;
  height: 28px;
  justify-self: flex-end;
  text-transform: uppercase;
  grid-column: 2/3;
  transition: opacity 0.5s linear;
}

.contact-form__submit-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}

.contact-form__submit-btn:disabled {
  opacity: 0.4;
}
</style>