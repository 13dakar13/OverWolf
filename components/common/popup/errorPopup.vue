<template>
  <div class="popup__content">
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
  components: {
    sectionTitle,
  }
}
</script>
