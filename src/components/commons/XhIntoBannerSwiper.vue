<template>
  <div>
    <div class="title-wrap">
      <img class="popular-titlePic" :src="item.titlePic" alt="">
    </div>
    <div class="swiper-container " id="intoBannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(v,vId) in item.swiperSlide">
          <div class="itemList" v-for="(l,lID) in v.itemList">
            <div class="item-wrap">
              <img class="book-pic" :src="l.img" alt="">
              <span class="smallItem-name">{{l.name}}</span>
              <span class="book-price">{{l.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" id="intoBanner-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper";
  export default {
    name: "XhIntoBannerSwiper",
    props: ["item"],
    mounted() {
      //在获取完数据后，将swiper放在$nextTick下一个UI帧再初始化。
      this.$nextTick(() => { // 下一个UI帧再初始化swiper
        this._initSwiper();
      });
    },
    methods: {
      _initSwiper() {
        // banner部分的轮播图
        new Swiper("#intoBannerSwiper", {
          direction: "horizontal",//水平
          // loop: true, //循环
          // observer: true, //动态获取资源时，需要加上这一句
          // observeParents: true,
          // 分页器
          pagination: {
            el: "#intoBanner-pagination",
            bulletClass: "my-bullet",
            bulletActiveClass: "my-bullet-active"
          },
        });
      }
    }

  }
</script>

<style>
  @import "../../assets/css/XhBannerPages.css";
  #intoBannerSwiper{
    padding-bottom: 0.5rem;
  }

  #intoBanner-pagination{
    /*width: 1.5rem;*/
    padding: 0.03rem 0.05rem;
    background-color: rgba(241, 241, 241, 0.52);
    border-radius: 1rem;
    margin: 0 3px;
  }
  #intoBanner-pagination .my-bullet  {
    display: inline-block;
    width: 0.15rem;
    height: 0.05rem;
    opacity: 1;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.08);
    margin: 0 3px;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }

  #intoBanner-pagination .my-bullet-active {
    width: 0.3rem;
    height: 0.05rem;
    background: #c62f2e!important;
    opacity: 1;
    border-radius: 10px;
  }
</style>
