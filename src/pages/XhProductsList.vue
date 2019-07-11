<template>
  <div class="XhProductsList">
<!--      首部-->
      <div class="list_topProductsList">
        <van-icon name="arrow-left" style="font-size: .6rem ;" background="#f7f7f7" />
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <van-icon name="qr" style="font-size: .6rem"/>
      </div>
<!--      综合-->
      <div class="dropdownProductsList">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <div class="SalesProductsList">
          <p>销量</p>
          <span class="volumeProductsList">
            <span>▲</span>
            <span>▼</span>
          </span>
        </div>
        <div class="SalesProductsList">

        <p>价格</p>
        <span class="volumeProductsList">
            <span>▲</span>
            <span>▼</span>
          </span>
        </div>

        <van-button type="primary" @click="showPopup" class="buttonProductsList">
            筛选
          </van-button>

        <van-popup v-model="show"    position="right" class="popup">
          <ul class="screen">
            <li>
            <h2>价格区间</h2>
            <div class="popup_box">
              <input type="text" value="最低价" >——<input type="text" value="最高价" >
            </div>
            </li>
            <li>
              <h2>品牌</h2>
            </li>
            <li>
              <h2>类别</h2>
            </li>
            <li>
              <h2>语种</h2>
              <p>中文</p>
            </li>
            <li >
              <h2>出版时间</h2>
              <div class="time">
                <p>2013-01-01</p>
                <p>2013-01-01</p>
                <p>2013-01-01</p>
              </div>
              <div class="time">
                <p>2013-01-01</p>
                <p>2013-01-01</p>
                <p>2013-01-01</p>
              </div>
              <div class="time">
                <p>2013-01-01</p>
                <p>2013-01-01</p>
                <p>2013-01-01</p>
              </div>
              <div class="time">
                <p>2013-01-01</p>
                <p>2013-01-01</p>
                <p>2013-01-01</p>
              </div>
            </li>
            <li>
              <h2>语言</h2>
              <p>汉语</p>
            </li>
            <li >
              <h2>作者</h2>
              <div class="time">
                <p>蔡东潘</p>
                <p>（明）吴承恩</p>
                <p>（明）罗贯中</p>
              </div>

            </li>
          </ul>
        </van-popup>
      </div>
      <div class="onlyProductsList">
        <p>仅看有货</p>
        <p>语种v</p>
        <p>出版v</p>
        <p>语言v</p>
      </div>
<!--    详情列表-->
      <div class="gridProductsList">

        <van-grid :border="false" :column-num="2"  :center="false" :gutter="10"  to="/ProductDetail">
          <van-grid-item class="grid_box">
            <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/9622ff16-0d3d-4a0a-9234-0b0d88ee37be.png?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
            <span>敦煌本纪（套装共2册）</span>
            <p style="color: #ccc">叶舟</p>
            <p style="color: #e61818">￥45.60</p>
          </van-grid-item>
          <van-grid-item class="grid_box">
            <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/8978aab1-0547-4ab7-97fb-54b0c0130015.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
            <span>希望之地</span>
            <p style="color: #ccc">陈楸帆</p>
            <p style="color: #e61818">￥45.60</p>
          </van-grid-item>
        </van-grid>
        <van-grid :border="false" :column-num="2"  :center="false" :gutter="10"  to="/ProductDetail">
          <van-grid-item class="grid_box">
            <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/9622ff16-0d3d-4a0a-9234-0b0d88ee37be.png?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
            <span>敦煌本纪（套装共2册）</span>
            <p style="color: #ccc">叶舟</p>
            <p style="color: #e61818">￥45.60</p>
          </van-grid-item>
          <van-grid-item class="grid_box">
            <van-image src="https://img1.xinhuashudian.com/images/2019/07/09/8978aab1-0547-4ab7-97fb-54b0c0130015.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" />
            <span>希望之地</span>
            <p style="color: #ccc">陈楸帆</p>
            <p style="color: #e61818">￥45.60</p>
          </van-grid-item>
        </van-grid>



</div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsList",
      data() {
        return {
          value1: 0,
          option1: [
            { text: '综合', value: 0 },
            { text: '新品优先', value: 1 },
          ],
          show: false
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhProductsList.css";

</style>
