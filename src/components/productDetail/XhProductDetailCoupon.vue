<template>
  <!--      优惠券~用户~出版-->
  <div>
      <!--     灰条条-->
      <div class="XhProductDetail"></div>
      <!--      优惠券~用户~出版-->
      <ul class="CouponProductDetail">
        <li>领劵
          <div class="CouponProductDetailspan">
            <span>满60-5</span>
            <span>满100-10</span>
            <span>满30-2</span>
          </div>
          <span class="cProductDetail"  >></span>
        </li>

        <router-link to="/XhProductsList" tag="li" >
          <!--        <li>-->
          <div>
              <span>
                作者
                <span class="cProductDetail">作者：白茶</span>
              </span>
          </div>
          <div class="cProductDetail">
            更多作品
            <span>></span>
          </div>
        </router-link>

        <router-link to="/XhProductsList" tag="li">
          <div>
            <span>
             出版社
              <span class="cProductDetail">人民文学出版社</span>
          </span>
          </div>
          <div class="cProductDetail">
            更多作品 <span>></span>
          </div>
        </router-link>
        <li>
          <div>
            <span>
              已选
            <span class="cProductDetail">默认</span>
          </span>
          </div>
          <van-button
            type="primary"
            @click="showPopup"
          >
          </van-button>
          <span class="cProductDetailc">></span>
        </li>
        <van-popup
          v-model="show"
          position="bottom">
          <div class="bottomXhProductsList">
            <div class="imgboxXhProductsList">
              <img src="https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="">
            </div>
            <div class="textXhProductsList">
              <p  class="tXhProductsList"   >￥47.03</p>
              <p class="tXhProductsListt" >
                <span>已选</span>
                <span>默认</span>
              </p>
            </div>
          </div>
          <div class="rXhProductsList"  >
            <span class="rXhProductsListr" >数量</span>
            <van-stepper v-model="value" step="1" />
          </div>
          <div class="showProductsList">
            <p class="owProductsList"  >加入购物车</p>
            <p class="shProductsList"  >立即购买</p>
          </div>
        </van-popup>
         <li class="addXhProductsList">
             <div>
                <span>送至</span>
                   <div  class="haveliXhProductDetail">
                      <div>
                        <van-icon name="location" class="bricon"/>
                        <span style="color: rgb(153, 153, 153)">北京   北京市  朝阳市</span>
                      </div>
                        <p style="color:  #c62f2e">有货</p>
                    </div>
             </div>
                  <span style="color: rgb(153, 153, 153);line-height: 1.6rem"> ></span>

          </li>
        <router-link to="/XhMyEvaluation" tag="li">
          用户评论（0）
          <span class="cProductDetail" >></span>
        </router-link>
      </ul>
      <!--      灰条条-->
      <div class="XhProductDetail"></div>
    </div>
</template>

<script>
    export default {
        name: "XhProductDetailCoupon",
      data(){
        return{
          show: false,
          value: 1
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductDetail.css";

</style>
