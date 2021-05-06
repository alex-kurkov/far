<template>
  <li class="requisite">
    <p class="requisite__text">{{ name }}</p>
    <p class="requisite__text requisite__text_type_value">{{ value }}</p>
  </li>
</template>

<script>
export default {
  name: 'Requisite',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.requisite {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.requisite__text {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
  color: #666;
  text-transform: uppercase;
}

.requisite__text_type_value {
  color: var(--simple-black);
  text-transform: none;
}

.requisite__text:nth-of-type(1) {
  margin-bottom: 5px;
}

@media screen and (min-width: 768px) {
  .requisite__text {
    font-size: 22px;
  }

  .requisite__text:nth-of-type(1) {
    margin-bottom: 13px;
  }
}

@media screen and (min-width: 1280px) {
  .requisite__text {
    font-size: 12px;
  }

  .requisite__text:nth-of-type(1) {
    margin-bottom: 3px;
  }
}
</style>
