<template>
  <div>
    文章列表
    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";
export default {
  name: "ArticleList",
  components: { copyright },
  data() {
    return { copyright };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
