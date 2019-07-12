<template>
    <div class="XhProductDetail">
<!--      首部-->
      <div class="XhProductDetailtop">
        <router-link to="/">
          <van-icon name="arrow-left" class="topicon"/>
        </router-link>
        <span>商品</span>
        <span>详情</span>
        <span>评价</span>
        <van-icon name="ellipsis" @click="showCount" class="topicon"/>
      </div>
      <!--弹出消息首页搜索-->
      <div class="bigboxXhProductDetail" v-if="shows">
        <router-link to="/XhMessage">
          <p>消息</p>
        </router-link>
        <router-link to="/">
          <p>首页</p>
        </router-link>
        <router-link to="/XhSearch">
          <p>搜索</p>
        </router-link>
        <p>我的收藏</p>
        <p>浏览记录</p>
      </div>
<!--      轮播图-->
      <div class="swipeXhProductDetailtop"  v-for="item in RotaryPlantingMap">
        <van-swipe :autoplay="3000" indicator-color=" #c62f2e" style="height: 7.58rem;" >
          <van-swipe-item> <img :src="item.imgs" alt="" style="height: 7.58rem;width: 100%;"> </van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
        </van-swipe>
      </div>
<!--     收藏-->
      <div class="CollectionProductDetail">
        <div class="Collection-box" >
          <p>￥56.05</p>
          <span class="line-through">￥59.00</span><span class="Discount">9.5折</span>
        </div>
          <div >
          <van-icon name="like-o" style="font-size: .5rem"/>
          <p>收藏</p>
        </div>

<!--        <div v-show="!showz" style="color: #c62f2e">-->
<!--          <van-icon name="like" style="font-size: .5rem"/>-->
<!--          <p>已收藏</p>-->
<!--        </div>-->
      </div>
      <div class="TitleProductDetail">
      <p>就喜欢你看不惯我又干不掉我的样子(4)</p>
      <span>吾皇万睡官方联手人民文学出版社，携白茶新书《喜干4》重磅来袭！强强联合尽显高端品质！</span>
    </div>
<!--     灰条条-->
      <div class="XhProductDetail"></div>
      <!--      优惠券~用户~出版-->
      <ul class="CouponProductDetail">
        <li>
          <div>领劵
            <span>满60-5</span>
            <span>满100-10</span>
            <span>满30-2</span>
          </div>
          <span style="color: rgb(153, 153, 153)">></span>
        </li>

          <router-link to="/XhProductsList" tag="li" >
<!--        <li>-->
            <div>
              <span>
                作者
                <span style="color: rgb(153, 153, 153)">作者：白茶</span>
              </span>
            </div>
            <div style="color: rgb(153, 153, 153)">
              更多作品
              <span>></span>
            </div>
<!--        </li>-->
          </router-link>

          <router-link to="/XhProductsList" tag="li">
<!--        <li>-->
          <div>
            <span>
             出版社
              <span style="color: rgb(153, 153, 153)">人民文学出版社</span>
          </span>
          </div>
          <div style="color: rgb(153, 153, 153)">
            更多作品 <span>></span>
          </div>
<!--        </li>-->
          </router-link>
        <li>
          <div>
            <span>
              已选
            <span style="color: rgb(153, 153, 153)">默认</span>
          </span>
          </div>
          <van-button
          type="primary"
          @click="showPopups"
        >
        </van-button>
          <span style="color: rgb(153, 153, 153);text-align: right">></span>

        </li>
        <van-popup
          v-model="show"
          position="bottom">
          <div class="bottomXhProductsList">
            <div class="imgboxXhProductsList">
              <img src="https://img1.xinhuashudian.com/images/2019/07/09/9622ff16-0d3d-4a0a-9234-0b0d88ee37be.png?x-oss-process=image/resize,m_lfit,limit_0,w_344,h_344" alt="">
            </div>
            <div class="textXhProductsList">
              <p style="color:#c62f2e ;font-size: .4rem">￥47.03</p>
              <p style="color: #ccc ;font-size: .28rem">
                <span>已选</span>
                <span>默认</span>
              </p>
            </div>
          </div>
          <div style="display: flex;justify-content: space-around;padding-top: .1rem">
            <span style="font-size: .3rem">数量</span><van-stepper v-model="value" step="2" />
          </div>
          <div class="showProductsList">
            <p style="background-color: #feb13b">加入购物车</p>
            <p style="background-color: #e61818">立即购买</p>
          </div>

        </van-popup>

<!--        <li class="addXhProductsList">-->
<!--          <div>-->
<!--            <span>送至</span>-->
<!--            <div  class="haveli">-->
<!--              <div>-->
<!--                <van-icon name="location" class="bricon"/>-->
<!--                <span style="color: rgb(153, 153, 153)">北京   北京市  朝阳市</span>-->
<!--              </div>-->
<!--              <p style="color:  #c62f2e">有货</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <van-button-->
<!--            type="primary"-->
<!--            v-model="show"-->
<!--            @click="showPopup">-->
<!--          </van-button>-->
<!--          <span style="color: rgb(153, 153, 153);line-height: 1.6rem"> ></span>-->
<!--          <van-popup-->
<!--            v-model="show"-->
<!--            position="bottom"-->
<!--          >-->
<!--            <van-area :area-list="areaList" />-->
<!--          </van-popup>-->
<!--       </li>-->
        <li>
          用户评论（0）
          <span style="color: rgb(153, 153, 153)">></span>
        </li>
      </ul>
<!--      灰条条-->
      <div class="XhProductDetail"></div>
