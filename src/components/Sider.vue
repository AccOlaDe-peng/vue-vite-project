<template>
    <div class="sider">
        <transition name="el-zoom-in-center">
            <LogoTitle />
        </transition>
        <transition name="el-zoom-in-center">
            <SiderMenu />
        </transition>
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