<template>
  <section class="our-team">
    <OurTeamPromo
      :title="promoTitle"
      :image="promoImage"
      :backgroundSvg="backgroundSvg"
    />
    <ul class="our-team__members">
      <TeamMember
        v-for="item in members"
        v-bind:key="item.name"
        :name="item.name"
        :info="item.info"
        :image="item.image"
      />
    </ul>
    <SupportButton />
    <ToggleLanguage />
  </section>
</template>

<script>
import OurTeamPromo from '@/components/OurTeamPromo'
import Report from '@/components/Report'
import Reports from '@/pages/reports'
import TeamMember from '@/components/ourTeam/TeamMember'
import SupportButton from '@/components/SupportButton'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import { baseUrl } from '@/utils/api'
export default {
  components: {
    Report,
    Reports,
    OurTeamPromo,
    TeamMember,
    SupportButton,
    ToggleLanguage,
  },
  data() {
    return {
      title: this.$t('pages.team.metaTagsLocale.metaTitle'),
      description: this.$t('pages.team.metaTagsLocale.metaDescription'),
      keywords: this.$t('pages.team.metaTagsLocale.metaKeyWords'),
      imageMeta: this.$store.state.content.pages.mission.metaTags
        ? this.$store.state.content.pages.mission.metaTags['metaImage']
          ? baseUrl +
            this.$store.state.content.pages.mission.metaTags['metaImage'].url
          : null
        : null,
      members: this.$t('teamMembers'),
      promoTitle: this.$t('pages.team.mainTitleLocale'),
      promoImage:
        baseUrl + this.$store.state.content.pages.team.images[1].image[0].url,
      backgroundSvg:
        baseUrl + this.$store.state.content.pages.team.images[0].image[0].url,
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
}
</script>

<style scoped>
.our-team {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.our-team__members {
  list-style: none;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1280px) {
  .our-team {
    background: linear-gradient(to right, var(--simple-black) 50%, #fff 50%);
  }
  .our-team__members {
    background: linear-gradient(to right, #727272 50%, var(--main-red) 50%);
  }
}
</style>
