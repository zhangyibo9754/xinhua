<template>
  <div class="XhProductsList">
<!--      首部-->
    <div class="XhProductDetailtop">
      <router-link to="/">
        <van-icon name="arrow-left" class="topicon"/>
      </router-link>
      <div>
        <input type="text" name="" id="">
        <van-icon name="search" class="fangdajing" />
      </div>
      <div @click="showCount">
        <van-icon name="qr" v-if="shows" class="topicon"  />
        <van-icon name="apps-o" v-else class="topicon"  />
      </div>
    </div>
<!--      综合-->
      <div class="dropdownProductsList">
        <div class="dropdown-menu">
          <van-dropdown-menu active-color="#c62f2e" class="aaa">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu >
          <van-dropdown-menu active-color="#c62f2e" class="aaa">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <van-dropdown-menu active-color="#c62f2e" class="aaa">
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
        </div>

<!--                <div class="SalesProductsList">-->
<!--          <p>销量</p>-->
<!--          <span class="volumeProductsList">-->
<!--            <span>▲</span>-->
<!--            <span>▼</span>-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="SalesProductsList">-->

<!--        <p>价格</p>-->
<!--        <span class="volumeProductsList">-->
<!--            <span>▲</span>-->
<!--            <span>▼</span>-->
<!--          </span>-->
<!--        </div>-->

        <van-button type="primary" @click="showPopup"  class="buttonProductsList">
            筛选
          </van-button>
        <van-popup v-model="show"    position="right" class="popup">
          <ul class="screen">
            <li>
            <h2>价格区间</h2>
            <div class="popup_box">
              <input type="text" placeholder="最低价" > &nbsp; —— &nbsp; <input type="text" placeholder="最高价" >
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
<!--    仅看有货-->
      <div class="onlyProductsList">
<!--        <p>仅看有货</p>-->
        <div class="Instockss">
          <van-dropdown-menu active-color="#c62f2e" class="Instock">
            <van-dropdown-item v-model="value" :options="options" />
          </van-dropdown-menu>
        </div>
<!--        <p>语种  v</p>-->
        <div class="Instocks">
          <van-dropdown-menu active-color="#c62f2e" class="Instock">
            <van-dropdown-item title="语种" ref="item" >
              <van-switch-cell v-model="switch1" title="中文" />
              <div style="display: flex;justify-content: space-around">
                <van-button block type="info" @click="onConfirm"  class="Resets" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="Reset">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
<!--        <p>出版  v</p>-->
        <div class="Instocks">
          <van-dropdown-menu active-color="#c62f2e" class="Instock">
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
        </div>
<!--        <p>语言  v</p>-->
        <div class="Instocks">
          <van-dropdown-menu active-color="#c62f2e" class="Instock">
            <van-dropdown-item title="语言" ref="item" >
              <van-switch-cell v-model="switch2" title="汉语" />
              <div style="display: flex;justify-content: space-around">
                <van-button block type="info" @click="onConfirm"  class="Resets" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="Reset">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
<!--    详情列表-->
    <gridproductsList-one v-show="shows"></gridproductsList-one>
    <div v-show="!shows">
      <div class="gridproductsListsmall"  >
        <div class="pri_boxs">
          <img src="https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="">
        </div>
        <div class="gridsmall_box">
          <p style="font-size: .3rem">就喜欢你看不惯我又干不掉我的样子(4)</p>
          <span style="color: #ccc">作者：白茶</span>
          <p style="color: #c62f2e;font-size: .35rem;padding-top: .25rem">￥56.05</p>
        </div>
      </div>
      <div class="gridproductsListsmall"  >
        <div class="pri_boxs">
          <img src="https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="">
        </div>
        <div class="gridsmall_box">
          <p style="font-size: .3rem">就喜欢你看不惯我又干不掉我的样子(4)</p>
          <span style="color: #ccc">作者：白茶</span>
          <p style="color: #c62f2e;font-size: .35rem;padding-top: .25rem">￥56.05</p>
        </div>
      </div>
      <div class="gridproductsListsmall"  >
        <div class="pri_boxs">
          <img src="https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="">
        </div>
        <div class="gridsmall_box">
          <p style="font-size: .3rem">就喜欢你看不惯我又干不掉我的样子(4)</p>
          <span style="color: #ccc">作者：白茶</span>
          <p style="color: #c62f2e;font-size: .35rem;padding-top: .25rem">￥56.05</p>
        </div>
      </div>
      <div class="gridproductsListsmall"  >
        <div class="pri_boxs">
          <img src="https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="">
        </div>
        <div class="gridsmall_box">
          <p style="font-size: .3rem">就喜欢你看不惯我又干不掉我的样子(4)</p>
          <span style="color: #ccc">作者：白茶</span>
          <p style="color: #c62f2e;font-size: .35rem;padding-top: .25rem">￥56.05</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gridproductsList from '../components/productsList/gridproductsList'
    export default {
        name: "XhProductsList",
      data() {
        return {
          value1: 0,
          value2: 0,
          value3: 0,
          option1: [
            { text: '综合', value: 0 },
            { text: '新品优先', value: 1 },
          ],
          option2: [
            { text: '销量', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          option3: [
            { text: '价格', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          show: false,
          shows:true,
          value: 0,
          switch1: false,
          switch2: false,
          option: [
            { text: '出版..', value: 0 },
            { text: '2018-01-01', value: 1 },
            { text: '2017-01-01', value: 2 },
            { text: '2016-04-01', value: 3 },
            { text: '2019-01-01', value: 4 },
            { text: '2017-05-01', value: 5 },
            { text: '2019-03-01', value: 6 },
            { text: '2018-07-01', value: 7 },
            { text: '2015-01-01', value: 8 },
            { text: '2016-06-01', value: 9 },
            { text: '2013-01-01', value: 10 },
          ],
          options: [
            { text: '仅看有货', value: 0 },
          ]
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        },
        showCount(){
          this.shows = !this.shows;
        },
        onConfirm() {
          this.$refs.item.toggle();
        }
      },
      components:{
        'gridproductsList-one':gridproductsList,
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhProductsList.css";

</style>
