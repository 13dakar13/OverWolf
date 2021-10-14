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

        v-for="videoItem in videos"
        :key="videoItem"
      >
        <video
          :src="videoItem"
          class="enjoy__video"

          preload="meta"
          playsinline
          autoplay
          muted
          loop

          v-show="isVideosShown"
        />
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
      videos: [
        require('~/assets/video/right-compare.webm'),
        require('~/assets/video/left-compare.webm'),
      ]
    }
  },
  mounted(){
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('touchstart', this.handleMouseDown);

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchend',this.handleMouseUp);
  },
  methods: {
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

        this.slidePercentage = this.constrain(knobLeftPersentage, 2, 85);
      }
    },
  },
}
</script>
