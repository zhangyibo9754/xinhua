<template>
    <div class="XhProductDetail">
<!--      首部-->
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
<!--      轮播图-->
      <div v-for="item in RotaryPlantingMap">
        <van-swipe :autoplay="3000" indicator-color=" #c62f2e" style="height: 7.58rem;" >
          <van-swipe-item> <img :src="item.imgs" alt="" style="height: 7.58rem;width: 100%;"> </van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>

        </van-swipe>
      </div>
<!--     收藏-->
      <div class="CollectionProductDetail">
        <div class="Collection-box" >
          <p>￥56.05</p>
          <span class="line-through">￥59.00</span><span class="Discount">9.5折</span>
        </div>
        <div>
          <van-icon name="like-o" style="font-size: .5rem"/>
          <p>收藏</p>
        </div>
      </div>
      <div class="TitleProductDetail">
      <p>就喜欢你看不惯我又干不掉我的样子(4)</p>
      <span>吾皇万睡官方联手人民文学出版社，携白茶新书《喜干4》重磅来袭！强强联合尽显高端品质！</span>
    </div>
<!--      优惠券-->
      <div class="XhProductDetail"></div>
      <ul class="CouponProductDetail">
        <li>
          <div>领劵
            <span>满60-5</span>
            <span>满100-10</span>
            <span>满30-2</span>
          </div>
          <span>></span>
        </li>
        <li> <span> <span>作者</span>  作者：白茶</span>
          <div>
            更多作品>
          </div>
        </li>
        <li> <span> <span>出版社</span>  人民文学出版社</span>
          <div>
            更多作品>
          </div>
        </li>
        <li> <span> <span>已选</span>   默认</span><span>></span>
        </li>
        <li>
          <span>送至   <span>北京   北京市 朝阳市</span></span>
          <p>有货</p>
          <span>></span>
        </li>
        <li>用户评论（0）<span>></span>       </li>


      </ul>
      <div class="XhProductDetail"></div>
<!--      图片详情-->
      <div class="detailsProductDetail" >
        <van-tabs type="card" >
          <van-tab title="图片详情" class="card_box" >
            <div v-for="a in details">
              <h2>{{a.tit}}</h2>
              {{a.name}}
            </div>
          </van-tab>
          <van-tab title="出版信息" border="1" class="card_box">

          </van-tab>
          <van-tab title="售后政策" class="card_box">
            <div v-for="b in card">
              <h2>{{b.tit}}</h2>
              {{b.name}}
              <p>{{b.pname1}}</p>
              <p>{{b.pname2}}</p>
              <p>{{b.pname3}}</p>
            </div>

          </van-tab>
        </van-tabs>
      </div>
<!--尾部-->
      <div class="detail-footer">
        <van-goods-action>
          <van-goods-action-icon
            icon="chat-o"
            text="客服"
            @click="onClickIcon"
          />
          <van-goods-action-icon
            icon="cart-o"
            text="购物车"
            @click="onClickIcon"
          />
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="onClickButton"
            class="shoppProductDetail"
          />
          <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="onClickButton"
            class="shoppingProductDetail"

          />
        </van-goods-action>
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
        details:[
          {
            tit:'内容推荐',
            name:'超人气漫画家白茶全新力作！吾皇巴扎黑一家爆笑来袭！《就喜欢你看不惯我又干不掉我的样子》\n' +
              '            系列漫画讲述了一只叫“吾皇”的胖猫和一只叫“巴扎黑”的萌狗和铲屎官少年的生活趣事。本书是\n' +
              '            《喜干》系作品第四部，《喜干4》延续了《喜干》系列漫画爆笑风格，新书中更加丰满的角色个\n' +
              '            性带来了更加丰富的故事情节。吾皇巴扎黑等漫画形象可萌可暖可傲娇，猫生哲学、神奇脑洞、一\n' +
              '            家人“温馨”场面……在爆笑的同时你会有不一样的人生思考！'
          },
          {
            tit:'作者简介',
            name:'白茶，畅销书作家，知名漫画家.国民IP"吾皇万睡"作者.著有畅销绘本: <就喜欢你看不惯我又干不掉我的样子>(2015) <就喜欢你看不惯我又干不掉我的样子2>(2016) <就喜欢你看不惯我又干不掉我的样子3>(2017)作品曾获中国动漫金龙奖,银河奖,星云奖等艺术奖项,本人获评亚洲书店论坛年度最热漫画作家.其以描绘新时代中国国民家庭生活情景的<喜干>系列图书长期位居畅销书排行榜前列,曾位列微博亚洲好书榜TOP1.白茶在微博,微信等线上平台拥有1000万粉丝,是重要的中国漫画自媒体.其创立的动漫品牌“吾皇万睡”获得国际授权业协会LIMA等颁发的“年度中国IP”.'
          },
          {
            tit:'目录',
            name:' 写在前面的话\n' +
              '            写真集\n' +
              '            一家之主我皇\n' +
              '            无可救药的少年\n' +
              '            造作专家爱德华·牛能\n' +
              '            有故事的王哥\n' +
              '            智商感人的巴扎黑\n' +
              '            让我怀疑人生的爹\n' +
              '            整整齐齐一家人\n' +
              '            神奇脑洞'
          }
        ],
        card:[
          {
            tit:'正品行货',
            name:'新华书店网上商城向您保证所售商品均为正品行货，所有商品开具电子发票。'
          },
          {
            tit:'售后服务承诺',
            pname1:'              1) 新华书店网上商城支持商品7天内无理由退换货（不影响二次销售），15天内可以换货，以客户收到商品第二日起计算。（食品、酒类商品等图书商品非质量问题不予退换）\n',
            pname2:'              2) 平台售后审核人员在客户提交申请后72小时之内完成审核。\n',
            pname3:'              3) 退换货业务均会在自接收到问题商品之日起7日之内处理完成，国家法定节假日不计算在内。\n'
          }
        ],


        active: 0,
      }
    },
    methods: {
      //    首部
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      },
    //  轮播图

    }
    }
</script>

<style scoped>
@import "../assets/css/XhProductDetail.css";
</style>
