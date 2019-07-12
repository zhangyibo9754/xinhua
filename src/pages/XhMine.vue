<template>
  <div class="pageBody">
    <div class="mine-content">
      <!-- XHheader -->
      <div class="XHheader">
        <div class="XHheader-one">
          <span class="icon iconfont">&#xe68d;</span>
          <span class="icon iconfont">&#xe633;</span>
        </div>
        <div class="XHheader-tow">
          <div class="XHheader-tow-one">
            <a href="">
              <img src="../assets/xhimg/error.ed5b6e5df12b3313.png">
            </a>
          </div>
          <div class="XHheader-tow-tow">
            <div class="XHheader-tow-tow-one"><a href=""><span>17398681195</span></a></div>
            <div class="XHheader-tow-tow-tow">
              <a href=""><img src="../../static/images/mine/xhimg/da93ada5-803a-48ab-9fd5-f7b0ad0c7108.png">
                <span>普通会员  0积分</span>
              </a>
            </div>
          </div>
        </div>
        <div class="XHheader-tree">
          <div class="XHheader-tree-one">
            <router-link to="/XhMyOrder">
              <span class="icon iconfont">&#xe607;</span>
              <span>待付款</span>
            </router-link>
            <router-link to="/XhMyOrder">
              <span class="icon iconfont">&#xe615;</span>
              <span>待发货</span>
            </router-link>
            <router-link to="/XhMyOrder">
              <span class="icon iconfont">&#xe620;</span>
              <span>待收货</span>
            </router-link>
          </div>
          <img src="../assets/xhimg/h.png" />
          <div class="XHheader-tree-one">
            <router-link to="/XhEvaluationCentre">
              <span class="icon iconfont">&#xe630;</span>
              <span>待评价</span>
            </router-link>
            <router-link to="/XhAfterSale">
              <span class="icon iconfont">&#xe615;</span>
              <span>售后</span>
            </router-link>
            <router-link to="/XhMyOrder">
              <span>全部订单</span>
              <span class="icon iconfont">&#xe62d;</span>
            </router-link>
          </div>
        </div>
      </div>
      <!-- XHnav -->
      <div class="XHnav">
        <router-link to="/XhDiscounts">
          <h6>2</h6>
          <h5>优惠卷</h5>
        </router-link>
        <img src="../../static/images/mine/xhimg/s.png" />
        <a href="">
          <h6>0</h6>
          <h5>礼品卡</h5>
        </a>
        <img src="../../static/images/mine/xhimg/s.png" />
        <a href="">
          <h6>0</h6>
          <h5>我的收藏</h5>
        </a>
        <img src="../../static/images/mine/xhimg/s.png" />
        <a href="">
          <h6>6</h6>
          <h5>浏览历史</h5>
        </a>
      </div>
      <!-- XHseacter -->
      <a href="">
        <div class="XHseacter">
          <div class="XHseacter-tree">
            <span class="icon iconfont">&#xe678;</span>
          </div>
          <div class="XHseacter-one">
            <span>我的学习</span>
          </div>
          <div class="XHseacter-two">
            <span class="icon iconfont " >&#xe62d;</span>
          </div>
        </div>
      </a>

      <router-link to="/XhLibrary">
        <div class="XHseacter">
          <div class="XHseacter-tree">
            <span class="icon iconfont">&#xe67c;</span>
          </div>
          <div class="XHseacter-one">
            <span>我的家庭图书馆</span>
          </div>
          <div class="XHseacter-two">
            <span class="icon iconfont " >&#xe62d;</span>
          </div>

        </div>
      </router-link>


    </div>

    <!--底部-->
    <xh-footer></xh-footer>

  </div>
</template>

<script>
  import XhFooter from '../components/commons/XhFooter'
  export default {
    name: "XHmine",
    components:{
      XhFooter
    },
  }
</script>

