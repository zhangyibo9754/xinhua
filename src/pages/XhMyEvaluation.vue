<template>
    <div class="XhMyEvaluation">
<!--      头部-->
      <XhMyEvaluation-top></XhMyEvaluation-top>
<!--      中间评论-->
      <my-XhMyEvaluation-inner></my-XhMyEvaluation-inner>
<!--      尾部-->
      <XhProductDetail-footer></XhProductDetail-footer>
    </div>
</template>

<script>
  import XhProductDetailfooter from '../components/productDetail/XhProductDetailfooter'
  import XhMyEvaluationtop from '../components/MyEvaluation/XhMyEvaluationtop'
  import myXhMyEvaluationinner from '../components/MyEvaluation/myXhMyEvaluationinner'
    export default {
        name: "XhMyEvaluation",
     data() {
      return {
        // active: 0
      };
    },
      components:{
        'XhMyEvaluation-top':XhMyEvaluationtop,
        'my-XhMyEvaluation-inner':myXhMyEvaluationinner,

        'XhProductDetail-footer':XhProductDetailfooter
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhMyEvaluation.css";

</style>
