<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
.el-tag {
  margin: 10px !important;
}
.el-card,
.el-collapse {
  width: 95%;
  margin: 10px auto;
}
.el-card {
  text-indent: 0;
}
.el-collapse {
  text-indent: 20px;
}
.el-row{
  margin: 20px 0;
}
.el-button{
  margin: 6px;
}
</style>
