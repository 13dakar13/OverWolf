<template>
  <div
    class="popup__content"
    :class="{
      'active': isOpen,
    }"
  >
    <div class="popup__main popup__main_register popup__main_full popup__main_error">
      <section-title
        class="popup__title section-title_error"

        small
      >
        Ошибочка
      </section-title>

      <p class="popup__text">
        Упс... Аккаунта с данной электронной почтой не существует
      </p>
    </div>
  </div>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    sectionTitle,
  }
}
</script>
