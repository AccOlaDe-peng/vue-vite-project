<template>
    <div class="sider">
        <LogoTitle />
        <SiderMenu />
    </div>
</template>

<script setup lang="ts">
import SiderMenu from './SiderMenu.vue';
import LogoTitle from './LogoTitle.vue';
</script>

<style scoped>
.sider{
    display: flex;
    flex-direction: column;
}
</style>