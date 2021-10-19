<template>
  <div
    class="popup__content"
    :class="{
      'active': isOpen,
    }"
  >
    <div class="popup__main popup__main_default">
      <section-title
        class="popup__title"

        small
      >
        Авторизация
      </section-title>

      <form @submit.prevent="sendUserForm()">
        <div class="popup__input-group">
          <app-input
            :type="INPUT_TYPES.LOGIN"

            placeholder="Login"
            class="popup__input"
          />
          <app-input
            :type="INPUT_TYPES.PASSWORD"

            placeholder="Password"
            class="popup__input"
          />
        </div>

        <div class="popup__input-group">
          <app-checkbox
            :is-checked="true"

            label-text="Запомнить даные для входа"
          />
        </div>

        <app-button
          class="button_gradient-border button_bg-gradient button_bg-gradient-light button_fullwidth popup__button"
        >
          Войти
        </app-button>
      </form>
    </div>
    <footer class="popup__footer">
      <div class="popup__small-text">
        Еще нет аккаунта?
      </div>

      <app-button
        @click.native="$emit('open-register-popup')"

        class="button_gradient-border button_bg-black button_fullwidth popup__button popup__register"
      >
        Зарегестрироваться
      </app-button>
    </footer>
    <app-button
      @click.native="$emit('open-recovery-popup')"

      :uppercase="false"

      class="button_fullwidth button_text-normal popup__small-text"
    >
      Забыли пароль?
    </app-button>
  </div>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import appButton from '@/components/common/appButton.vue';
import appInput from '@/components/common/input/appInput.vue';
import appCheckbox from '@/components/common/input/appCheckbox.vue';
import { mapActions } from 'vuex';

import { INPUT_TYPES } from '@/constants.js';

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      INPUT_TYPES: {...INPUT_TYPES},
    }
  },
  methods: {
    ...mapActions({
      setUserStatus: 'user/setUserStatus'
    }),
    sendUserForm(){
      this.setUserStatus(true);
      this.$emit('close-popup');
      this.$router.push('/subscribe');
    },
  },
  components: {
    appInput,
    appButton,
    appCheckbox,
    sectionTitle,
  },
}
</script>
