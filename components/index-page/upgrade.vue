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
    ></video>

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
          'upgrade__hero_active': activeItem === 'left',
        }"
      >
        <video
          src="~/assets/video/upgrade/upgrade-left.webm"
          loop
          playsinline
          preload="meta"
          autoplay
          muted
          class="upgrade__hero-media"
        ></video>
      </div>

      <div
        class="upgrade__hero"
        :class="{
          'upgrade__hero_active': activeItem === 'right',
        }"
      >
        <video
          src="~/assets/video/upgrade/upgrade-right.webm"
          loop
          playsinline
          preload="meta"
          autoplay
          muted
          class="upgrade__hero-media"
        ></video>
      </div>
    </div>

  </section>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';

export default {
  data(){
    return {
      activeItem: 'left'
    }
  },
  components: {
    sectionTitle,
  }
}
</script>
