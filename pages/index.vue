<template>
  <div class="page">
    <hero-section

    />

    <upgrade-section

    />

    <inventory-section

    />

    <enjoy-section
      ref="enjoySection"

      :is-videos-shown="isEnjoySectionVisible"
    />

    <buy-section

    />
  </div>
</template>

<script>
import heroSection from '~/components/index-page/hero.vue';
import upgradeSection from '~/components/index-page/upgrade.vue';
import buySection from '~/components/index-page/buy.vue';
import enjoySection from '~/components/index-page/enjoy.vue';
import inventorySection from '~/components/index-page/inventory.vue';

export default {
  data(){
    return {
      isEnjoySectionVisible: true,
      enjoySectionScrollTop: 0,
    }
  },
  mounted(){
    if(process.browser){
      window.addEventListener('scroll', this.scrollHandler);

      this.scrollHandler();
    }
  },
  methods: {
    scrollHandler(){
      if(this.$refs.enjoySection?.$el){
        const enjoySectionScrollTop = this.$refs.enjoySection.$el.getBoundingClientRect().top;

        this.isEnjoySectionVisible = Math.abs(enjoySectionScrollTop) <= 800;
      }
    },
  },
  components: {
    inventorySection,
    upgradeSection,
    enjoySection,
    heroSection,
    buySection,
  }
}
</script>
