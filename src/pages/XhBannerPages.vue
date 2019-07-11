<template>
  <div>
    <!--  头部-->
    <div class="banner-head">
      <i class="iconfont icon-fanhui"></i>
      <span class="head-name">{{headName}}</span>
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
        <div class="title-wrap">
          <img class="popular-titlePic" :src="item.titlePic" alt="">
        </div>
        <div class="swiper-container" :options="item.swiperOption">
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
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 主体内容结束-->
    </div>
  </div>

</template>

<script>
  // import swiper from "../../node_modules/swiper/dist/js/swiper.js"
  import Swiper from "swiper/dist/js/swiper";

  export default {
    name: "XhBannerPages",
    data() {
      return {
        // swiperOption: {
        //     loop: true, // 循环模式选项
        //
        //     // 如果需要分页器
        //     pagination: {
        //       el: '.swiper-pagination',
        //     }
        // },
        headName: '新华书店网上商城...',
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
    updated() {
      this.$nextTick(() => { // 下一个UI帧再初始化swiper
        this._initSwiper();
      });
    },
    methods: {
      _initSwiper() {
        new Swiper('.swiper-container', {
          direction: "horizontal",
          loop: true, // 循环模式选项
          autoplay: {
            autoplayDisableOnInteraction: false,
            delay: 3000,
            // 如果设置为true，当切换到最后一个slide时停止自动切换
            stopOnLastSlide: false,
            disableOnInteraction: false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          },
          // 启动动态检查器(OB/观众/观看者)，
          // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，
          // 自动初始化swiper
          observer: true,
          observeParents: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    }

  }

</script>

<style scoped>
  /*点击轮播图后的页面*/
  /*头部样式*/
  .banner-head {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
  }

  .icon-fanhui, .icon-fenxiang {
    font-size: 0.3rem;
    color: #c62f2e;
  }

  .head-name {
    font-size: 0.34rem;
  }

  /*popularInfo样式*/
  .content {
    min-height: 5rem;
    max-height: 15.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow-y: auto;
  }

  .titleBg {
    width: 100%;
    height: 100%;
  }

  .popular-titlePic {
    width: 1.28rem;
    height: 0.34rem;
  }

  .title-wrap {
    height: 1rem;
    line-height: 1rem;
    text-align: left;
    padding-left: 0.25rem;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }

  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .itemList {
    width: 31%;
    margin-bottom: 0.2rem;
  }

  .item-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .book-pic {
    width: 1.48rem;
    height: 2rem;
  }

  .smallItem-name {
    height: 0.6rem;
    display: -webkit-box !important;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    color: #363433;
    margin: 0.04rem;
  }

  .book-price {
    color: #c62f2e;
  }

</style>
