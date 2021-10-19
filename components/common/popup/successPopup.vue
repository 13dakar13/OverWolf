<template>
  <div
    class="popup__content"
    :class="{
      'active': isOpen,
    }"
  >
    <div class="popup__main popup__main_register popup__main_full">
      <section-title
        class="popup__title"

        small
      >
        Проверьте почту
      </section-title>

      <p class="popup__text">
        Информация для восстановления пароля отправлена на указанную электронную почту
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
