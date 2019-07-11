<template>
    <div class="XhThemePagesSwiper">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://img1.xinhuashudian.com/images/2019/05/30/b411e047-0e90-4d12-b91f-aac93569f217.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://img1.xinhuashudian.com/images/2018/12/13/398fddc4-aad0-46d1-b910-f26462fe2c33.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://img1.xinhuashudian.com/images/2019/06/03/ddea4f31-117b-4965-93e0-6d16d3a77514.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://img1.xinhuashudian.com/images/2019/06/03/e984e8f5-437f-4975-9f32-8061903f89a9.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://img1.xinhuashudian.com/images/2019/06/03/6af617e6-80b3-4d67-8ea9-9e854a68c596.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhThemePagesSwiper",
        data () {
          return{
            swiperOption:{
              pagination: '.swiper-pagination',
              autoplay: true,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
            }
          }
        } 
    }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
  }
  .XhThemePagesSwiper-img {
    width: 100%;
  }
</style>
