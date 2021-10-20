<template>
  <div class="popup__content active">
    <div class="popup__main popup__main_register popup__main_full popup__main_default">
      <section-title
        class="popup__title"

        small
      >
        ВАЖНО
      </section-title>

      <span class="popup__subtitle text-color-white">
        Вы хотите видеть анимации на сайте?
      </span>

      <p class="popup__text">
        Для пользователей с ограниченным и(или) медленным трафиком мы рекомендуем "Нет"
      </p>

      <div class="popup__buttons-row">
        <app-button
          @click.native="$emit('animations-state-change', true)"

          class="popup__animations-button popup__animations-button_confirm"
        >
          Да
        </app-button>
        <app-button
          @click.native="$emit('animations-state-change', false)"

          class="popup__animations-button popup__animations-button_cancel"
        >
          Нет
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import appButton from '@/components/common/appButton.vue';

export default {
  components: {
    appButton,
    sectionTitle,
  }
}
</script>
