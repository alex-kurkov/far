<template>
  <section class="page-404">
    <div class="container-404">
      <Icon name="404" class="icon-404"></Icon>
    </div>
    <SupportButton/>
  </section>
</template>

<script>
import Icon from '@/components/Icon'
import SupportButton from '@/components/SupportButton'
export default {
  name: 'NotFoundPage',
  components: { SupportButton, Icon },
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.page-404 {
  display: grid;
  place-items: center;
}

.container-404 {
  width: 100%;
  background: white;
  height: 100vh;
  display: grid;
  place-items: center;
}

.icon-404 {
  width: 272px;
  height: 242px;
}

@media screen and (min-width: 768px) {
  .icon-404 {
    width: 376px;
    height: 335px;
  }
}

@media screen and (min-width: 1280px) {
  .page-404 {
    width: 100%;
    background: white;
    background: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--light-grey) 50%
    );
  }

  .container-404 {
    max-width: 1280px;
  }

  .icon-404 {
    width: 546px;
    height: 487px;
  }
}
</style>
