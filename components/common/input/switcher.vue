<template>
  <label
    class="switcher"
    :class="{
      'switcher_checked': cValue,
    }"
  >
    <input
      @input="handleSwitch()"

      class="switcher__input"
      :id="id"
      :type="type"
      :name="name"
      :checked="cValue"
    >

    <span
      class="switcher__pin"
      :class="{
        'switcher__pin_checked': cValue,
      }"
    ></span>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'custom-switcher'
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    id: {
      type: String,
      default: 'checkbox-id'
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      cValue: this.value,
    }
  },
  methods: {
    handleSwitch(){
      this.cValue = !this.cValue;

      this.$emit('update:value', this.cValue);
    },
  }
}
</script>
