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
          return 'tel:' + this.tel;
      }
  }
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
  color: #b23438;
  font-weight: 800;
  font-size: 22px;
  line-height: 1;
  width: 45%;
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
  width: 50%;
  text-align: center;
  transform: translate(0, -180%);
  z-index: 1;
}

.contact__tel {
  transform: translate(0, -70%);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 800;
  color: #fff;
  background: #b23438;
  border-radius: 50%;
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
</style>