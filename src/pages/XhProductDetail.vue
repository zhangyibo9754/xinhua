<template>
    <div class="XhProductDetail" >
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
  import api from '../XinHuaApi'
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
        product:{},
        show: false
      }
    },
    created(){
      var itemId="";
      itemId=this.$route.params.goodsId;
      console.log(itemId);
      api.get("/api/xinhua/product/"+itemId).then(data=>{
            // 判断http请求状态码,200为请求成功
            if(data.status===200){
                // 判断接口请求是否成功 0为成功
                if(data.data.status===0){
                  // 成功时接收数据
                 this.product=data.data.datas;
                  console.log(this.product);
                }else{
                  // 失败时打印错误信息
                  console.log(data.data.err)
                }
              }
            }).catch(err=>{
              // 请求错误返回错误信息
              console.log(err)
            })

    },
    methods: {
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
