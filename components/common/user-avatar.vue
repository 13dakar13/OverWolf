<template>
  <div
    class="user-avatar"
    :style="{
      'width': `${size}px`,
      'height': `${size}px`,
      'font-size': `${fontSize}px`,
    }"
  >
    <template v-if="!avatarPath">
      {{ userInitial }}
    </template>

    <img
      class="user-avatar__img"
      :src="avatarPath"
      :alt="userName"

      v-else
    >
  </div>
</template>

<script>
export default {
  props: {
    avatarPath: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: 'Belshed',
    },
    size: {
      type: Number,
      default: 40,
    },
    fontSize: {
      type: Number,
      default: 21,
    },
  },
  computed: {
    userInitial(){
      return this.userName[0];
    },
  },
}
</script>
