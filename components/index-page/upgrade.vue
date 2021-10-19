<template>
  <section id="upgrade" class="upgrade">
    <section-title
      class="upgrade__title"
    >
      Улучшай
    </section-title>

    <video
      src="~/assets/video/upgrade-bg.webm"
      loop
      playsinline
      preload="meta"
      autoplay
      muted
      class="upgrade__bg"

      v-if="isAnimationsEnabled"
    ></video>

    <img
      src="~/assets/img/upgrade-bg.webp"
      alt="background"
      class="upgrade__bg"

      v-else
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
          :src="mediaItem.video"
          loop
          playsinline
          preload="meta"
          autoplay
          muted
          class="upgrade__hero-media"

          v-if="isAnimationsEnabled"
        ></video>

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
  },
  components: {
    sectionTitle,
  }
}
</script>
