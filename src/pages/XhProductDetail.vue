<template>
    <div class="XhProductDetail"  >
<!--      <h1 id="searchBar" style="z-index: 999;height: 1rem;position: fixed">2134324</h1>-->
<!--      首部-->
      <XhProductDetail-top></XhProductDetail-top>

<!--      轮播图-->
      <XhProductDetail-top-swipe></XhProductDetail-top-swipe>
<!--     收藏-->
      <XhProductDetail-Collection></XhProductDetail-Collection>
<!--      优惠券~用户~出版-->
      <XhProductDetail-Coupon></XhProductDetail-Coupon>
<!--      图片详情-->
      <XhProductDetail-Picture-Details></XhProductDetail-Picture-Details>
<!--尾部-->
      <XhProductDetail-footer></XhProductDetail-footer>
    </div>
</template>

<script>
  import XhProductDetailtop from "../components/productDetail/XhProductDetailtop"
  import XhProductDetailtopswipe from "../components/productDetail/XhProductDetailtopswipe"
  import XhProductDetailCollection from "../components/productDetail/XhProductDetailCollection"
  import XhProductDetailCoupon from "../components/productDetail/XhProductDetailCoupon"
  import XhProductDetailPictureDetails from "../components/productDetail/XhProductDetailPictureDetails"
  import XhProductDetailfooter from "../components/productDetail/XhProductDetailfooter"
  export default {
        name: "XhProductDetail",

    data(){
      return{
        // arr: [1, 2, 3, 4, 5],
        // pos: 0,


        // active: 0,
        show: false
      }
    },
    methods: {
      // scroll(event) {
      //   this.pos = event.target.scrollTop;
      //   // if(event.target.scrollTop===200){
      //   //   this.border='red'
      //   // }
      //   console.log('scroll', event.target.scrollTop)
      // },

      showPopup() {
        this.show = true;
      }
    },
    components:{
      "XhProductDetail-top":XhProductDetailtop,
      "XhProductDetail-top-swipe":XhProductDetailtopswipe,
      "XhProductDetail-Collection":XhProductDetailCollection,
      "XhProductDetail-Coupon":XhProductDetailCoupon,
      "XhProductDetail-Picture-Details":XhProductDetailPictureDetails,
      "XhProductDetail-footer":XhProductDetailfooter
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    }
</script>

<style scoped>
@import "../assets/css/XhProductDetail.css";
</style>
