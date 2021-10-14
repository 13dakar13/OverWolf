<template>
  <div
    class="mobile-menu"
    :class="{
      'mobile-menu_active': isOpen,
    }"
  >

    <nav class="mobile-menu__nav nav">
      <ul
        class="nav__list nav__list_column"

        v-if="!isInnerHeader"
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
        class="nav__list nav__list_column"

        v-if="isInnerHeader"
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
      @open-login-popup="$emit('open-login-popup'), $emit('close-menu')"

      class="mobile-menu__login"
    />
  </div>
</template>

<script>
import userLogin from '~/components/header/userLogin.vue';
import { mapGetters } from 'vuex';

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isInnerHeader: {
      type: Boolean,
      default: false,
    },
    navLinks: {
      type: Array,
      default: function(){
        return [];
      }
    }
  },
  methods: {
    scrollTo(targetSelector){
      const targetNode = document.querySelector(targetSelector);

      const offset = -100;

      try{
        this.$emit('close-menu')

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
    userLogin,
  }
}
</script>
