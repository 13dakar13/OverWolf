<template>
  <section id="upgrade" class="upgrade">
    <section-title
      class="upgrade__title"
    >
      Улучшай
    </section-title>

    <img
      src="~/assets/img/hero-section/5.jpg"
      alt="background"
      class="upgrade__bg"
    >

    <div class="upgrade__container">
      <button
        @click="activeItem = 'left'"
        class="button upgrade__button upgrade__button_left"
      >

      </button>
      <button
        @click="activeItem = 'right'"
        class="button upgrade__button upgrade__button_right"
      >

      </button>

      <div
        class="upgrade__hero"
        :class="{
          'upgrade__hero_active': activeItem === mediaItem.side,
        }"

        v-for="mediaItem in media"
        :key="mediaItem.side"
      >
        <video
          loop
          playsinline
          preload="meta"
          autoplay
          muted
          class="upgrade__hero-media"

          v-if="isAnimationsEnabled && !isIos"
        >
          <source :src="mediaItem.video" type="video/webm">
          <source :src="mediaItem.image" type="image/webp">
        </video>

        <img
          :src="mediaItem.image"
          alt="hero"
          class="upgrade__hero-media"

          v-else
        >
      </div>
    </div>

  </section>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      activeItem: 'left',
      media: [
        {
          side: 'left',
          video: require('~/assets/video/upgrade/upgrade-left.webm'),
          image: require('~/assets/img/upgrade/upgrade-left.webp'),
        },
        {
          side: 'right',
          video: require('~/assets/video/upgrade/upgrade-right.webm'),
          image: require('~/assets/img/upgrade/upgrade-right.webp'),
        },
      ]
    }
  },
  computed: {
    ...mapGetters({
      isAnimationsEnabled: 'user/getAnimationsStatus'
    }),
    isIos(){
      if(process?.browser){
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
      }

      return false;
    }
  },
  components: {
    sectionTitle,
  }
}
</script>
