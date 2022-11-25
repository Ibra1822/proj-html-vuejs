<script>
import QualityComp from "./QualityComp.vue";
import NetworkComp from "./NetworkComp.vue";
import BusinessComp from "./BusinessComp.vue";
import PriceAreaComp from "./PriceAreaComp.vue";
import NewsComp from "./NewsComp.vue";
import FollowComp from "./FollowComp.vue";
import MessageComp from "./MessageComp.vue";

import { store } from "../data/store";

export default {
  name: "MainComp",
  components: {
    QualityComp,
    NetworkComp,
    BusinessComp,
    PriceAreaComp,
    NewsComp,
    FollowComp,
    MessageComp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <QualityComp :quality="store.QualityArray" />
  <NetworkComp :networkArray="store.networkArray" />
  <BusinessComp :businessArray="store.businessArray" />
  <PriceAreaComp />
  <NewsComp />
  <FollowComp />
  <MessageComp :info="store.aboutus" />
</template>

<style lang="scss" scoped></style>
