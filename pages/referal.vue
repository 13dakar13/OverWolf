<template>
  <section class="inner-page referal-page">
    <section-title
      class="inner-page__title"
    >
      Создать промокод
    </section-title>

    <div class="container inner-page__container inner-page__container_referal-page">
      <div class="inner-page__block referal-page__code-block">
        <main class="inner-page__block-main referal-page__code">
          <div class="referal-page__diamond">
            <img
              src="~/assets/img/diamond.png"
              alt="icon"
              class="referal-page__diamond-img"
            >
          </div>

          <div class="referal-page__input-wrap">
            <input
              type="text"
              class="referal-page__input"
              placeholder="Ваш промокод"
            >

            <div class="referal-page__input-question"></div>

            <div class="referal-page__input-popover">
              Lorem ipsum dolor sit amet, consectetur
            </div>
          </div>

        </main>

        <footer class="inner-page__block-footer">
          <app-button
            class="button_gradient-border button_bg-darker button_fullwidth referal-page__button"
          >
            Случайно
          </app-button>

          <app-button
            class="button_gradient-border button_bg-gradient-dark button_fullwidth referal-page__button"
          >
            Создать промокод
          </app-button>
        </footer>
      </div>

      <app-chart
        class="inner-page__block inner-page__block_full"
        title="Название"
      />

      <app-chart
        class="inner-page__block inner-page__block_full"
        title="Название"
      />
    </div>
  </section>
</template>

<script>
import sectionTitle from '~/components/common/sectionTitle.vue';
import appButton from '~/components/common/appButton.vue';
import appChart from '~/components/common/chart-wrap.vue';

export default {
  layout: 'inner',
  // middleware: ['auth'],
  components: {
    appChart,
    appButton,
    sectionTitle,
  },
}
</script>
