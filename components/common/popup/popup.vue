<template>
  <div
    class="popup"
    :class="{
      active: isOpen,
    }"

    @click.self="closePopup()"
  >
    <div class="popup__container text-color-white">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closePopup(){
      this.$emit('close-popup');
    }
  },
}
</script>
