<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme";
import { Sunny, Moon } from "@element-plus/icons-vue";

const { isDark, switchTheme } = useTheme();

const handleChangeTheme = ({ clientX, clientY }: MouseEvent) => {
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  );
  const style = document.documentElement.style;
  style.setProperty("--v3-theme-x", `${clientX}px`);
  style.setProperty("--v3-theme-y", `${clientY}px`);
  style.setProperty("--v3-theme-r", `${maxRadius}px`);

  const handler = () => {
    switchTheme();
  };
  document.startViewTransition ? document.startViewTransition(handler) : null;
};
</script>

<template>
  <el-tooltip content="切换主题" placement="top">
    <el-switch
      v-model="isDark"
      inline-prompt
      size="medium"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      @click="(e: MouseEvent) => handleChangeTheme(e)"
    />
  </el-tooltip>
</template>
