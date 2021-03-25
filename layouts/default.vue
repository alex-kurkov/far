<template>
  <div>
    <Header />
    <Hamburger />
    <Nuxt />
    <Footer />
    <notifications classes="notifications-wrap" group="foo" />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.notifications-wrap {
  padding: 15px;
  margin: 15px;
  background: #228c22;
  color: white;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transition: .3s;
}

</style>
