<template>
  <div class="body">
    <Hamburger />
    <Header />
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

.body {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  position: relative;
  font-family: Vollkorn, Arial, sans-serif;
}

.notifications-wrap {
  padding: 15px;
  margin: 15px;
  background: #228c22;
  color: white;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transition: 0.3s;
}
</style>
