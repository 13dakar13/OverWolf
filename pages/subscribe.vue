<template>
  <section class="inner-page subscribe-page">
    <section-title
      class="inner-page__title"
    >
      Ваши подписки
    </section-title>

    <div class="container container_subscribe-page subscribe-page__container">
      <article class="inner-page__block subscribe-status">
        <main class="inner-page__block-main">
          <section-title
            class="subscribe-page__small-title"
            small
          >
            Статус подписки
          </section-title>

          <div class="subscribe-status__subscribes">
            <active-subscribe
              :logo-path="subscribe.logoPath"
              :name="subscribe.name"
              :start-date="subscribe.startDate"
              :end-date="subscribe.endDate"
              class="subscribe-status__subscribe"

              v-for="(subscribe, index) in activeSubscribes"
              :key="index"
            />
          </div>
        </main>
        <footer class="inner-page__block-footer">
          <form
            @submit.prevent="submitReferalCode()"

            class="subscribe-status__referal"
          >
            <input
              v-model="referalCode"

              type="text"
              class="subscribe-status__input"
              placeholder="Введите Ваш промокод"
            >

            <button
              type="submit"
              class="button subscribe-status__submit"
            ></button>
          </form>
        </footer>
      </article>

      <article class="inner-page__block subscribe-registration">
        <main class="inner-page__block-main">
          <section-title
            class="subscribe-page__small-title"
            small
          >
            Приобрести подписку
          </section-title>

          <div class="subscribe-registration__top-row">
            <img
              src="~/assets/img/icons/subscribe-registration-icon.png"
              alt="icon"
              class="subscribe-registration__icon"
            >

            <div class="subscribe-registration__columns">
              <div class="subscribe-registration__col">
                <span class="subscribe-registration__col-label">
                  Стоимость подписки
                </span>
                <div class="subscribe-registration__col-body">
                  <span class="subscribe-registration__old-price">
                    200 ₽
                  </span>
                  <span class="subscribe-registration__price">
                    165 ₽
                  </span>
                </div>
              </div>

              <div class="subscribe-registration__col">
                <span class="subscribe-registration__col-label">
                  Выгода
                </span>
                <div class="subscribe-registration__col-body">
                  <span class="subscribe-registration__price">
                    35 ₽
                  </span>
                </div>
              </div>
            </div>

            <div class="subscribe-registration__tip">
              Столбец "Выгода" считается исходя из подписки на 1 день.
            </div>
          </div>
        </main>
        <footer class="inner-page__block-footer subscribe-registration__footer">
          <div class="subscribe-registration__row">
            <span class="subscribe-registration__days">
              30 ДНЕЙ
            </span>

            <div class="subscribe-registration__footer-row">
              <switch-box
                :value.sync="autoProlongation"
                class="subscribe-registration__switcher"
              />

              <span class="subscribe-registration__prolongation">
                Авто-продление

                <span class="subscribe-registration__prolongation subscribe-registration__prolongation_colored">
                  20% Скидка
                </span>
              </span>
            </div>

            <app-button
              class="subscribe-registration__button button_gradient-border button_bg-gradient-light"
            >
              оплатить
            </app-button>
          </div>

          <app-checkbox
            label-text="Используя функцию авто-продления вы автоматически соглашаетесь с нашим <a href='#'>пользовательским соглашением</a>"
          />
        </footer>
      </article>

      <article class="inner-page__block inner-page__block_full subscribe-page__bottom subscribe-reset">
        <div class="subscribe-reset__icon">
          <div class="subscribe-reset__icon-spin"></div>
          <img
            src="~/assets/img/icons/unlock-icon.png"
            alt="icon"
            class="subscribe-reset__icon-img"
          >
        </div>

        <div class="subscribe-reset__countdown subscribe-countodown">
          <section-title
            class="subscribe-countodown__title"
            small
          >
            Доступность сброса
          </section-title>

          <div class="subscribe-countodown__row">
            <countdown-timer
              @countdown-finished="countdownFinish()"
              class="subscribe-countodown__timer"

              end-date="2021-12-11T12:02:00.843Z"
            />

            <button class="button subscribe-countodown__button">
              Сбросить привязку
            </button>
          </div>
        </div>

        <div class="subscribe-reset__text">
          <p>
            Наше программное обеспечение привязывается к уникальному идентификатору Вашего компьютера.
          </p>
          <p>
            В данном разделе Вы можете сбросить старую привязку на случай, если Вы захотели перенести подписку на другой ПК или заменили один из его компонентов.
          </p>
          <p>
            Помнитие, что между сбросами имеется задержка в 24 часа.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import appButton from '~/components/common/appButton.vue';
import switchBox from '~/components/common/input/switcher.vue';
import appCheckbox from '~/components/common/input/appCheckbox.vue';
import sectionTitle from '~/components/common/sectionTitle.vue';
import countdownTimer from '~/components/common/countdownTimer.vue';
import activeSubscribe from '~/components/subscribe-page/activeSubscribe.vue';

export default {
  layout: 'inner',
  // middleware: ['auth'],
  data(){
    return {
      referalCode: '',
      autoProlongation: false,
      activeSubscribes: [
        {
          name: 'Dota 2',
          logoPath: require('~/assets/img/dota-logo.svg'),
          endDate: '2021-10-16T06:55:11.843Z',
          startDate: '2021-10-03T06:55:11.843Z',
        },
        {
          name: 'Dota 2',
          logoPath: require('~/assets/img/dota-logo.svg'),
          endDate: '2021-10-18T06:55:11.843Z',
          startDate: '2021-10-10T06:55:11.843Z',
        },
      ],
    }
  },
  methods: {
    submitReferalCode(){
      console.log('referalCode', referalCode);
    },

    countdownFinish(){

    },
  },
  components: {
    appButton,
    switchBox,
    appCheckbox,
    sectionTitle,
    countdownTimer,
    activeSubscribe,
  }
}
</script>
