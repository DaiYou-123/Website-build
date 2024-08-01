<template>
  <div class="banner">
        <el-carousel :interval="5000" arrow="always" class="carousel">
        <el-carousel-item>
            <img src="@/assets/images/banner1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="@/assets/images/banner2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="@/assets/images/banner3.jpg" alt="">
        </el-carousel-item>
        </el-carousel>
  </div>
</template>

<script setup>
import {} from "vue"

const img_data = {}
</script>

<style lang="scss" scoped>
    .carousel{
        width: 100%;
        max-height: 640px;
        :deep( .el-carousel__container){
            max-height: 640px;
            height: 528px;
        }
        img{
        width: 100%;
        height: 100%;
        }
    }
    
</style>
