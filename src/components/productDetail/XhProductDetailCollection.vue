<template>
<!--  收藏-->
    <div>
      <div class="CollectionProductDetail">
        <div class="Collection-box" >
          <p>￥56.05</p>
          <span class="line-through">￥59.00</span><span class="DiscountCollectionProductDetail">9.5折</span>
        </div>
        <div @click="showCount" class="heartProductDetail">
          <div>
            <van-icon name="like-o"  v-show="showing" class="bProductDetail"  />
            <p v-show="showing">收藏</p>
          </div>
          <div v-show="!showing"  >
            <van-icon name="like" v-if="!showing" color="#c62f2e" style="font-size: .5rem"/>
            <p>已收藏</p>
          </div>
        </div>
      </div>
      <div class="TitleProductDetail">
        <p>就喜欢你看不惯我又干不掉我的样子(4)</p>
        <span>吾皇万睡官方联手人民文学出版社，携白茶新书《喜干4》重磅来袭！强强联合尽显高端品质！</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductDetailCollection",
      data() {
        return {
          // show: false,
          showing:true,
        }
      },
      methods: {
        showCount(){
          this.showing = !this.showing;
          // console.log(this.showing);
        },
      }
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductDetail.css";

</style>
