<template>
    <el-row justify="space-between" align="middle" class="header">
        <el-col :span="1" >
            <el-icon size="20" @click="layout.toggleCollapse()">
                <Expand v-if="isCollapse"/>
                <Fold v-else="!collapse"/>
            </el-icon>
        </el-col>
        <el-col :span="4">
            <el-icon><User /></el-icon>
        </el-col>
    </el-row>

</template>

<script setup lang="ts">
import {
    Expand,
    Fold
} from '@element-plus/icons-vue'
import useLayoutStore from '@/store/modules/useLayoutStore';
import { computed } from 'vue';
const layout = useLayoutStore()
const isCollapse = computed(() => layout.getIsCollapse)
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    line-height: 0;
    background-color: #fff;
}
</style>