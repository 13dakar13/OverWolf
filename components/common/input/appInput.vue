<template>
  <label
    class="custom-input"
    :class="{
      'custom-input_invalid': isError,
      'custom-input_gradient-border': isDefault,
    }"
  >
    <span
      class="custom-input__icon"

      v-if="!isDefault"
    >
      <img
        :src="iconPath"
        alt="icon"
        class="custom-input__icon-img"
      >
    </span>

    <input
      @input="$emit('update:value', cValue)"
      @blur="$emit('blur', cValue), $emit('update:value', cValue)"

      :type="inputType"
      :placeholder="placeholder"

      class="custom-input__input"
      :class="{
        'custom-input__input_no-padding': isDefault,
      }"

      v-model="cValue"
    >

    <span
      class="custom-input__error-message"

      :class="{
        active: isError,
      }"
    >
      {{ errorMessage }}
    </span>

    <span class="custom-input__tip" v-if="isTipShown"></span>
  </label>
</template>

<script>
import { INPUT_TYPES } from '@/constants.js';

export default {
  props: {
    type: {
      type: String,
      default: INPUT_TYPES.TEXT
    },
    errorMessage: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isTipShown: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      cValue: this.value,
    }
  },
  computed: {
    isPassword(){
      return this.type === INPUT_TYPES.PASSWORD;
    },
    isEmail(){
      return this.type === INPUT_TYPES.EMAIL;
    },
    isLogin(){
      return this.type === INPUT_TYPES.LOGIN;
    },
    isDefault(){
      return this.type === INPUT_TYPES.TEXT;
    },
    inputType(){
      let inputType;

      switch(this.type){
        case INPUT_TYPES.PASSWORD:
          inputType = 'password'
        break;
        case INPUT_TYPES.EMAIL:
          inputType = 'email'
        break;
        default:
          inputType = 'text'
        break;
      }

      return inputType;
    },
    iconPath(){
      let path;

      switch(this.type){
        case INPUT_TYPES.PASSWORD:
          path = require('~/assets/img/icons/password-input-icon.png');
        break;
        case INPUT_TYPES.EMAIL:
          path = require('~/assets/img/icons/email-input-icon.png');
        break;
        case INPUT_TYPES.LOGIN:
          path = require('~/assets/img/icons/user-input-icon.png');
        break;
      }

      return path;
    }
  }
}
</script>
