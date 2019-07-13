<template>
<!--  四页列表-->
    <div>
      <div class="gridProductsList">
        <div class="gridProductsListbox">
          <van-grid :border="false" :column-num="2"  :center="false" :gutter="10"  >
            <van-grid-item class="grid_box">
              <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/9622ff16-0d3d-4a0a-9234-0b0d88ee37be.png?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
              <span>敦煌本纪（套装共2册）</span>
              <p class="gridssXhProductsList"  >叶舟</p>
              <p class="gridssbbXhProductsList"  >￥45.60</p>
            </van-grid-item>
            <van-grid-item class="grid_box">
              <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/8978aab1-0547-4ab7-97fb-54b0c0130015.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
              <span>希望之地</span>
              <p class="gridssXhProductsList"  >叶舟</p>
              <p class="gridssbbXhProductsList"  >￥45.60</p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhDroductsListGridTwo",

    }
</script>

<style scoped>
  @import "../../assets/css/XhProductsList.css";

</style>