<style scoped>
  .mine-content{
    flex:1;
    overflow-y:auto;
    background: #f7f7f7;
  }
  /* XHheader */
  .XHheader{
    width: 100%;
    height: 6.6rem;
    background: url(../../static/images/mine/xhimg/user-center.43d567e56c1eb804.png) no-repeat;
    background-size:100%;
    border-top:1px solid darkblue
  }
  .XHheader-one{
    width: 2rem;
    height: .72rem;
    float: right;
    margin-top: .2rem;
    margin-right: .1rem;
    display: flex;
  }
  .XHheader-one span{
    font-size: 30px;
    color: white;
    margin-left: .25rem;

  }
  .XHheader-tow{
    width: 4.9rem;
    height: 1.68rem;
    margin-top: 1.5rem;
    margin-left: .5rem;
  }
  .XHheader-tow-one{
    width: 1.68rem;
    height:1.68rem;
    float: left;
  }
  .XHheader-tow-one img{
    width: 1.68rem;
    height: 1.68rem;
  }
  .XHheader-tow-tow{
    width: 3rem;
    height: 1.68rem;
    float: right;
  }
  .XHheader-tow-tow-one{
    width: 3rem;
    height: .6rem;
    margin-top: .15rem;
  }
  .XHheader-tow-tow-one span{
    font-size: 20px;
    line-height: .6rem;
    letter-spacing: .02rem;
    color: white;
  }
  .XHheader-tow-tow-tow{
    width: 3rem;
    height: .5rem;
    background: #771b26;
    margin-top: .2rem;
    border-radius: 25px;
    display: flex;
  }
  .XHheader-tow-tow-tow img{
    width: .45rem;
    height: .45rem;
    margin-left: .1rem;
    vertical-align: middle;
  }
  .XHheader-tow-tow-tow span{
    font-size: 16px;
    color: white;
    line-height: .1rem;
    vertical-align: middle;
    margin-left:.05rem;
    line-height: .5rem;
  }
  .XHheader-tree{
    width: 7rem;
    height: 2.88rem;
    background: #ffffff;
    margin-top: .5rem;
    margin-left: .25rem;
    border-radius: 10px;
  }
  .XHheader-tree-one{
    width: 7rem;
    height: 1.2rem;
    display: flex;
  }
  .XHheader-tree-one a{
    display: block;
    flex: 1;
  }
  .XHheader-tree-one span{
    font-size: 17px;
    color: #999999;
    line-height: 1.2rem;
    margin-right: .05rem;
    font-weight: 100;
  }
  .XHheader-tree img{
    width: 6.5rem;
    height: .1rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
  }
  /* XHnav */
  .XHnav{
    width: 7rem;
    height: 1.46rem;
    background: #ffffff;
    margin-top: .22rem;
    margin-left: .25rem;
    border-radius: 10px;
    display: flex;
  }
  .XHnav a{
    flex: 1;
  }
  .XHnav h6{
    color: #c93434;
    font-size: 16px;
    line-height: .8rem;
    font-weight: 100;
  }
  .XHnav h5{
    color: #747879;
    font-size: 16px;
    font-weight: 100;
  }
  .XHnav img{
    height: 1rem;
    margin-top: .25rem;
  }
  /* XHseacter */
  .XHseacter{
    width: 7rem;
    height: 1.4rem;
    background: #ffffff;
    margin-top: .22rem;
    margin-left: .25rem;
    border-radius: 10px;
    display: flex;
  }
  .XHseacter span{
    font-size: 19px;
    line-height: 1.4rem;
    color: #1e1e1e;
    font-weight: 100;
  }

  .XHseacter-one{
    width: 6rem;
    height: 1.4rem;
    float: left;
    margin-right: 1rem;
    text-align: left;
    margin-left: .2rem;
  }
  .XHseacter-two{
    width: 1rem;
    height: 1.4rem;
    float: right;
    margin-left: 1.5rem;
  }
  .XHseacter-tree{
    width: .5rem;
    height: 1.4rem;
    float: left;
    margin-left: .3rem;
  }

</style>
