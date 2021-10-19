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
          <div
            class="referal-page__diamond"
            :class="{
              'referal-page__diamond_referal-created': isReferalCreated
            }"
          >
            <img
              src="~/assets/img/diamond.png"
              alt="icon"
              class="referal-page__diamond-img"
            >
          </div>

          <form
            @submit.prevent="isReferalCreated = true"

            class="referal-page__input-wrap"
            :class="{
              'referal-page__input-wrap_referal-created': isReferalCreated
            }"
          >
            <input
              type="text"
              class="referal-page__input"
              placeholder="Ваш промокод"
              v-model="referalCode"
              v-if="!isReferalCreated"
            >

            <span
              class="referal-page__code-string"
              v-else
            >
              {{ referalCode }}
            </span>

            <div class="referal-page__input-question"></div>

            <div class="referal-page__input-popover">
              Lorem ipsum dolor sit amet, consectetur
            </div>
          </form>

        </main>

        <footer
          class="inner-page__block-footer inner-page__block-footer_dark"

          v-if="!isReferalCreated"
        >
          <app-button
            @click.native="createRandomCode()"

            class="button_gradient-border button_bg-darker button_fullwidth referal-page__button"
          >
            Случайно
          </app-button>

          <app-button
            @click.native="isReferalCreated = !!referalCode"
            class="button_gradient-border button_bg-gradient-dark button_fullwidth referal-page__button"
          >
            Создать промокод
          </app-button>
        </footer>

        <footer
          class="inner-page__block-footer inner-page__block-footer_dark"

          v-else
        >
          <app-button
            @click.native="copyText(referalCode)"
            class="button_gradient-border button_bg-darker button_fullwidth referal-page__button"
          >
            Копировать
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
  data(){
    return {
      isReferalCreated: false,
      referalCode: '',
    }
  },
  methods: {
    copyText(text){
      const container = document.createElement('div')
      container.innerHTML = text

      container.style.position = 'fixed'
      container.style.pointerEvents = 'none'
      container.style.opacity = 0

      document.body.appendChild(container)

      window.getSelection().removeAllRanges()

      const range = document.createRange()
      range.selectNode(container)
      window.getSelection().addRange(range)

      document.execCommand('copy')

      document.body.removeChild(container)
    },
    createRandomCode(length = 6){
      const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      for (let i = 0; i < length; i++){
        this.referalCode += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
    }
  },
  components: {
    appChart,
    appButton,
    sectionTitle,
  },
}
</script>
