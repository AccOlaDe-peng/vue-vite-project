<template>
  <el-dropdown class="lang-switch">
    <Icon icon="mdi:language" width="20" height="20" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>中文</el-dropdown-item>
        <el-dropdown-item>English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.lang-switch {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
</style>
