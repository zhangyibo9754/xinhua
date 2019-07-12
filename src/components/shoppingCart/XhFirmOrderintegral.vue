<template>
  <div class="XhFirmOrderFreight">
    <div class="XhFirmOrderFreight-wrapper">
      <div class="XhFirmOrderFreight-left">
        <p class="XhFirmOrderFreight-left-text">积分</p>
        <p class="XhFirmOrderFreight-left-desc"></p>
      </div>
      <div class="XhFirmOrderFreight-right">
        <div class="XhFirmOrderFreight-right-price-wrapper">
          <p class="XhFirmOrderFreight-right-price">满1000积分可使用</p>
        </div>
        <div class="XhFirmOrderFreight-right-icon-wrapper">
          <van-icon name="warning-o" />
        </div>
      </div>
    </div>
    <div class="XhFirmOrderintegral-Residual-Integral">
      账户共0积分
    </div>

   
  </div>
</template>


<script>
export default {
  name : 'XhFirmOrderintegral'
}
</script>

<style scoped>
  .XhFirmOrderFreight {
    margin-top: .2rem;
    background: #fff;
    font-size: .3rem;
    padding-top: .2rem;
  }
  .XhFirmOrderFreight-wrapper{
    display: flex;
    justify-content:space-between;
  }
  .XhFirmOrderFreight-left {
    margin-left: .3rem;
    display: flex;
  }
  .XhFirmOrderFreight-right {
    display: flex;
    color: #999;
  }
  .XhFirmOrderFreight-left-desc {
    color: #999;
    margin-left: .2rem;

  }
  .XhFirmOrderFreight-right-icon-wrapper {
    margin-right: .3rem;
    margin-left: .2rem;
  }
  .XhFirmOrderintegral-Residual-Integral{
    text-align: right;
    margin-right: .3rem;
    font-size: .2rem;
    color: #999;
  }
</style>



