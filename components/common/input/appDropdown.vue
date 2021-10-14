<template>
  <div
    v-click-outside="() => isExpanded = false"

    class="custom-dropdown"
    :class="{
      'custom-dropdown_unstyled': unstyled,
    }"
  >
    <button
      @click="isExpanded = !isExpanded"

      class="button custom-dropdown__trigger"
    >
      <div
        class="custom-dropdown__trigger-icon"

        v-if="!unstyled"
      ></div>

      <span
        class="custom-dropdown__trigger-text"
        :class="{
          'custom-dropdown__trigger-text_white': unstyled,
        }"
      >
        {{ chosenItem }}
      </span>

      <div
        class="custom-dropdown__trigger-arrow"
        :class="{
          'custom-dropdown__trigger-arrow_white': unstyled,
        }"
      ></div>
    </button>

    <ul
      class="custom-dropdown__list"
      :class="{
        'custom-dropdown__list_expanded': isExpanded
      }"
    >
      <li
        @click="selectItem(item)"

        class="custom-dropdown__list-item"

        v-for="item in dropdownItems"
        :key="item"
      >
        <span>
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  props: {
    dropdownItems: {
      type: Array,
      default: function(){
        return [];
      }
    },
    unstyled: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      isExpanded: false,
      chosenItem: this.dropdownItems[0],
    }
  },
  mounted(){
    this.$emit('update:chosen-item', this.chosenItem);
  },
  methods: {
    selectItem(item){
      this.chosenItem = item;
      this.isExpanded = false;

      this.$emit('update:chosen-item', item);
    },
  },
  directives: {
    ClickOutside,
  }
}
</script>
