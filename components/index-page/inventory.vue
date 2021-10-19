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

      <div class="inventory__icons-wrapper inventory__icons-wrapper_column " v-else>
        <ul
          class="inventory__groups"
          :class="`inventory__groups_${activeItemIndex}`"
        >
          <li
            class="inventory__group-item"

            v-for="group in filterItem[activeItemIndex].groups"
            :key="group"
          >
            {{ group }}
          </li>
        </ul>

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
          groups: [
            'Озвучка',
            'Мега-Убийства',
            'Комментаторы',
            'Музыка',
          ]
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
          groups: [
            'Ландшафт',
            'Крипы',
            'Башни',
            'Погодные эффекты',
          ]
        },
        {
          title: 'Other',
          isActive: false,
          isAnimating: false,
          groups: [
            'Инструменты',
            'Прочее',
          ]
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
      return require(`~/assets/img/inventory/${this.activeItemIndex + 1}/icons.webp`)
    }
  },
}
</script>
