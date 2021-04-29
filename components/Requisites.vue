<template>
  <section class="requisites">
    <h3 class="requisites__title">{{ title }}</h3>
    <div class="requisites__content">
      <p class="requisites__company">
        <span class="requisites__span">Название организации: </span
        >{{ companyName }}
      </p>
      <p class="requisites__company">
        <span class="requisites__span">Сокращенно: </span>{{ shortCompanyName }}
      </p>
      <h4 class="requisites__subtitle">{{ subtitleReq }}</h4>
      <ul class="requisites__list">
        <Requisite
          v-for="(item, index) in this.values"
          v-bind:key="index"
          :name="item.name"
          :value="item.value"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import Requisite from '@/components/requisites/Requisite'
export default {
  name: 'Requisites',
  components: {
    Requisite,
  },
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
    }
  },
  computed: {
    values() {
      const requisites = []
      if (
        this.$store.state.content.requisites.requisites &&
        this.$store.state.content.requisites.requisites.length > 0
      ) {
        this.$store.state.content.requisites.requisites.forEach((requisite) => {
          requisites.push({
            name: requisite[this.$i18n.locale],
            value: requisite['value'],
          })
        })
      }
      requisites.push({
        name: '',
        value: this.$store.state.content.requisites.subtitle[5][
          this.$i18n.locale
        ],
      })
      requisites.push({
        name: this.$store.state.content.requisites.subtitle[3][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.bankDetails.name,
      })
      requisites.push({
        name: this.$store.state.content.requisites.bankDetails[
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.bankDetails.bic,
      })
      requisites.push({
        name: this.$store.state.content.requisites.subtitle[4][
          this.$i18n.locale
        ],
        value: this.$store.state.content.requisites.paymentDetails[
          this.$i18n.locale
        ],
      })
      return requisites
    },
  },
}
</script>

<style scoped>
.requisites {
  background: #b23438;
  width: 100%;
  padding: 11px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.requisites__title {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

.requisites__content {
  background: #c8c8c8;
  border-radius: 20px;
  padding: 12px;
  width: 88%;
}

.requisites__company {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #b23438;
  padding: 0;
  margin: 0 0 15px 0;
}

.requisites__span {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.1;
  color: #666;
  text-transform: none;
}

.requisites__subtitle {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 19px;
  font-style: italic;
  line-height: 1.3;
  margin: 0 0 20px 0;
  padding: 0;
}

.requisites__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 0.36fr 1fr;
  grid-template-rows: repeat(5, min-content);
  grid-auto-flow: column;
  column-gap: 13px;
  row-gap: 20px;
  align-items: flex-start;
}

@media screen and (min-width: 768px) {
  .requisites__title {
    font-size: 113px;
  }

  .requisites__span {
    font-size: 25px;
  }

  .requisites__company {
    font-size: 25px;
    margin: 0 0 36px 0;
  }

  .requisites__content {
    padding: 23px;
  }

  .requisites__subtitle {
    margin: 0 0 43px 0;
    font-size: 42px;
  }

  .requisites__list {
    row-gap: 57px;
    column-gap: 35px;
  }
}

@media screen and (min-width: 1280px) {
  .requisites {
    flex-direction: row;
    margin-top: 5px;
  }

  .requisites__title {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    font-size: 61px;
    margin-left: 101px;
  }

  .requisites__span {
    font-size: 13px;
  }

  .requisites__company {
    font-size: 13px;
    margin: 0 0 18px 0;
  }

  .requisites__content {
    padding: 12px;
    margin-right: 8px;
  }

  .requisites__subtitle {
    margin: 0 0 18px 0;
    font-size: 22px;
  }

  .requisites__list {
    row-gap: 30px;
    column-gap: 18px;
  }
}
</style>
