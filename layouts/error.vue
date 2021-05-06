<template>
  <div class="error-block">
    <Icon name="404" class="error-icon"></Icon>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: { Icon },
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    console.log(this.error)
  },
}
</script>

<style scoped>
.error-block {
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-direction: column;
  //border:1px solid red;
  display:grid;
  place-items: center;
  height: 100vh;
}

.error-icon {
  width: 272px;
  height: 242px;
}

@media screen and (min-width: 768px) {
  .error-icon {
    width: 376px;
    height: 335px;
  }
}

@media screen and (min-width: 1280px) {
  .error-icon {
    width: 546px;
    height: 487px;
  }
}

</style>

