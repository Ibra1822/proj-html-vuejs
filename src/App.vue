<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import FooterComp from "./components/FooterComp.vue";
import { store } from "./data/store";
export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <HeaderComp :nav="store.nav" />
  <MainComp />
  <FooterComp :info="store.aboutus" :we="store.weAre" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
