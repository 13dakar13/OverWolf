<template>
  <section class="hero">
    <div class="container container_hero hero__wrap">
      <div class="hero__body">
        <h1
          class="hero__title text-uppercase text-color-white"
          data-glitch-text="OverWolf2"
          ref="title"
        >
          OverWolf2
        </h1>

        <p class="hero__description text-color-white">
          Частичный мапхак с отображением анимаций вражеских героев. Индикатор видимости героя для команды соперника, отображение информации о вражеских героях при использовании скрытых способностей и прочие возможности.
        </p>

        <app-button class="button_border-transparent-bg hero__button text-color-white">
          <img src="~/assets/img/icons/crown.svg" alt="icon">
          Опробовать
        </app-button>
      </div>
    </div>
  </section>
</template>

<script>
import appButton from '~/components/common/appButton.vue';
export default {
  mounted(){
    const title = this.$refs.title;

    setInterval(() => {
      title.classList.add('hero__title_animated');

      setTimeout(() => title.classList.remove('hero__title_animated'), 1000)
    }, 5000)
  },
  components: {
    appButton,
  }
}
</script>
