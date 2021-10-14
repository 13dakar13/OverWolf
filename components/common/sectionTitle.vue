<template>
  <h2
    class="section-title"
    :class="{
      'section-title_large': !small,
      'section-title_small': small
    }"
  >
    <span class="section-title__deco"></span>

    <span class="section-title__content">
      <slot></slot>
    </span>

    <span class="section-title__deco"></span>
  </h2>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
