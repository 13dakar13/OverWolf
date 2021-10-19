<template>
  <section class="inner-page download-page">
    <section-title
      class="inner-page__title"
    >
      Начало работы с продуктом
    </section-title>

    <div class="container inner-page__container inner-page__container_two-cols">
      <article class="inner-page__block download-step">
        <main class="inner-page__block-main download-step__main">
          <section-title
            class="download-step__title"
            small
          >
            Загрузка и установка
          </section-title>

          <div class="download-step__picture">
            <img
              alt="step-img"
              class="download-step__img"
            >

            <span class="download-step__step-number">
              Шаг 1
            </span>
          </div>

          <ol class="download-step__list download-step__list_mb">
            <li class="download-step__list-item">
              <p class="download-step__text">
                Скачайте и запустите наш установщик.
              </p>
            </li>
            <li class="download-step__list-item">
              <p class="download-step__text">
                Следуйте указаниям установщика, он автоматически установит нужное ПО, выберет папку, и создаст иконку чита на рабочем столе.
              </p>
            </li>
          </ol>
        </main>

        <footer class="inner-page__block-footer download-step__footer">
          <app-button
            class="button_gradient-border button_bg-gradient button_bg-gradient-light download-step__button"
          >
            СКАЧАТь УСТАНОВЩИК
          </app-button>
        </footer>
      </article>

      <article class="inner-page__block download-step inner-page__block-main">
        <section-title
          class="download-step__title"
          small
        >
          Запуск и выбор продукта
        </section-title>

        <div class="download-step__picture">
          <img
            alt="step-img"
            class="download-step__img"
          >

          <span class="download-step__step-number">
            Шаг 2
          </span>
        </div>

        <ol class="download-step__list">
          <li class="download-step__list-item">
            <p class="download-step__text">
              Найдите на рабочем столе иконку приложения и запустите его.
            </p>
          </li>
          <li class="download-step__list-item">
            <p class="download-step__text">
              Авторизуйтесь под своими данными (логин и пароль аналогичны логину и паролю от сайта, или от uc.zone).
            </p>
          </li>
          <li class="download-step__list-item">
            <p class="download-step__text">
              После авторизации выберите в лоадере Umbrella cheat [DotA2] [Public Build] и нажмите Launch DotA 2 (если такого пункта нет, то у вас скорее всего кончилась подписка).
            </p>
          </li>
          <li class="download-step__list-item">
            <p class="download-step__text">
              Лаунчер сам запустит доту и появится меню чита.
            </p>
          </li>
        </ol>
      </article>
    </div>
  </section>
</template>

<script>
import appButton from '~/components/common/appButton.vue';
import sectionTitle from '~/components/common/sectionTitle.vue';

export default {
  layout: 'inner',
  // middleware: ['auth'],
  components: {
    appButton,
    sectionTitle,
  }
}
</script>
