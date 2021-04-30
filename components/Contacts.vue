<template>
  <ul class="contacts">
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
    telLink: String
  },
}
</script>

<style scoped>
.contacts {
  list-style: none;
  margin: 0;
  padding: 46px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>