<template>
  <button
    class="button"
    :class="{
      'text-uppercase': uppercase,
    }"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    uppercase: {
      type: Boolean,
      default: true,
    }
  }
}
</script>