<!--      图片详情-->
      <div class="detailsProductDetail" >
        <van-tabs type="card">
          <van-tab title="图文详情" title-active-color="#c62f2e">
            <div  class="table_box">
              <h4>内容推荐</h4>
              <p>
                   超人气漫画家白茶全新力作！吾皇巴扎黑一家爆笑来袭！《就喜欢你看不惯我又干不掉我的样子》系列漫画讲述了一只叫“吾皇”的胖猫和一只叫“巴扎黑”的萌狗和铲屎官少年的生活趣事。本书是《喜干》系作品第四部，《喜干4》延续了《喜干》系列漫画爆笑风格，新书中更加丰满的角色个性带来了更加丰富的故事情节。吾皇巴扎黑等漫画形象可萌可暖可傲娇，猫生哲学、神奇脑洞、一家人“温馨”场面……在爆笑的同时你会有不一样的人生思考！
              </p>
              <h4>作者简介</h4>
              <p>
                白茶，畅销书作家，知名漫画家。
                国民IP“吾皇万睡”作者。
                著有畅销绘本：
                《就喜欢你看不惯我又干不掉我的样子》（2015）
                《就喜欢你看不惯我又干不掉我的样子2》（2016）
                《就喜欢你看不惯我又干不掉我的样子3》（2017）
                作品曾获中国动漫金龙奖、银河奖、星云奖等艺术奖项，本人获评亚洲书店论坛年度最热漫画作家。
                其以描绘新时代中国国民家庭生活情景的《喜干》系列图书长期位居畅销书排行榜前列，曾位列微博亚洲好书榜TOP1。
                白茶在微博、微信等线上平台拥有1000万粉丝，是重要的中国漫画自媒体。其创立的动漫品牌“吾皇万睡”获得国际授权业协会LIMA等颁发的“年度中国IP”。
              </p>
              <h4>目录</h4>
              <p>
                写在前面的话
                写真集
                一家之主我皇
                无可救药的少年
                造作专家爱德华·牛能
                有故事的王哥
                智商感人的巴扎黑
                让我怀疑人生的爹
                整整齐齐一家人
                神奇脑洞
              </p>
            </div>

          </van-tab>
          <van-tab title="出版信息">
            <div class="table_tr">
              <table class="table_boxs" >
                <tr class="colspan">
                  <th colspan="2">基础信息</th>
                </tr>
                <tr>
                  <th>作者</th>
                  <th>作者：白茶</th>
                </tr>
                <tr>
                  <th>出版</th>
                  <th>人民文学出版社</th>
                </tr>
                <tr>
                  <th>出版时间</th>
                  <th>2019-04-01</th>
                </tr>
              </table>
            </div>
            <div class="table_tr">
              <table class="table_boxs" >
                <tr class="colspan">
                  <th colspan="2">普通信息</th>
                </tr>
                <tr>
                  <th>出地</th>
                  <th>北京</th>
                </tr>
                <tr>
                  <th>出次</th>
                  <th>1</th>
                </tr>
                <tr>
                  <th>印次</th>
                  <th>1</th>
                </tr>
                <tr>
                  <th>印刷时间</th>
                  <th>2019-04-01</th>
                </tr>
                <tr>
                  <th>首版时间</th>
                  <th>2019-04-01</th>
                </tr>
                <tr>
                  <th>包装</th>
                  <th>平装</th>
                </tr>
                <tr>
                  <th>正本语种</th>
                  <th>汉</th>
                </tr>
                <tr>
                  <th>页数</th>
                  <th>237</th>
                </tr>
                <tr>
                  <th>印张</th>
                  <th>15.5</th>
                </tr>
                <tr>
                  <th>印数</th>
                  <th>300000</th>
                </tr>
                <tr>
                  <th>长</th>
                  <th>200</th>
                </tr>
              </table>
            </div>

          </van-tab>
          <van-tab title="售后政策">
            <div class="table_box">
              <h4>正品行货</h4>
              <p>
                新华书店网上商城向您保证所售商品均为正品行货，所有商品开具电子发票。
              </p>
              <h4>售后服务承诺 </h4>
              <p>
                1) 新华书店网上商城支持商品7天内无理由退换货（不影响二次销售），15天内可以换货，以客户收到商品第二日起计算。（食品、酒类商品等图书商品非质量问题不予退换）
              </p>
              <p>
                2) 平台售后审核人员在客户提交申请后72小时之内完成审核。
              </p>
              <p>
                3) 退换货业务均会在自接收到问题商品之日起7日之内处理完成，国家法定节假日不计算在内。
              </p>
            </div>
          </van-tab>
        </van-tabs>
      </div>
<!--尾部-->
      <div class="footerProductDetail">
        <div class="shoppProductDetail">
          <router-link to="/">
            <van-icon name="service-o" class="footerDetail" />
            <span>联系客服</span>
          </router-link>

        </div>
        <div>
          <router-link to="/XhShoppingCart">
            <van-icon name="shopping-cart-o" class="footerDetail" />
            <span>购物车</span>
          </router-link>

        </div>
        <p style="background-color: #feb13b">加入购物车</p>
        <p style="background-color: #e61818">立即购买</p>
      </div>

    </div>
</template>

<script>
  export default {
        name: "XhProductDetail",
    data(){
      return{
        RotaryPlantingMap:[
          {
            imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
            imgs2:'https://img5.xinhuashudian.com/images/4520633-jctp.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
            imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
            imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750'
          },
        ],
        active: 0,
        shows:false,

        show: false
      }
    },
    methods: {
      showCount() {
        this.shows = !this.shows;
      },

      showPopups() {
        this.show = true;
      }
    }
    }
</script>

<style scoped>
@import "../assets/css/XhProductDetail.css";
</style>
