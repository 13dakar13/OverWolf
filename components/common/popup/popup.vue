<template>
  <div
    class="popup"
    :class="{
      active: isOpen,
    }"

    @click.self="closePopup()"
  >
    <slot></slot>
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
