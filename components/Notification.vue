<template>
  <notifications group="notification" position="right bottom" :max="2">
    <template slot="body" slot-scope="{ item, close }">
      <div
        :class="`notification notification_type_${item.data.type}`"
        @click="
          () => {
            close()
            if (item.data.action) item.data.action()
          }
        "
      >
        <div class="notification__content">
          <h4 class="notification__title" v-html="item.title" />
          <p class="notification__text" v-html="item.text" />
          <div
            v-if="item.data.action"
            class="notification__btn"
            v-html="item.data.actionBtnText"
            @click="item.data.action"
          />
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  methods: {
    clean(group) {
      this.$notify({ group, clean: true })
    },
  },
}
</script>

<style scoped>
.vue-notification-group {
  position: fixed;
  display: block;
  box-sizing: border-box;
  width: 320px;
  z-index: 10000;
}
.notification {
  width: 88%;
  box-sizing: border-box;
  min-height: 128px;
  border-radius: 20px;
  padding: 20px;
  margin: 24px;
  box-shadow: 0 0 4px var(--simple-black);
  cursor: pointer;
}
.notification_type_news {
  background: var(--simple-black);
  color: var(--simple-white);
}
.notification_type_info {
  background: var(--simple-white);
  color: var(--simple-black);
}

.notification__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-content: flex-start;
  justify-items: flex-start;
}
.notification__title {
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.notification__text {
  color: var(--devil-grey);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
}
.notification__btn {
  cursor: pointer;
  display: block;
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--real-red);
  text-decoration: underline;
}
</style>
