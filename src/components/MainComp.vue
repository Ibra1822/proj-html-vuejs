<script>
import QualityComp from "./QualityComp.vue";
import NetworkComp from "./NetworkComp.vue";
import BusinessComp from "./BusinessComp.vue";
import PriceAreaComp from "./PriceAreaComp.vue";
import NewsComp from "./NewsComp.vue";
import FollowComp from "./FollowComp.vue";
import MessageComp from "./MessageComp.vue";
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
};
</script>
<template>
  <QualityComp />
  <NetworkComp />
  <BusinessComp />
  <PriceAreaComp />
  <NewsComp />
  <FollowComp />
  <MessageComp />
</template>

<style lang="scss" scoped></style>
