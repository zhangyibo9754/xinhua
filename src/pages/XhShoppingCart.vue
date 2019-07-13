<template>
  <div class="XhShoppingCart pageBody">
    <XhShoppingCartHeader></XhShoppingCartHeader>
    <main class="cart-mian">
      <XhShoppingCartProduct></XhShoppingCartProduct>
      <XhShoppingCartIntroduce></XhShoppingCartIntroduce>
    </main>
    <XhShoppingCartSubmit></XhShoppingCartSubmit>
    <!--底部-->
    <xh-footer></xh-footer>
  </div>
</template>

<script>
    import XhShoppingCartHeader from "@/components/shoppingCart/XhShoppingCartHeader"
    import XhShoppingCartProduct from "@/components/shoppingCart/XhShoppingCartProduct"
    import XhShoppingCartIntroduce from "@/components/shoppingCart/XhShoppingCartIntroduce"
    import XhShoppingCartSubmit from "@/components/shoppingCart/XhShoppingCartSubmit"
    import XhFooter from '../components/commons/XhFooter'
    export default {
        name: "XhShoppingCart",
        data(){
          return{
            checked:true,
            shopCart:[
              {
                id:1,
                name:"第四只手",
                price:"￥39.20",
                count:1,
                checked:true,
                dec:"　　这是一个不断失去自我的人，重新找回自我的故事。"
              },
              {
                id:2,
                name:"第四只手",
                price:"￥39.20",
                count:1,
                checked:true,
                dec:"　　这是一个不断失去自我的人，重新找回自我的故事。"
              },
              {
                id:1,
                name:"第四只手",
                price:"￥39.20",
                count:1,
                checked:true,
                dec:"　　这是一个不断失去自我的人，重新找回自我的故事。"
              }
            ]
          }
        },
        components:{
          XhShoppingCartHeader,
          XhShoppingCartProduct,
          XhShoppingCartIntroduce,
          XhShoppingCartSubmit,
          XhFooter
        }
    }
</script>

<style scoped>
  .cart-mian{
    flex: 1;
    overflow-y: auto;
  }
</style>
