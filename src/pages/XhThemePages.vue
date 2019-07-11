<template>
    <div>
        <Xh-nav-pages-header></Xh-nav-pages-header>  
        <div class="XhThemePages-main">
            <!-- <Xh-theme-pages-img></Xh-theme-pages-img> -->
            <Xh-theme-pages-swiper></Xh-theme-pages-swiper>
            <Xh-theme-pages-icon></Xh-theme-pages-icon>
            <Xh-theme-pages-img></Xh-theme-pages-img>
            <Xh-theme-pages-set-meal></Xh-theme-pages-set-meal>
        </div>
    </div>
</template>

<script>
import XhNavPagesHeader from '../components/index/XhNavPagesHeader';
import XhThemePagesSwiper from '../components/index/XhThemePagesSwiper';
import XhThemePagesImg from '../components/index/XhThemePagesImg';
import XhThemePagesIcon from '../components/index/XhThemePagesIcon';
import XhThemePagesSetMeal from '../components/index/XhThemePagesSetMeal';
    export default {
        name: "XhThemePages",
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
