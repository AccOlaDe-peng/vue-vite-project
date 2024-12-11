<template>
  <el-switch
    v-model="isDark"
    class="mt-2"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
    @click="(e: MouseEvent) => handleChangeTheme(e)"
  />
</template>
<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme";
import { Check, Close } from "@element-plus/icons-vue";

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
