<template>
    <div class="flex">
        <img src="/vite.svg" />
        <div class="logoText" v-if="!isCollapse">LogoTitle</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useLayoutStore from '@/store/modules/useLayoutStore';
const layout = useLayoutStore()
const isCollapse = computed(() => layout.getIsCollapse)
</script>

<style scoped>
.flex{
    display: flex;
    padding: 10px;
}
.logoText{
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
}
</style>
