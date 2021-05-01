<template>
  <ul class="all-contacts">
    <MemberContact
      v-for="item in members"
      v-bind:key="item.name"
      :name="item.name"
      :tel="item.tel"
      :image="item.image"
      :position="item.position"
    />
  </ul>
</template>

<script>
import MemberContact from './contacts/MemberContact'
export default {
  name: 'Contacts',
  components: {
    MemberContact,
  },
  props: {
    members: Array,
    telLink: String,
  },
}
</script>

<style scoped>
.all-contacts {
  list-style: none;
  margin: 0;
  padding: 46px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .all-contacts {
    padding: 35px 52px 66px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1280px) {
  .all-contacts {
    order: 3;
    width: 1111px;
    margin: auto;
    padding: 35px 170px 25px;
  }
}
</style>
