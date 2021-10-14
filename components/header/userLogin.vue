<template>
  <div class="user-login">
    <app-button
      @click.native="openLoginPopup()"
      class="button_border-transparent-bg user-login__button"

      v-if="!isLoggedIn"
    >
      Войти
    </app-button>

    <div
      class="user-login__logged-wrap text-color-white"

      v-if="isLoggedIn"
    >
      <nuxt-link
        to="/subscribe"
        class="user-login__logged-wrap"
      >
        <user-avatar
          :size="42"
          :font-size="21"
          user-name="Smotrimbiz"

          class="user-login__avatar"
        />

        <span class="user-login__username">
          Smotrimbiz
        </span>
      </nuxt-link>

      <button
        @click="setUserStatus(false)"
        class="button user-login__logout"
      ></button>
    </div>
  </div>
</template>

<script>
import appButton from '@/components/common/appButton.vue';
import userAvatar from '@/components/common/user-avatar.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/getUserStatus'
    }),
  },
  methods: {
    ...mapActions({
      setUserStatus: 'user/setUserStatus',
    }),
    openLoginPopup(){
      this.$emit('open-login-popup');
    }
  },
  components: {
    appButton,
    userAvatar,
  }
}
</script>
