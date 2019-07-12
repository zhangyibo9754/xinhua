<template>
      <van-submit-bar
        class="XhShoppingCartSubmit"
        :price="3050"
        button-text="去结算（1）"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked" class="AllChecked">全选</van-checkbox>
      </van-submit-bar>
</template>

<script>
    export default {
        name: "XhShoppingCartSubmit",
        data(){
          return{
            checked:true
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartSubmit{
    margin-bottom: 1rem;
  }
  .AllChecked{
    margin-left: 0.3rem;
  }
</style>
