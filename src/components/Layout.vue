
<template>
    <el-container class="common-layout">
        <Sider />
        <el-container>
            <el-header class="el-header"><PrHeader /></el-header>
            <el-main class="el-main">Main</el-main>
            <el-footer class="el-footer">Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Sider from './Sider.vue';
import PrHeader from './PrHeader.vue';
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