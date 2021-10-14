<template>
  <div
    class="custom-accordion"
    :class="{
      'custom-accordion_expanded': cIsExpanded,
    }"
  >
    <button
      @click="toggleState()"

      class="button custom-accordion__trigger"
    >
      <span class="custom-accordion__trigger-question">
        ?
      </span>

      {{ triggerText }}

      <span class="custom-accordion__arrow"></span>
    </button>

    <div
      :style="{
        'max-height': `${cIsExpanded ? contentHeight : 0}px`,
      }"
      class="custom-accordion__content"
      ref="content"
    >
      <div class="custom-accordion__content-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    triggerText: {
      type: String,
      default: 'Триггер',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      cIsExpanded: this.isExpanded,
    }
  },
  methods: {
    toggleState(state = null){
      if(state === null) {
        this.cIsExpanded = !this.cIsExpanded;
        this.$emit('update:is-expanded', this.cIsExpanded);

        return
      }

      this.cIsExpanded = state;
      this.$emit('update:is-expanded', this.cIsExpanded);
    }
  },
  computed: {
    contentHeight(){
      return this.$refs.content.scrollHeight;
    },
  },
}
</script>
