<template>
  <div class="layout">
    <app-header
      @open-login-popup="openPopup(popups.login)"

      :is-reduced="isReducedControls"

      class="layout__header"
    />

    <div id="main" class="main">
      <nuxt/>
    </div>

    <app-footer

      :is-reduced="isReducedControls"
      class="layout__footer"
    />

    <popup-component
      @close-popup="closePopup(popups.login)"

      :is-open="popups.login.isOpen"
    >
      <login-popup-component
        @open-register-popup="openPopup(popups.register)"
        @open-recovery-popup="openPopup(popups.recovery)"

      />
    </popup-component>

    <popup-component
      @close-popup="closePopup(popups.register)"

      :is-open="popups.register.isOpen"
    >
      <register-popup-component

      />
    </popup-component>

    <popup-component
      @close-popup="closePopup(popups.recovery)"

      :is-open="popups.recovery.isOpen"
    >
      <recovery-popup-component

      />
    </popup-component>
  </div>
</template>

<script>
import appHeader from '~/components/common/appHeader.vue';
import appFooter from '~/components/common/appFooter.vue';
import popupComponent from '@/components/common/popup/popup.vue';
import loginPopupComponent from '@/components/common/popup/loginPopup.vue';
import registerPopupComponent from '@/components/common/popup/registerPopup.vue';
import recoveryPopupComponent from '@/components/common/popup/recoveryPopup.vue';

export default {
  data(){
    return {
      isReducedControls: false,
      popups: {
        login: {
          isOpen: false,
        },
        register: {
          isOpen: false,
        },
        recovery: {
          isOpen: false,
        },
      },
    }
  },
  mounted(){
    if(process?.browser){
      window.addEventListener('scroll', this.scrollHandler);
      this.scrollHandler();
    }
  },
  beforeDestroy(){
    if(process?.browser){
      window.removeEventListener('scroll', this.scrollHandler);
    }
  },
  methods: {
    scrollHandler(){
      const scroll = window.scrollY;
      const breakpoint = 30;

      this.isReducedControls = scroll >= breakpoint;
    },
    openPopup(popup){
      Object.values(this.popups)
        .forEach(popup => popup.isOpen = false);

      popup.isOpen = true;
    },
    closePopup(popup){
      popup.isOpen = false;
    },
  },
  components: {
    appHeader,
    appFooter,
    popupComponent,
    loginPopupComponent,
    registerPopupComponent,
    recoveryPopupComponent,
  }
}
</script>
