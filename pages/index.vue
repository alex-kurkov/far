<template>
  <div class="container">
    <Hamburger/>
    <Header/>
    <About/>
    <Promo/>
    <Intro/>
    <Mission/>
    <Achievements/>
    <Help/>
    <Support/>
    <Footer/>
  </div>
</template>

<script>
import About from '~/components/About'
import Achievements from '~/components/Achievements'
import Footer from '~/components/Footer'
import Hamburger from '~/components/Hamburger'
import Help from '~/components/Help'
import Intro from '~/components/Intro'
import Mission from '~/components/Mission'
import Promo from '~/components/Promo'
import Support from '~/components/Support'
import Header from '../components/Header'
export default {
  components: { Hamburger, Footer, Support, Help, Achievements, Mission, Intro, Promo, About, Header }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  position: relative;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
