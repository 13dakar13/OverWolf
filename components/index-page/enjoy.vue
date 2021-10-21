<template>
  <section
    id="enjoy"
    class="enjoy"
    :style="{
      '--divider-offset': `${slidePercentage}%`,
    }"
  >
    <section-title
      class="enjoy__title"
    >
      Наслаждайся Игрой
    </section-title>

    <div
      ref="slideContainer"
      class="enjoy__compare"
    >
      <div
        class="enjoy__video-container"

        v-for="mediaItem in media"
        :key="mediaItem.video.webm"
      >
        <video
          @loadeddata="videoLoadHandler(mediaItem.video)"

          class="enjoy__video"
          ref="video"
          preload="meta"
          playsinline
          muted
          loop

          v-show="isVideosShown && isAnimationsEnabled"
        >
          <source :src="mediaItem.video.webm" type="video/webm">
          <source :src="mediaItem.video.mp4" type="video/mp4">
        </video>

        <img
          :src="mediaItem.image"
          alt="Наслаждайся Игрой"
          class="enjoy__video"
        >
      </div>

      <div
        class="enjoy__divider"
      >
        <button
          ref="dragButton"
          class="button enjoy__drag"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/common/sectionTitle.vue';
import { mapGetters } from 'vuex';

export default {
  props: {
    isVideosShown: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    sectionTitle,
  },
  data(){
    return {
      isMouseDown: false,
      minValue: 0,
      maxValue: 100,
      slidePercentage: 50,
      maxSliderPercent: 95,
      media: [
        {
          video: {
            webm: require('~/assets/video/enjoy/right-compare.webm'),
            mp4: require('~/assets/video/enjoy/right-compare.mp4'),
            isLoaded: false,
          },
          image: require('~/assets/img/enjoy/right-compare.webp'),
        },
        {
          video: {
            webm: require('~/assets/video/enjoy/left-compare.webm'),
            mp4: require('~/assets/video/enjoy/left-compare.mp4'),
            isLoaded: false,
          },
          image: require('~/assets/img/enjoy/left-compare.webp'),
        },
      ]
    }
  },
  mounted(){
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('touchstart', this.handleMouseDown);

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchend',this.handleMouseUp);

    window.addEventListener('resize', () => this.maxSliderPercent = window.innerWidth >= 720 ? 95 : 85);
  },
  methods: {
    videoLoadHandler(video){
      video.isLoaded = true;

      if(this.media.every(m => m.video.isLoaded)){
        this.$refs.video.forEach(v => v.play());

        setInterval(() => {
          const [rightVideo, leftVideo] = this.$refs.video;

          if(leftVideo.currentTime !== rightVideo.currentTime){
            const minTime = Math.min(leftVideo.currentTime, rightVideo.currentTime)

            leftVideo.currentTime = minTime;
            rightVideo.currentTime = minTime;
          }
        }, 31000);
      }
    },

    constrain(val, min, max){
      return val > max ? max : val < min ? min : val;
    },

    handleMouseDown(event){
      if(event.target.isEqualNode(this.$refs.dragButton)){
        this.isMouseDown = true;

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('touchmove', this.handleMouseMove);
      }
    },

    handleMouseUp(){
      this.isMouseDown = false;

      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('touchmove', this.handleMouseMove);
    },

    handleMouseMove(event){
      if(this.isMouseDown){
        const clickX = event.type === 'mousemove' ? event.x : event.changedTouches[0].clientX;

        const knobLeftPersentage = (clickX / window.innerWidth) * 100;

        this.slidePercentage = this.constrain(knobLeftPersentage, 2, this.maxSliderPercent);
      }
    },
  },
  computed: {
    ...mapGetters({
      isAnimationsEnabled: 'user/getAnimationsStatus'
    }),
  }
}
</script>
