<template>
  <div
    class="popup__content"
    :class="{
      'active': isOpen,
    }"
  >
    <div class="popup__main popup__main_register popup__main_default">
      <section-title
        class="popup__title"

        small
      >
        Восстановление
      </section-title>

      <form @submit.prevent="sendUserForm()">
        <div class="popup__input-group">
          <app-input
            :type="INPUT_TYPES.EMAIL"

            placeholder="E-mail"
            class="popup__input"
          />
        </div>
      </form>
    </div>
    <footer class="popup__footer">
      <app-button
        class="button_gradient-border button_bg-gradient button_bg-gradient-light button_fullwidth popup__button"
      >
        Восстановить пароль
      </app-button>
    </footer>
  </div>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import appButton from '@/components/common/appButton.vue';
import appInput from '@/components/common/input/appInput.vue';
import appCheckbox from '@/components/common/input/appCheckbox.vue';

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
    sendUserForm(){
      console.log('Send login form');
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
