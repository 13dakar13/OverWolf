<template>
  <label
    class="custom-checkbox"
    :class="{
      'custom-checkbox_invalid': isError,
    }"
  >
    <input
      @input="$emit('update:is-checked', cValue)"

      class="custom-checkbox__input"
      type="checkbox"
      :name="inputName"

      v-model="cValue"
    >

    <span class="custom-checkbox__fake"></span>

    <span
      class="custom-checkbox__text"
      v-html="labelText"
    ></span>
  </label>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
    inputName: {
      type: String,
      default: 'custom-input',
    },
    labelText: {
      type: String,
      default: '',
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      cValue: this.isChecked,
    }
  }
}
</script>
