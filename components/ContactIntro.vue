<template>
  <div class="contact-intro">
    <img :src="image" class="contact-intro__image" />
    <p class="contact-intro__text">{{ text }}</p>
    <a
      :href="telLink"
      class="contact-intro__contact contact-intro__contact_type_tel"
      >{{ tel }}</a
    >
    <a
      :href="emailLink"
      target="_blank"
      rel="noreferrer noopener"
      class="contact-intro__contact contact-intro__contact_type_email"
      >{{ email }}</a
    >
  </div>
</template>

<script>
export default {
  name: 'ContactIntro',
  props: {
    text: {
      type: String,
      default: '',
    },
    tel: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    telLink: {
      type: String,
      default: '',
    },
    emailLink: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.contact-intro {
  background: var(--simple-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.contact-intro__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 274px;
  height: auto;
  display: none;
}

.contact-intro__text {
  padding: 20px 18px;
  color: var(--light-grey);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
}

.contact-intro__contact {
  font-family: 'Tomorrow Wind', sans-serif;
  font-size: 45px;
  width: 90%;
  height: 58px;
  border-radius: 50%;
  background: var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: var(--simple-black);
  transition: opacity 0.5s linear;
}

.contact-intro__contact:last-of-type {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-size: 15px;
  font-weight: 700;
  color: var( --simple-white);
  background: var(--main-red);
}

@media screen and (min-width: 768px) {
  .contact-intro__text {
    padding: 52px 52px 14px;
    font-size: 36px;
  }

  .contact-intro__contact {
    height: 131px;
    font-size: 95px;
  }

  .contact-intro__contact:last-of-type {
    font-size: 32px;
  }
}

@media screen and (min-width: 1280px) {
  .contact-intro {
    order: 1;
    width: 616px;
  }

  .contact-intro__image {
    display: block;
  }

  .contact-intro__text {
    padding: 20px 25px 65px 280px;
    font-size: 17px;
    line-height: 1.4;
  }

  .contact-intro__contact {
    font-size: 75px;
    width: 517px;
    height: 105px;
    margin-top: 63px;
  }

  .contact-intro__contact:last-of-type {
    font-size: 25px;
    margin: 0;
  }
}
</style>
