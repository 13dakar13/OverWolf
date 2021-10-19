<template>
  <section id="customize" class="inventory">
    <aside class="inventory__sidebar">
      <ul class="inventory__list">
        <li
          @click="changeActiveSlide(index)"

          class="inventory__list-item"
          :class="{
            'inventory__list-item_active': index === activeItemIndex,
          }"

          v-for="(item, index) in filterItem"
          :key="item.title"
        >
          {{ item.title }}
        </li>
      </ul>
    </aside>

    <main class="inventory__main">
      <div
        class="inventory__icons-wrapper"

        v-if="filterItem[activeItemIndex].isAnimating"
      >
        <img
          :src="reqiredImage"
          alt="icons"
          class="inventory__icons inventory__icons_animated"
        >
        <img
          :src="reqiredImage"
          alt="icons"
          class="inventory__icons inventory__icons_animated"
        >
        <img
          :src="reqiredImage"
          alt="icons"
          class="inventory__icons inventory__icons_animated"
        >
      </div>

      <div class="inventory__icons-wrapper" v-else>
        <img
          :src="reqiredImage"
          alt="icons"
          class="inventory__icons"
        >
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data(){
    return {
      filterItem: [
        {
          title: 'All',
          isActive: true,
          isAnimating: true,
        },
        {
          title: 'Audio',
          isActive: false,
          isAnimating: false,
        },
        {
          title: 'Interface',
          isActive: false,
          isAnimating: true,
        },
        {
          title: 'World',
          isActive: false,
          isAnimating: false,
        },
        {
          title: 'Other',
          isActive: false,
          isAnimating: false,
        },
      ],
    }
  },
  methods: {
    changeActiveSlide(index){
      this.filterItem.forEach((item, idx) => item.isActive = index === idx);
    }
  },
  computed: {
    activeItemIndex(){
      return this.filterItem.findIndex(item => item.isActive === true);
    },
    reqiredImage(){
      return require(`~/assets/img/inventory/${this.activeItemIndex + 1}/icons.png`)
    }
  },
}
</script>
