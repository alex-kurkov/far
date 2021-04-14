<template>
  <section class="our-team">
    <OurTeamPromo :title="promoTitle" :image="promoImage" />
    <ul class="our-team__members">
      <TeamMember
        v-for="(item, index) in members"
        v-bind:key="index"
        :name="item.name"
        :info="item.info"
        :image="item.image"
      />
    </ul>
  </section>
</template>

<script>
import OurTeamPromo from '@/components/OurTeamPromo'
import Report from '@/components/Report'
import Reports from '@/pages/reports'
import TeamMember from '@/components/ourTeam/TeamMember'
import { baseUrl } from '@/utils/api'
export default {
  components: { Report, Reports, OurTeamPromo, TeamMember },
  data() {
    return {
      title: this.$t('metaTags[5].title'),
      description: this.$t('metaTags[5].description'),
      keywords: this.$t('metaTags[5].keywords'),
      image: baseUrl + this.$t('metaTags[5].image.url'),
      members: this.$t('teamMembers'),
      promoTitle: this.$t('ourTeamPromo.title'),
      promoImage: baseUrl + this.$store.state.content.ourTeamPromo.image.url,
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
          content: this.image,
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
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
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

@media screen and (min-width:1280px) {
  .our-team {
    background: linear-gradient(to right, #000 50%, #fff 50%);
  }
  .our-team__members {
    background: linear-gradient(to right, #727272 50%, #b23438 50%);
  }
}
</style>
