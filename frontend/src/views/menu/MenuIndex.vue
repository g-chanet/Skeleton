<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="1">Contacts</el-menu-item>
    <el-menu-item index="2">Boite Mail</el-menu-item>
    <el-menu-item index="3">Uploader</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="sass" scoped>
.menu
  margin: 0

.flex-grow
  flex-grow: 1
</style>
