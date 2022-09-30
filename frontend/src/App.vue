<template>
  <div class="appMain">
    <el-container>
      <el-header><MenuView /></el-header>
      <el-main> <RouterView /></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuView from "./views/menu/MenuIndex.vue";
</script>

<style lang="sass" scoped>
.appMain
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: 100%

.el-header
  padding: 0
</style>
