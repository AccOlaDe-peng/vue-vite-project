
<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="el-aside" :style="{width: isCollapse }"><Menu /></el-aside>
            <el-container>
                <el-header class="el-header"><Header /></el-header>
                <el-main class="el-main">Main</el-main>
                <el-footer class="el-footer">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import Menu from './Menu.vue';
import Header from './Header.vue';
import useLayoutStore from '@/store/modules/useLayoutStore';
import { computed } from 'vue';
const layout = useLayoutStore()
const isCollapse = computed(() => layout.getIsCollapse? "63px" : "200px")
</script>
<style scoped>
.common-layout {
    width: 100vw;
}
.el-aside {
    height: 100vh;
    border-right: 1px solid #e4e7ed;
    background-color: #fff;
}

.el-main{
    background-color: #213;
}

.el-header {
    height: 48px;
    padding: 0
}


.el-footer{
    height: 60px;
    background-color: #34e;
}
</style>