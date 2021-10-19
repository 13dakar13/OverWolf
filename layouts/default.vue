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
      :is-open="isAnyPopupOpen"
      @close-popup="closeAllPopups()"
    >
      <login-popup-component
        @open-register-popup="openPopup(popups.register)"
        @open-recovery-popup="openPopup(popups.recovery)"

        :is-open="popups.login.isOpen"
      />

      <register-popup-component
        :is-referal-open="true"

        :is-open="popups.register.isOpen"
      />

      <recovery-popup-component
        :is-open="popups.recovery.isOpen"

      />

      <error-popup-component
        :is-open="popups.error.isOpen"

      />

      <success-popup-component
        :is-open="popups.success.isOpen"

      />
    </popup-component>

    <popup-component
      :is-open="animationsConfirmPopup"
    >
      <animation-confirm-popup
        @animations-state-change="changeAnimationsState($event)"
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
import errorPopupComponent from '@/components/common/popup/errorPopup.vue';
import successPopupComponent from '@/components/common/popup/successPopup.vue';
import animationConfirmPopup from '@/components/common/popup/animationConfirmPopup.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  data(){
    return {
      isReducedControls: false,
      animationsConfirmPopup: false,
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
        success: {
          isOpen: false,
        },
        error: {
          isOpen: false,
        },
      },
    }
  },
  mounted(){
    if(process?.browser){
      this.animationsConfirmPopup = !!(this.isAnimationsEnabled === undefined | this.isAnimationsEnabled === null);

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
    ...mapActions({
      setAnimationsStatus: 'user/setAnimationsStatus'
    }),
    changeAnimationsState(state){
      this.animationsConfirmPopup = false;

      this.setAnimationsStatus(state);
    },
    scrollHandler(){
      const scroll = window.scrollY;
      const breakpoint = 30;

      this.isReducedControls = scroll >= breakpoint;
    },
    openPopup(popup){
      this.closeAllPopups();

      popup.isOpen = true;
    },
    closePopup(popup){
      popup.isOpen = false;
    },
    closeAllPopups(){
      Object.values(this.popups)
        .forEach(popup => this.closePopup(popup));
    }
  },
  computed: {
    ...mapGetters({
      isAnimationsEnabled: 'user/getAnimationsStatus'
    }),
    isAnyPopupOpen(){
      return Object.values(this.popups)
        .some(popup => popup.isOpen);
    }
  },
  components: {
    appHeader,
    appFooter,
    popupComponent,
    errorPopupComponent,
    loginPopupComponent,
    animationConfirmPopup,
    successPopupComponent,
    registerPopupComponent,
    recoveryPopupComponent,
  }
}
</script>
