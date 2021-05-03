<template>
  <li class="contact">
    <img class="contact__image" :src="image" />
    <p class="contact__name">{{ name }}</p>
    <p class="contact__position">{{ position }}</p>
    <a class="contact__tel" :href="telLink">{{ tel }}</a>
  </li>
</template>

<script>
export default {
  name: 'MemberContact',
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    tel: {
      type: String,
      default: '',
    },
  },
  computed: {
    telLink() {
      return 'tel:' + this.tel
    },
  },
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.contact__image {
  width: 39%;
  border-radius: 50%;
}

.contact__name {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  color: var(--main-red);
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  width: 170px;
  text-align: center;
  transform: translate(0, -73%);
  position: relative;
  z-index: 1;
  border-bottom: 2px solid #838383;
}

.contact__name::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 2px -20px 24px 35px rgba(255, 255, 255, 0.8);
  z-index: -1;
}

.contact__position {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  width: 170px;
  text-align: center;
  transform: translate(0, -180%);
  z-index: 1;
}

.contact__tel {
  transform: translate(0, -70%);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 800;
  color: #fff;
  background: var(--main-red);
  border-radius: 50%;
  z-index: 1;
  width: 143px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.contact:nth-of-type(3n + 2) .contact__tel {
  background: #7f7f7f;
}

.contact:nth-of-type(3n + 3) .contact__tel {
  background: #000;
}

@media screen and (min-width: 768px) {
  .contact {
    width: 40%;
  }

  .contact:first-of-type {
    width: 100%;
  }

  .contact__image {
    width: 257px;
  }

  .contact__name {
    font-size: 44px;
    width: 280px;
    border-bottom: 3px solid #838383;
  }

  .contact__name::before {
    box-shadow: 2px -20px 24px 85px rgba(255, 255, 255, 0.8);
  }

  .contact__position {
    font-size: 30px;
    width: 300px;
  }

  .contact__tel {
    width: 280px;
    height: 60px;
    font-size: 32px;
  }
}

@media screen and (min-width: 1280px) {
  .contact {
    width: 210px;
  }

  .contact:first-of-type {
    width: 210px;
  }

  .contact__image {
    width: 180px;
    height: 170px;
  }

  .contact__name {
    font-size: 30px;
    width: 100%;
  }

  .contact__name::before {
    box-shadow: 2px -20px 34px 45px rgba(255, 255, 255, 0.8);
  }

  .contact__position {
    font-size: 21px;
  }

  .contact__tel {
    font-size: 22px;
    width: 100%;
    height: 42px;
  }
}
</style>
