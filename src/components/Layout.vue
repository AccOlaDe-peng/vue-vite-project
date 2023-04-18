<script setup lang="ts">
import Menu from './Menu.vue';
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="el-aside"><Menu /></el-aside>
            <el-container>
                <el-header class="el-header">Header</el-header>
                <el-main class="el-main">Main</el-main>
                <el-footer class="el-footer">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    width: 100vw;
    background-color: aqua;
}
.el-aside {
    width: 200px;
    height: 100vh;
    background-color: #fff;
}

.el-main{
    background-color: #213;
}

.el-header {
    height: 48px;
    background-color: #34e;
}

.el-footer{
    height: 60px;
    background-color: #34e;
}
</style>