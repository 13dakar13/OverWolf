<template>
  <article
    class="buy-card"
    :style="{
      '--buy-card-gradient-color': gradientColor,
    }"
  >
    <h3 class="buy-card__title">
      <img
        :src="require(`~/assets/img/days_${index + 1}.png`)"
        alt="дней"
        class="buy-card__days-number"
      >

      <div class="buy-card__days">
        дней
      </div>

      <img
        :src="imgPath"
        alt="icon"
        class="buy-card__title-img"
      >
    </h3>

    <ul class="buy-card__list">
      <li
        class="buy-card__item"

        v-for="(featureItem, index) in features"
        :key="index"
      >
        {{ featureItem }}
      </li>
    </ul>

    <footer class="buy-card__footer">
      <span class="buy-card__price">
        {{ price }} ₽
      </span>

      <app-button
        class="buy-card__button button_gradient-border button_bg-gradient-dark button_bg-gradient-dark-reversed"

        @click="$emit('buy-button-click')"
      >
        Купить
      </app-button>
    </footer>
  </article>
</template>

<script>
import appButton from '@/components/common/appButton.vue'

export default {
  props: {
    price: {
      type: [Number, String],
      default: 0,
    },
    days: {
      type: [Number, String],
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
    gradientColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0)',
    },
    imgPath: {
      type: String,
    },
    features: {
      type: Array,
      default: function(){
        return [];
      },
    }
  },
  components: {
    appButton,
  }
}
</script>
