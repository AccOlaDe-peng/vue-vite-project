<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import { zhCn } from "element-plus/es/locales.mjs";
import { useRoute } from "vue-router";

const size = "small";
const zIndex = 3000;
const route = useRoute();
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="zhCn">
    <router-view v-slot="{ Component }">
      <transition
        :name="
          typeof route.meta.transition === 'string'
            ? route.meta.transition
            : 'fade'
        "
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-config-provider>
</template>
