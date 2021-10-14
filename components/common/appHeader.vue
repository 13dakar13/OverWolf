<template>
  <header
    class="header"
    :class="{
      'header_reduced': isReduced,
    }"
  >
    <div class="container header__wrap">
      <nuxt-link to="/" class="logo header__logo">
        <img
          src="~/assets/img/logo.svg"
          alt="Logo"
          class="logo__img"
        >
      </nuxt-link>

      <nav class="header__nav nav">
        <ul
          class="nav__list"

          v-if="!innerHeader"
        >
          <li
            class="nav__item"

            v-for="(link, index) in linksForUnloggedUsers"
            :key="index"
          >
            <a
              @click.prevent="scrollTo(link.to)"

              :href="link.to"
              class="nav__link"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>

        <ul
          class="nav__list"

          v-if="innerHeader"
        >
          <li
            class="nav__item"

            v-for="(link, index) in linksForLoggedUsers"
            :key="index"
          >
            <nuxt-link
              :to="link.to"
              class="nav__link"
            >
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <user-login
        @open-login-popup="openLoginPopup()"

        class="header__login"
      />

      <burger
        @click="isMenuOpen = !isMenuOpen"
        :is-active="isMenuOpen"

        class="header__burger"
      />
    </div>

    <mobile-menu
      @close-menu="isMenuOpen = false"
      @open-login-popup="openLoginPopup()"

      :is-open="isMenuOpen"
      :nav-links="navLinks"
      :is-inner-header="innerHeader"
    />
  </header>
</template>

<script>
import userLogin from '~/components/header/userLogin.vue';
import burger from '~/components/common/burger.vue';
import mobileMenu from '~/components/common/mobileMenu.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'app-header',
  props: {
    innerHeader: {
      type: Boolean,
      default: false,
    },
    isReduced: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      isMenuOpen: false,
      navLinks: [
        {
          text: 'Начало',
          to: '#main',
          isForLoggedUser: false,
        },
        {
          text: 'Улучшай',
          to: '#upgrade',
          isForLoggedUser: false,
        },
        {
          text: 'Кастомизируй',
          to: '#customize',
          isForLoggedUser: false,
        },
        {
          text: 'Наслаждайся',
          to: '#enjoy',
          isForLoggedUser: false,
        },
        {
          text: 'Покупай',
          to: '#buy',
          isForLoggedUser: false,
        },
        {
          text: 'Начало',
          to: '/',
          isForLoggedUser: true,
        },
        {
          text: 'Подписка',
          to: '/subscribe',
          isForLoggedUser: true,
        },
        {
          text: 'Скачать',
          to: '/download',
          isForLoggedUser: true,
        },
        {
          text: 'FAQ',
          to: '/faq',
          isForLoggedUser: true,
        },
        {
          text: 'Реф.Система',
          to: '/referal',
          isForLoggedUser: true,
        },
        {
          text: 'Настройки',
          to: '/settings',
          isForLoggedUser: true,
        },
      ],
    }
  },
  methods: {
    openLoginPopup(){
      this.$emit('open-login-popup');
    },

    scrollTo(targetSelector){
      const targetNode = document.querySelector(targetSelector);

      const offset = -100;

      try{
        window.scrollTo({
          top: window.pageYOffset + targetNode.getBoundingClientRect().top + offset,
          behavior: 'smooth'
        });
      }
      catch(e){
        console.log(`Элемент ${targetSelector} не найден!`);
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/getUserStatus',
    }),
    linksForLoggedUsers(){
      return this.navLinks.filter(link => link.isForLoggedUser);
    },
    linksForUnloggedUsers(){
      return this.navLinks.filter(link => !link.isForLoggedUser);
    },
  },
  components: {
    burger,
    userLogin,
    mobileMenu,
  }
}
</script>
