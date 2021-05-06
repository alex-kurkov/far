<template>
  <section class="contacts">
    <h1 class="contacts__title">{{ mainTitle }}</h1>
    <div class="contacts__container">
      <ContactForm
        :themeLabel="formThemeLabel"
        :letterPlaceholder="letterPlaceholder"
        :nameLabel="formNameLabel"
        :emailLabel="formEmailLabel"
        :btnText="buttonText"
        :btnMoreText="buttonMoreText"
        :sentText="sentText"
      />
      <ContactIntro
        :text="introText"
        :tel="mainTel"
        :email="mainEmail"
        :telLink="telLink"
        :emailLink="emailLink"
        :image="image"
      />
    </div>

    <div class="contacts__container">
      <Contacts :members="members" />
      <article class="contacts__article">{{ article }}</article>
    </div>
    <SupportButton />
    <ToggleLanguage />
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import SupportButton from '@/components/SupportButton'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import ContactForm from '../components/ContactForm'
import ContactIntro from '../components/ContactIntro'

export default {
  components: {
    SupportButton,
    ToggleLanguage,
    ContactForm,
    ContactIntro,
  },
  data() {
    return {
      title: this.$t('pages.contacts.metaTagsLocale.metaTitle'),
      description: this.$t('pages.contacts.metaTagsLocale.metaDescription'),
      keywords: this.$t('pages.contacts.metaTagsLocale.metaKeyWords'),
      imageMeta: this.$store.state.content.pages.contacts.metaTags
        ? this.$store.state.content.pages.contacts.metaTags['metaImage']
          ? baseUrl +
            this.$store.state.content.pages.contacts.metaTags['metaImage'].url
          : null
        : null,
      mainTitle: this.$t('pages.contacts.mainTitleLocale'),
      formThemeLabel: this.$t('pages.contacts.subTitlesLocale[0]'),
      letterPlaceholder: this.$t('pages.contacts.subTitlesLocale[1]'),
      formNameLabel: this.$t('pages.contacts.subTitlesLocale[2]'),
      formEmailLabel: this.$t('pages.contacts.subTitlesLocale[3]'),
      buttonText: this.$t('pages.contacts.subTitlesLocale[4]'),
      buttonMoreText: this.$t('pages.contacts.subTitlesLocale[7]'),
      sentText: this.$t('pages.contacts.subTitlesLocale[8]'),
      mainTel: this.$t('pages.contacts.subTitlesLocale[5]'),
      mainEmail: this.$t('pages.contacts.subTitlesLocale[6]'),
      telLink: 'tel:' + this.$t('pages.contacts.subTitlesLocale[5]'),
      emailLink: 'mailto:' + this.$t('pages.contacts.subTitlesLocale[6]'),
      introText: this.$t('pages.contacts.pageTextsLocale[0]'),
      article: this.$t('pages.contacts.pageTextsLocale[1]'),
      image:
        baseUrl +
        this.$store.state.content.pages.contacts.images[0].image[0].url,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageMeta,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageMeta,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.imageMeta,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
  computed: {
    members() {
      const obj = JSON.parse(JSON.stringify(this.$t('teamMembers')))
      return Array.from(Object.values(obj)).filter(
        (member) => member.isOnContactsPage
      )
    },
  },
}
</script>

<style scoped>
.contacts {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contacts__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.contacts__title {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 101px;
  line-height: 1;
  letter-spacing: -4px;
  word-break: break-all;
  padding: 12px 45px 20px 12px;
  margin: 0;
  color: var(--simple-white);
  width: 100%;
  background: var(--light-grey);
  text-decoration: underline var(--main-red) 11px;
}

.contacts__article {
  padding: 13px 18px 25px;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  margin: auto;
  background: var(--simple-white);
}

@media screen and (min-width: 768px) {
  .contacts__title {
    font-size: 219px;
    padding: 48px 162px 54px 52px;
    text-decoration: underline var(--main-red) 40px;
  }

  .contacts__article {
    font-size: 33px;
    padding: 0 52px 134px;
  }
}

@media screen and (min-width: 1280px) {
  .contacts {
    background: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--simple-white) 50%
    );
  }
  .contacts__container {
    background: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--simple-white) 50%
    );
    width: 100%;
  }

  .contacts__container:nth-of-type(2) {
    background: linear-gradient(
      to right,
      var(--light-grey) 50%,
      var(--main-red) 50%
    );
    flex-direction: column;
  }
  .contacts__title {
    width: 1280px;
    text-align: center;
    background: linear-gradient(
      to right,
      var(--simple-black) 616px,
      var(--light-grey) 616px,
      var(--light-grey) 1196px,
      var(--simple-white) 1196px
    );
  }
  .contacts__article {
    order: 4;
    width: 1111px;
  }
}
</style>
