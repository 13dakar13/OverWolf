<template>
  <section class="inner-page faq-page">
    <section-title
      class="inner-page__title"
    >
      Часто задаваемые вопросы
    </section-title>

    <div class="container inner-page__container">
      <div class="inner-page__block">
        <header class="faq-page__header inner-page__block-footer">
          <app-dropdown
            @update:chosen-item="chosenCategory = $event"

            :dropdown-items="categories"
          />

          <search-bar
            @search="search($event)"

            placeholder="Поиск по словам или коду ошибки"
          />
        </header>

        <accordion-component
          :trigger-text="item.title"
          :is-expanded.sync="item.isExpanded"

          v-for="(item, index) in filteredCategories"
          :key="index"
        >
          {{ item.content }}
        </accordion-component>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '~/components/common/sectionTitle.vue';
import accordionComponent from '~/components/common/accordionComponent.vue';
import appDropdown from '~/components/common/input/appDropdown.vue';
import searchBar from '~/components/common/input/searchBar.vue';

export default {
  layout: 'inner',
  // middleware: ['auth'],
  data(){
    return {
      accordions: [
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Общее',
          isExpanded: false,
        },
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Общее',
          isExpanded: false,
        },
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Установка',
          isExpanded: false,
        },
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Установка',
          isExpanded: false,
        },
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Ошибки',
          isExpanded: false,
        },
        {
          title: 'Где я могу получить еще больше информации?',
          content: 'У нас есть блог, страница на Facebook, а в ближайшее время появятся страницы и в других социальных сетях! Также мы будем регулярно рассылать пресс-релизы, как только у нас будет обновляться лента новостей. Так что, чтобы ничего не пропустить, подписывайтесь на нашу рассылку. И вы всегда сможете с нами связаться (по электронной почте).',
          category: 'Ошибки',
          isExpanded: false,
        },
      ],
      categories: [
        'Все категории',
        'Общее',
        'Ошибки',
        'Установка',
      ],
      chosenCategory: 'Все категории',
      searchRequest: '',
    }
  },
  methods: {
    search(searchRequest){
      this.searchRequest = String(searchRequest).toLowerCase();
    },
  },
  computed: {
    filteredCategories(){
      return this.accordions
        .filter(a => a.category === this.chosenCategory || this.chosenCategory === this.categories[0])
        .filter(a => String(a.text).toLowerCase().includes(this.searchRequest) || String(a.title).toLowerCase().includes(this.searchRequest));
    },
  },
  components: {
    searchBar,
    appDropdown,
    sectionTitle,
    accordionComponent,
  }
}
</script>
