<template>
  <div class="flex items-center justify-between px-8 py-4 bg-gray-300">
    <div>自定义项目demo</div>
    <div>
      <el-switch
        v-model="isDarkMode"
        class="mt-2"
        inline-prompt
        :active-icon="Check"
        :inactive-icon="Close"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { Check, Close } from "@element-plus/icons-vue";

const isDarkMode = useDark();
</script>
