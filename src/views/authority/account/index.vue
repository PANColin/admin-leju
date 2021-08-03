<template>
  <div>
    账号管理
    <copyright></copyright>
  </div>
</template>

<script>
import copyright from "@/components/copyright/index.vue";

export default {
  name: "Account",

  components: { copyright },

  data() {
    return {
      list: [],
      pageInfo: {
        start: 1,
        limit: 10
      },
      total: 0
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
