<template>
    <div>
        <!-- Header -->
        <Xh-nav-pages-header></Xh-nav-pages-header> 
        <div class="XhThemePages-main">
            <!-- 单张图片 -->
            <Xh-theme-pages-img></Xh-theme-pages-img>
            <!-- 轮播图 -->
            <Xh-theme-pages-swiper></Xh-theme-pages-swiper>
            <!-- icon小图标 -->
            <Xh-theme-pages-icon></Xh-theme-pages-icon>
            <!-- 单张图片 -->
            <Xh-theme-pages-img></Xh-theme-pages-img>
            <!-- 超值套餐组件 -->
            <Xh-theme-pages-set-meal></Xh-theme-pages-set-meal>
        </div>
    </div>
</template>

<script>
// 引入组件
import XhNavPagesHeader from '../components/index/XhNavPagesHeader';
import XhThemePagesSwiper from '../components/index/XhThemePagesSwiper';
import XhThemePagesImg from '../components/index/XhThemePagesImg';
import XhThemePagesIcon from '../components/index/XhThemePagesIcon';
import XhThemePagesSetMeal from '../components/index/XhThemePagesSetMeal';
    export default {
        name: "XhThemePages",
        // 注册组件
        components: {
            XhNavPagesHeader,
            XhThemePagesSwiper,
            XhThemePagesImg,
            XhThemePagesIcon,
            XhThemePagesSetMeal
        }
    }
</script>

<style scoped>
    .XhThemePages-main{
        margin-top: .86rem 
    }         
</style>
