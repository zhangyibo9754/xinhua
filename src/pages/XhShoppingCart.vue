<template>
  <div class="XhShoppingCart">
    <XhShoppingCartHeader></XhShoppingCartHeader>
    <XhShoppingCartProduct></XhShoppingCartProduct>
    <XhShoppingCartIntroduce></XhShoppingCartIntroduce>
    <XhShoppingCartSubmit></XhShoppingCartSubmit>
  </div>
</template>

<script>
    import XhShoppingCartHeader from "@/components/shoppingCart/XhShoppingCartHeader"
    import XhShoppingCartProduct from "@/components/shoppingCart/XhShoppingCartProduct"
    import XhShoppingCartIntroduce from "@/components/shoppingCart/XhShoppingCartIntroduce"
    import XhShoppingCartSubmit from "@/components/shoppingCart/XhShoppingCartSubmit"
    export default {
        name: "XhShoppingCart",
        components:{
          XhShoppingCartHeader,
          XhShoppingCartProduct,
          XhShoppingCartIntroduce,
          XhShoppingCartSubmit
        }
    }
</script>

<style scoped>

</style>
