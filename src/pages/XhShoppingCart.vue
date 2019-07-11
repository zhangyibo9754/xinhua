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
