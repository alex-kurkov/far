<template>
  <li class="requisite">
    <p class="requisite__text">{{name}}</p>
    <p class="requisite__text requisite__text_type_value">{{value}}</p>
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
    }
  }
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
    color:#666;
    text-transform: uppercase;
  }

  .requisite__text_type_value {
    color: #000;
    text-transform: none;
  }

  /* .requisite:nth-of-type(0) {
    grid-row: 1;
    grid-column: 1;
  } */

</style>
