<template>
  <div class="layout">
    <app-header
      @open-login-popup="openPopup(popups.login)"
      inner-header

      class="layout__header"
    />

    <div id="main" class="main main_inner">
      <nuxt/>
    </div>

    <app-footer
      inner

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
import referalPopupComponent from '@/components/common/popup/referalPopup.vue';

export default {
  data(){
    return {
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
  methods: {
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
    successPopupComponent,
    referalPopupComponent,
    registerPopupComponent,
    recoveryPopupComponent,
  }
}
</script>
