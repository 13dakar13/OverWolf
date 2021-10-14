<template>
  <button
    @click="burgerClick()"
    class="button burger"
    :class="{
      'burger_active': isActive,
    }"
  >
    <span class="burger__lines"></span>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    burgerClick(){
      this.$emit('click');
    },
  }
}
</script>
