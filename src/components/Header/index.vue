<template>
  <div class="header">
    <div class="nav">
      <div class="logo"></div>
    </div>
    <div class="option">
      <ThemeSwitch />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitch from "./ThemeSwitch/index.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-bottom: 1px solid var(--border-color);
  background-image: url("/image/header-bg.png");
  background-repeat: no-repeat;
}
.nav {
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  margin-left: 10px;
  height: 40px;
  width: 120px;
  background-image: url("/image/logo_brand.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 100px;
}
</style>
