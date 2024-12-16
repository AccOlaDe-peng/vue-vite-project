<template>
  <el-container class="h-full">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container>
      <el-aside class="aside">aside</el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "@@/Header/index.vue";
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
}
.aside {
  width: 200px;
}
</style>
