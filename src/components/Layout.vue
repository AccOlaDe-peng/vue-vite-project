<script setup lang="ts">
import Menu from "./Menu.vue";
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px"><Menu /></el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
