<template>
  <el-dropdown class="lang-switch" @command="handleCommand">
    <Icon icon="mdi:language" width="20" height="20" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zhCN">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useSystemStore } from "@/stores/system";

const systemStore = useSystemStore();

const handleCommand = (command: string) => {
  systemStore.setLanguage(command);
};
</script>

<style lang="scss" scoped>
.lang-switch {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
</style>
