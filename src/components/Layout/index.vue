<template>
  <div class="h-full">
    <el-container class="h-full">
      <el-header height="55px">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">aside</el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from "@@/Header/index.vue";
</script>
