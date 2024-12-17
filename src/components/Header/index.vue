<template>
  <div class="header">
    <div class="nav">
      <Logo />
    </div>
    <div class="option">
      <ThemeSwitch />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitch from "./ThemeSwitch/index.vue";
import Logo from "./Logo/index.vue";
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
</style>
