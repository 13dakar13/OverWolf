<template>
  <form
    @submit.prevent="search()"

    class="search-bar"
  >
    <div class="search-bar__icon"></div>

    <input
      @input="searchRequest = $event.target.value"

      type="text"
      class="search-bar__input"
      :placeholder="placeholder"
      :value="value"
    >

    <button
      type="submit"
      class="button search-bar__button"
    >
      Enter
    </button>
  </form>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data(){
    return {
      searchRequest: '',
    }
  },
  methods: {
    search(){
      this.$emit('search', this.searchRequest)
    },
  },
}
</script>
