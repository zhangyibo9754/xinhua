<template>
  <div class="xhBannerPages">
    <!--  头部-->
    <div class="banner-head">
      <router-link to="/">
        <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      </router-link>
      <span class="head-name">新华书店网上商城...</span>
      <i class="iconfont icon-fenxiang"></i>
    </div>
    <!-- 头部结束-->

    <!--  主体内容-->
    <div class="content">
      <div class="section-title">
        <img class="titleBg" :src="pic" alt="">
      </div>
      <!-- 具体分类-->
      <div class="popular" v-for="(item,index) in popularInfo" :key="index">
        <xh-into-banner-swiper :item="item"></xh-into-banner-swiper>
      </div>
      <!-- 主体内容结束-->
    </div>
  </div>

</template>

<script>
  import XhIntoBannerSwiper from "../components/commons/XhIntoBannerSwiper"
  export default {
    name: "XhBannerPages",
    components:{
      "xh-into-banner-swiper":XhIntoBannerSwiper
    },
    data() {
      return {
        pic: 'https://img1.xinhuashudian.com/images/2018/12/17/336e6e6b-f011-42dd-8f90-724b3d4edff0.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300',
        popularInfo: [
          {
            titlePic: "https://img1.xinhuashudian.com/images/2018/11/08/97c0b5f4-ff88-4f42-81ab-9e9b0bccd7e0.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_136,h_34",

            swiperSlide: [
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 32开小字本（2019）",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 16开大字本（2019版烫金版）",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷（2018再版",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的思考与实践)",
                    price: "￥62.70"
                  }
                ]
              },
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 32开小字本（2019）",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 16开大字本（2019版烫金版）",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷（2018再版",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的思考与实践)",
                    price: "￥62.70"
                  }
                ]
              },
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 32开小字本（2019）",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想学习纲要 16开大字本（2019版烫金版）",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷（2018再版",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的思考与实践)",
                    price: "￥62.70"
                  }
                ]
              }
            ]
          },
          {
            titlePic: "https://img1.xinhuashudian.com/images/2018/11/08/165b0422-6df7-4be9-8e37-0d2433dd9702.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_136,h_34",
            swiperSlide: [
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷(2018再)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的)",
                    price: "￥62.70"
                  }
                ]
              },
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷(2018再)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的)",
                    price: "￥62.70"
                  }
                ]
              },
              {
                itemList: [
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "中国共产党章程",
                    price: "￥3.80"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥15.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平新时代中国特色社会主义思想",
                    price: "￥28.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政第一卷(2018再)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img1.xinhuashudian.com/bookbasepic/C/02542/3995872-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "习近平谈治国理政(第2卷)",
                    price: "￥76.00"
                  },
                  {
                    img: "https://img3.xinhuashudian.com/bookbasepic/C/01682/2691429-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    name: "干在实处走在前列(推进浙江新发展的)",
                    price: "￥62.70"
                  }
                ]
              }
            ]
          }
        ]
      }
    },

  }

</script>

<style scoped>
  @import "../assets/css/XhBannerPages.css";
</style>
