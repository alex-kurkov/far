<template>
  <form
    class="contact-form"
    method="POST"
    novalidate
    @submit.prevent="handleSubmit"
  >
    <p v-if="isSent" class="contact-form__sent">{{ sentText }}</p>
    <label
      class="contact-form__label contact-form__label_type_theme"
      for="theme"
      v-if="!isSent"
      >{{ themeLabel }}</label
    >
    <input
      class="contact-form__input contact-form__input_type_theme"
      :class="{
        'contact-form__input_invalid':
          $v.formData.theme.$dirty && $v.formData.theme.$invalid,
      }"
      v-if="!isSent"
      name="theme"
      id="theme"
      type="text"
      required
      v-model.trim="$v.formData.theme.$model"
    />
    <div class="contact-form__input-error" v-if="!isSent">
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
      v-if="!isSent"
      :placeholder="letterPlaceholder"
      v-model.trim="$v.formData.letter.$model"
      required
    />
    <div class="contact-form__input-error" v-if="!isSent">
      <span v-if="$v.formData.letter.$dirty && !$v.formData.letter.required"
        >Введите письмо</span
      >
      <span v-if="$v.formData.letter.$dirty && !$v.formData.letter.minLength"
        >Минимальная длина {{ $v.formData.name.$params.minLength.min }}
      </span>
    </div>
    <label class="contact-form__label" for="name" v-if="!isSent">{{
      nameLabel
    }}</label>
    <input
      class="contact-form__input contact-form__input_type_name"
      :class="{
        'contact-form__input_invalid':
          $v.formData.name.$dirty && $v.formData.name.$invalid,
      }"
      v-if="!isSent"
      name="name"
      id="name"
      required
      type="text"
      v-model.trim="$v.formData.name.$model"
    />
    <div class="contact-form__input-error" v-if="!isSent">
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
    <label class="contact-form__label" for="email" v-if="!isSent">{{
      emailLabel
    }}</label>
    <input
      class="contact-form__input contact-form__input_type_email"
      :class="{
        'contact-form__input_invalid':
          $v.formData.email.$dirty && $v.formData.email.$invalid,
      }"
      v-if="!isSent"
      name="email"
      id="email"
      type="email"
      required
      v-model.trim="$v.formData.email.$model"
      pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
    />
    <div class="contact-form__input-error" v-if="!isSent">
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
      {{ buttonText }}
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
    btnMoreText: {
      type: String,
      default: '',
    },
    letterPlaceholder: {
      type: String,
      default: '',
    },
    sentText: {
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
      isSent: false,
    }
  },
  computed: {
    buttonText() {
      return !this.isSent ? this.btnText : this.btnMoreText
    },
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
      if (!this.isSent) {
        console.log(
          'submit-data',
          this.formData.theme,
          this.formData.name,
          this.formData.email,
          this.formData.letter
        )
        this.isSent = true
      } else {
        this.isSent = false
        this.formData.theme = ''
        this.formData.name = ''
        this.formData.email = ''
        this.formData.letter = ''
      }
    },
  },
}
</script>

<style scoped>
.contact-form {
  background: var(--light-grey);
  display: grid;
  width: 100%;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: repeat(9, min-content);
  grid-gap: 9px;
  align-items: flex-end;
  padding: 0 18px 12px;
  position: relative;
}

.contact-form__sent {
  grid-column: 1/3;
  grid-row: 1/14;
  align-self: center;
  justify-self: center;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 800;
  font-size: 31px;
  color: #7d7d7d;
}

.contact-form__input {
  border: 1px solid var(--true-grey);
  border-radius: 8px;
  background: transparent;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 400;
  font-style: normal;
  color: var(--main-black);
  font-size: 11px;
  padding: 5px;
}

.contact-form__input:focus {
  outline: none;
}

.contact-form__input_invalid {
  color: var(--main-red);
  border: 1px solid var(--main-red);
}

.contact-form__input_type_theme {
  background: var(--simple-white);
}

.contact-form__input_type_letter {
  width: 100%;
  grid-column: 1/3;
  background: var(--simple-white);
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  z-index: 2;
  max-width: 93vw;
  min-width: 280px;
  min-height: 50px;
}

.contact-form__input_type_letter::placeholder {
  color: var(--light-grey);
}

.contact-form__input-error {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.2;
  color: var(--main-red);
  margin: 0;
  align-self: flex-start;
  padding: 0 0 0 16px;
  grid-column: 1/3;
  align-self: center;
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
  color: var(--main-red);
  font-size: 20px;
}

.contact-form__arrows {
  font-size: 22px;
  color: var(--simple-white);
  position: absolute;
  bottom: 10px;
  left: 18px;
}

.contact-form__submit-btn {
  border: none;
  box-shadow: none;
  border-radius: 12px;
  background: var(--main-red);
  color: var(--simple-white);
  font-family: 'Roboto', Arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  padding: 0 20px;
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
  cursor: default;
}

@media screen and (min-width: 768px) {
  .contact-form {
    grid-gap: 10px;
    padding: 0 52px 40px;
  }

  .contact-form__sent {
    font-size: 61px;
  }

  .contact-form__input {
    font-size: 17px;
    padding: 15px;
  }

  .contact-form__input_type_letter {
    font-size: 37px;
    min-height: 215px;
    padding: 25px 31px;
  }

  .contact-form__input-error {
    font-size: 15px;
    padding: 0 0 0 36px;
  }

  .contact-form__label {
    font-size: 31px;
    padding: 0 0 0 36px;
  }

  .contact-form__label_type_theme {
    font-size: 46px;
  }

  .contact-form__submit-btn {
    padding: 0 30px;
    height: 65px;
    font-size: 31px;
  }

  .contact-form__arrows {
    font-size: 41px;
    bottom: 43px;
    left: 88px;
  }
}

@media screen and (min-width: 1280px) {
  .contact-form {
    width: 664px;
    padding: 0 151px 33px 20px;
    grid-template-columns: 0.25fr 1fr;
    order: 2;
    grid-gap: 10px;
    background: linear-gradient(
      to right,
      var(--light-grey) 580px,
      var(--simple-white) 580px
    );
  }

  .contact-form__input {
    font-size: 22px;
    padding: 10px;
  }

  .contact-form__input_type_letter {
    width: 466px;
    justify-self: flex-end;
    max-width: 500px;
  }

  .contact-form__input-error {
    padding: 0 0 0 28px;
    font-size: 14px;
  }

  .contact-form__label {
    font-size: 22px;
    padding: 0 0 0 28px;
  }

  .contact-form__label_type_theme {
    padding: 0;
    font-size: 31px;
  }

  .contact-form__arrows {
    bottom: 34px;
    left: 48px;
    font-size: 38px;
  }
  .contact-form__submit-btn {
    height: 51px;
    font-size: 24px;
    border-radius: 20px;
  }
}
</style>
