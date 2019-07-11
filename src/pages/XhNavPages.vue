<template>
    <div class="XhNavPages">
        <!-- Header components中 index 复用 -->
        <Xh-nav-pages-header></Xh-nav-pages-header>
        <div class="XhNavPages-main">
            <!-- 优惠券页面会员图片 -->
            <Xh-nav-pages-member></Xh-nav-pages-member>
            <!-- 图书销量排行榜组件 -->
            <Xh-nav-pages-main></Xh-nav-pages-main>
            <!-- 专题组件 -->
            <Xh-nav-pages-special></Xh-nav-pages-special>
            
            <Xh-nav-pages-coupon></Xh-nav-pages-coupon>
            <Xh-nav-pages-coupon-soon-start></Xh-nav-pages-coupon-soon-start>
            <Xh-nav-pages-recommen-dation></Xh-nav-pages-recommen-dation>

        </div>
    </div>
</template>

<script>
import XhNavPagesHeader from '../components/index/XhNavPagesHeader'
import XhNavPagesMain from '../components/index/XhNavPagesMain'
import XhNavPagesMember from '../components/index/XhNavPagesMember'
import XhNavPagesCoupon from '../components/index/XhNavPagesCoupon'
import XhNavPagesCouponSoonStart from '../components/index/XhNavPagesCouponSoonStart'
import XhNavPagesRecommenDation from '../components/index/XhNavPagesRecommenDation'
import XhNavPagesSpecial from '../components/index/XhNavPagesSpecial'
    export default {
        name: "XhNavPages",
        components: {
            XhNavPagesHeader,
            XhNavPagesMain,
            XhNavPagesMember,
            XhNavPagesCoupon,
            XhNavPagesCouponSoonStart,
            XhNavPagesRecommenDation,
            XhNavPagesSpecial
        }
    }
</script>

<style scoped>
    .XhNavPages-main{
        margin-top: .86rem; 
    }
</style>
