<template>
  <section class="inner-page settings-page">
    <section-title
      class="inner-page__title"
    >
      Настройка профиля
    </section-title>

    <div class="container inner-page__container inner-page__container_settings settings">
      <div class="inner-page__block settings__user">
        <main class="inner-page__block-main settings__user-top">
          <div class="settings__avatar-wrap">
            <user-avatar
              :size="100"
              :font-size="64"
              user-name="Smotrimbiz"
            />
          </div>

          <div class="settings__username">
            Smotrimbiz
          </div>

          <div class="settings__status">
            Default users
          </div>
        </main>

        <footer class="inner-page__block-footer inner-page__block-footer_dark">
          <app-button
            class="button_gradient-border button_bg-darker settings__button button_fullwidth"
          >
            Загрузить аватар
          </app-button>
        </footer>
      </div>

      <div class="inner-page__block inner-page__block_full settings__main">
        <div class="settings__block">
          <section-title
            class="settings__small-title"
            small
          >
            Изменение пароля
          </section-title>

          <div class="settings__input-wrap">
            <app-input
              :type="INPUT_TYPES.PASSWORD"

              placeholder="Старый пароль"
              class="settings__input"
            />
          </div>

          <div class="settings__input-wrap">
            <app-input
              :type="INPUT_TYPES.PASSWORD"

              placeholder="Новый пароль"
              class="settings__input"
            />
          </div>

          <div class="settings__input-wrap settings__input-wrap_mb">
            <app-input
              :type="INPUT_TYPES.PASSWORD"

              placeholder="Повторите пароль"
              class="settings__input"
            />
          </div>

          <div class="settings__button-wrap">
            <app-button
              class="button_gradient-border button_bg-mid-darker settings__button"
            >
              Сменить пароль
            </app-button>
          </div>
        </div>


        <div class="settings__block">
          <section-title
            class="settings__small-title"
            small
          >
            Изменить e-mail
          </section-title>

          <div class="settings__input-wrap">
            <app-input
              :type="INPUT_TYPES.EMAIL"

              placeholder="E-mail"
              class="settings__input"
            />
          </div>

          <div class="settings__input-wrap settings__input-wrap_mb">
            <app-input
              :type="INPUT_TYPES.PASSWORD"

              placeholder="Пароль"
              class="settings__input"
            />
          </div>

          <div class="settings__button-wrap">
            <app-button
              class="button_gradient-border button_bg-gradient-light button_fullwidth settings__button"
            >
              Изменить E-mail
            </app-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '~/components/common/sectionTitle.vue';
import appButton from '~/components/common/appButton.vue';
import appInput from '@/components/common/input/appInput.vue';
import userAvatar from '@/components/common/user-avatar.vue';

import { INPUT_TYPES } from '~/constants.js';

export default {
  layout: 'inner',
  // middleware: ['auth'],
  data(){
    return {
      INPUT_TYPES: { ...INPUT_TYPES },
    }
  },
  components: {
    appInput,
    appButton,
    userAvatar,
    sectionTitle,
  }
}
</script>
