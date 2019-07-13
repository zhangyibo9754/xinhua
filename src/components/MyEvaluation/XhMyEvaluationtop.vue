<template>
    <div>
      <div class="XhProductDetailtop">
        <router-link to="/XhProductDetail">
          <van-icon name="arrow-left" class="topiconXhProductDetailtop"/>
        </router-link>
        <span>评价</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhMyEvaluationtop",
      data() {
        return {
          active: 0
        };
      },
    }
</script>

<style scoped>
  @import "../../assets/css/XhMyEvaluation.css";

</style>
