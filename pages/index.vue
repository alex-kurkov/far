<template>
  <div class="container">
    <About />
    <Promo />
    <Intro />
    <Mission />
    <Achievement />
    <Help />
    <Support />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
