<template>
  <section id="buy" class="buy">
    <section-title
      class="buy__title"
    >
      Покупай
    </section-title>

    <div class="container buy__row-container">
      <div class="buy__row">
        <buy-card

          class="buy__card"
          :index="index"
          :days="tariffItem.days"
          :features="tariffItem.features"
          :price="tariffItem.price"
          :gradient-color="tariffItem.gradientColor"
          :img-path="tariffItem.imgPath"

          v-for="(tariffItem, index) in tariffs"
          :key="index"
        />
      </div>
    </div>

    <div class="container buy__footer-container">
      <footer class="buy__footer buy-footer">
        <div class="buy-footer__content">
          <h3 class="buy-footer__title">
            Попробуй бесплатно
          </h3>

          <p class="buy-footer__text">
            Индикатор видимости героя для команды соперника, отображение информации о вражеских героях при использовании скрытых способностей и прочие возможности.
          </p>

          <img
            src="~/assets/img/icons/buy-icon.png"
            alt="icon"
            class="buy-footer__icon"
          >
        </div>

        <img
          class="buy-footer__chevrons"
          src="~/assets/img/icons/chevrons-right.png"
          alt="icon"
        >

        <app-button class="button_border-transparent-bg buy-footer__button text-color-white">
          <img src="~/assets/img/icons/crown.svg" alt="icon">
          Получить
        </app-button>
      </footer>
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import buyCard from '@/components/index-page/buyCard.vue';
import appButton from '~/components/common/appButton.vue';

export default {
  data(){
    return {
      tariffs: [
        {
          days: 7,
          features: [
            'Доступ ко всему функционалу',
            'Круглосуточная поддержка',
            'Более 500 функций',
            'Полная эмуляция действий игрока на реплее',
          ],
          imgPath: require('~/assets/img/icons/buy-card-bg-1.svg'),
          gradientColor: 'rgba(35, 43, 85, 0.7)',
          price: 200,
        },
        {
          days: 30,
          features: [
            'Доступ ко всему функционалу',
            'Круглосуточная поддержка',
            'Более 500 функций',
            'Полная эмуляция действий игрока на реплее',
          ],
          imgPath: require('~/assets/img/icons/buy-card-bg-2.svg'),
          gradientColor: 'rgba(85, 35, 83, 0.7)',
          price: 550,
        },
        {
          days: 14,
          features: [
            'Доступ ко всему функционалу',
            'Круглосуточная поддержка',
            'Более 500 функций',
            'Полная эмуляция действий игрока на реплее',
          ],
          imgPath: require('~/assets/img/icons/buy-card-bg-3.svg'),
          gradientColor: 'rgba(53, 31, 69, 0.7)',
          price: 390,
        },
      ]
    }
  },
  components: {
    sectionTitle,
    appButton,
    buyCard,
  }
}
</script>
