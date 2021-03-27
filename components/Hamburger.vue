<template>

  <div class="hamburger" >
    <div @click='isMenOpen =!isMenOpen'>
      <icon name='burger' class="hamburger__icon" />
    </div>

    <Navigation :isMenOpen='isMenOpen'/>

  </div>

</template>

<script>
import Navigation from '~/components/Navigation'
import Icon from '~/components/Icon';
export default {
  name: 'Hamburger',
  components: { Navigation, Icon },
  data() {
    return {
      isMenOpen: false,
      counter: 0,
    }
  },


}
</script>

<style scoped>
.hamburger {
  //position: relative;
  color: white;
  background: #ffffff;
}

.hamburger__icon{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
}

.test {
  color: red
}
</style>
