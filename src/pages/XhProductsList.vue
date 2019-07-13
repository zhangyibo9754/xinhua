<template>
  <div class="XhProductsList">
<!--      首部-->
    <XhProductsList-top @showCountaa="showCount"></XhProductsList-top>
<!--      综合-->
    <XhProductsList-dropdown></XhProductsList-dropdown>
<!--    仅看有货-->
    <XhProductsList-only></XhProductsList-only>
<!--    详情列表-->
    <gridproductsList-one v-show="!showing"  ></gridproductsList-one>
    <XhDroductsList-Grid-Two   v-show="showing"></XhDroductsList-Grid-Two>

  </div>



</template>

<script>
  import gridproductsList from '../components/productsList/XhProductsListgrid'
  import XhDroductsListGridTwo from '../components/productsList/XhDroductsListGridTwo'
  import XhProductsListtop from '../components/productsList/XhProductsListtop'
  import XhProductsListdropdown from '../components/productsList/XhProductsListdropdown'
  import XhProductsListonly from '../components/productsList/XhProductsListonly'
    export default {
        name: "XhProductsList",
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
      },
      components:{
        'gridproductsList-one':gridproductsList,
        'XhDroductsList-Grid-Two':XhDroductsListGridTwo,
        'XhProductsList-top':XhProductsListtop,
        'XhProductsList-dropdown':XhProductsListdropdown,
        'XhProductsList-only':XhProductsListonly,
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhProductsList.css";

</style>
