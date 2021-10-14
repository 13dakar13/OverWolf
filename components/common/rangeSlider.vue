<template>
  <div class="range-slider">
    <div
      ref="sliderTrack"
      class="range-slider__track"
      :style="{
        '--bar-scale': barScale,
      }"
    >
      <div class="range-slider__bar">
        <div
          ref="sliderKnob"
          class="range-slider__knob"
        ></div>
      </div>
    </div>

    <ul class="range-slider__legend">
      <li
        ref="legendItem"
        class="range-slider__legend-item"
        :class="{
          'range-slider__legend-item_active': item.isActive,
        }"

        v-for="item in legendItems"
        :key="item.text"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 7,
    },
  },
  data(){
    return {
      barScale: 0.45,
      legendItemsRanges: [],
      legendItems: [
        {
          text: '1 день',
          isActive: false,
          value: 1,
        },
        {
          text: '7 дней',
          isActive: false,
          value: 7,
        },
        {
          text: '14 дней',
          isActive: false,
          value: 14,
        },
        {
          text: '30 дней',
          isActive: false,
          value: 30,
        },
        {
          text: '90 дней',
          isActive: false,
          value: 90,
        },
        {
          text: '180 дней',
          isActive: false,
          value: 180,
        },
      ]
    }
  },
  mounted(){
    this.updateRanges();

    const trackWidth = this.$refs.sliderTrack.getBoundingClientRect().width;
    const trackLeft = this.$refs.sliderTrack.getBoundingClientRect().left;

    const activeItemIndex = this.legendItems
      .findIndex(item => item.value === this.value);

    const [min, max] = this.legendItemsRanges[activeItemIndex < 0 ? 0 : activeItemIndex];

    this.setValue((((max + min) / 2) - trackLeft) / trackWidth, trackLeft, trackWidth);

    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('touchstart', this.handleMouseDown);

    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchend',this.handleMouseUp);

    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(){
      this.updateRanges();
    },
    constrain(val, min, max){
      return val > max ? max : val < min ? min : val;
    },
    handleMouseDown(event){
      if(event.target.isEqualNode(this.$refs.sliderKnob)){
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
        const rangeSliderTrack = this.$refs.sliderTrack;
        const clickX = event.type === 'mousemove' ? event.x : event.changedTouches[0].clientX;

        const rangeSliderTrackWidth = rangeSliderTrack.getBoundingClientRect().width;
        const absoluteRangeSliderTrackLeft = rangeSliderTrack.getBoundingClientRect().left;

        const knobLeftPersentage = (clickX - absoluteRangeSliderTrackLeft) / rangeSliderTrackWidth;

        this.setValue(knobLeftPersentage, absoluteRangeSliderTrackLeft, rangeSliderTrackWidth);
      }
    },
    isInRange(val, min, max){
      return val >= min && val <= max;
    },
    setValue(value, trackLeft, trackWidth){
      this.barScale = this.constrain(value, 0, 1);

      this.legendItems
        .forEach((item, index) => {
          const [min, max] = this.legendItemsRanges[index];

          item.isActive = this.isInRange(this.barScale * trackWidth + trackLeft, min, max);
        });

      const activeItem = this.legendItems.find(i => i.isActive);

      if(activeItem){
        this.$emit('update:value', activeItem.value);
      }
    },

    updateRanges(){
      this.legendItemsRanges = this.$refs.legendItem
        .map(item => [
          item.getBoundingClientRect().left,
          item.getBoundingClientRect().left + item.getBoundingClientRect().width,
        ]);
    }
  },
}
</script>
