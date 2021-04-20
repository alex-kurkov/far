<template>
  <section class="requisites">
    <h3>{{title}}</h3>
    <div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Requisites',
  data() {
    return {
      title: this.$store.state.content.requisites.title[this.$i18n.locale],
      companyName: this.$store.state.content.requisites.companyName[
        this.$i18n.locale
      ],
      shortCompanyName: this.$store.state.content.requisites.shortCompanyName[
        this.$i18n.locale
      ],
      subtitleName: this.$store.state.content.requisites.subtitle[0][
        this.$i18n.locale
      ],
      subtitleShort: this.$store.state.content.requisites.subtitle[1][
        this.$i18n.locale
      ],
      subtitleReq: this.$store.state.content.requisites.subtitle[2][
        this.$i18n.locale
      ],
      subtitleBank: this.$store.state.content.requisites.subtitle[3][
        this.$i18n.locale
      ],
      subtitlePay: this.$store.state.content.requisites.subtitle[4][
        this.$i18n.locale
      ],
      tin: {
        name: this.$store.state.content.requisites.requisites[0][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[0]['value'],
      },
      iec: {
        name: this.$store.state.content.requisites.requisites[1][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[1]['value'],
      },
      psrn: {
        name: this.$store.state.content.requisites.requisites[2][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[2]['value'],
      },
      corAcc: {
        name: this.$store.state.content.requisites.requisites[3][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[3]['value'],
      },
      curAcc: {
        name: this.$store.state.content.requisites.requisites[4][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[4]['value'],
      },
      bic: {
        name: this.$store.state.content.requisites.requisites[5][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.requisites[5]['value'],
      },
      bank: this.$store.state.content.requisites.bank[this.$i18n.locale],
      paymentDetails: this.$store.state.content.requisites.paymentDetails[
        this.$i18n.locale
      ],
    }
  },
}
</script>

<style scoped>
</style>
