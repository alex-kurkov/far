<template>
  <section class="footer">
    <div class="footer__social">
      <p class="footer__social-text">{{ $t('footer.title') }}</p>
      <Social />
      <Icon name="bond" class="footer__logo" />
    </div>
    <p class="footer__disclaimer">
      {{ $t('footer.legal') }}
    </p>
    <i18n tag="p" path="footer.license" class="footer__license">
      <template v-slot:license>
        <a
          class="footer__link"
          href="https://creativecommons.org/licenses/by/3.0/"
        >
          {{ license }}
        </a>
      </template>
    </i18n>
    <p class="footer__copyright">
      {{ $t('footer.copyright') }} {{ this.$store.state.content.footer.year }}
    </p>
  </section>
</template>

<script>
import Icon from '@/components/Icon'
import Social from '~/components/Social'
export default {
  name: 'Footer',
  components: { Icon, Social },
  data() {
    return {
      license: this.$store.state.content.footer.license,
    }
  },
}
</script>

<style scoped>
.footer {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  min-height: 100px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'license social disclamer'
    'copyright copyright copyright';

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: var(--true-grey);
}

.footer__social-text {
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-weight: 400;
  font-size: 11px;
}

.footer__logo {
  width: 42px;
  height: auto;
}

.footer__license {
  color: var(--true-grey);
  grid-area: license;
  padding-top: 25px;
  text-align: center;
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-size: 11px;
}

.footer__disclaimer {
  color: var(--true-grey);
  padding-top: 20px;
  text-align: center;
  grid-area: disclamer;
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-size: 11px;
}

.footer__social {
  grid-area: social;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__copyright {
  grid-area: copyright;
  text-align: center;
  padding: 25px 0 25px 0;
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-size: 11px;
}

.footer__link {
  color: var(--true-grey);
  font-family: 'Roboto Slab', Arial, sans-serif;
  font-size: 11px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .footer {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'social'
      'disclamer'
      'license'
      'copyright';
    font-size: 30px;
  }
  .footer__logo {
    width: 105px;
    height: auto;
  }
  .footer__social-text {
    font-size: 30px;
  }
  .footer__disclaimer {
    padding-top: 60px;
    font-size: 30px;
  }
  .footer__license {
    padding-top: 60px;
    font-size: 30px;
  }

  .footer__copyright {
    padding: 70px 0 175px 0;
    font-size: 30px;
  }

  .footer__link {
    font-size: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    display: grid;
    padding: 20px 30px 10px 30px;
  }

  .footer__license {
    font-size: 17px;
    text-align: right;
  }

  .footer__disclaimer {
    font-size: 17px;
    text-align: left;
  }

  .footer__logo {
    width: 42px;
  }

  .footer__copyright {
    padding: 4px 0 25px 0;
  }
}
</style>
