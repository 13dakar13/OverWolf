<template>
  <section id="customize" class="inventory">
    <aside class="inventory__sidebar">
      <ul class="inventory__list">
        <li
          @click="changeActiveSlide(index)"

          class="inventory__list-item"

          v-for="(item, index) in filterItem"
          :key="item.title"
        >
          {{ item.title }}
        </li>
      </ul>
    </aside>

    <main class="inventory__main">
      <div class="inventory__icons-wrapper">
        <img
          :src="require(`~/assets/img/inventory/${activeItemIndex + 1}/icons.png`)"
          alt="icons"
          class="inventory__icons"
          loading="lazy"
        >
        <img
          :src="require(`~/assets/img/inventory/${activeItemIndex + 1}/icons.png`)"
          alt="icons"
          class="inventory__icons"
          loading="lazy"
        >
        <img
          :src="require(`~/assets/img/inventory/${activeItemIndex + 1}/icons.png`)"
          alt="icons"
          class="inventory__icons"
          loading="lazy"
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
        },
        {
          title: 'Audio',
          isActive: false,
        },
        {
          title: 'Interface',
          isActive: false,
        },
        {
          title: 'World',
          isActive: false,
        },
        {
          title: 'Other',
          isActive: false,
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
    }
  },
}
</script>
