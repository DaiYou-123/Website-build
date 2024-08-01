<template>
  <div class="">
    <!-- 公共导航区域 -->
    <Header></Header>
    <!-- 布局区域 -->
    <RouterView></RouterView>
    <!-- 公共底部 -->
    <Footer></Footer>
</div>
  
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<style lang="scss" scoped>
</style>
