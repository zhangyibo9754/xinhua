<template>
  <div class="classify pageBody">
    <header>
      头部搜索
    </header>
    <main class="flex" v-if="navList.length">
      <classify-nav :navList="navList" @changeList="changeList" />
      <div class="nav-right">
        <classify-list :bookList="bookList"/>
      </div>
    </main>
    <footer>
      尾部导航栏
    </footer>
  </div>
</template>

<script>
  //引入api
  import api from '.././XinHuaApi'
  //引入子组件
  import ClassifyNav from '.././components/classify/XhClassifyNav'
  import ClassifyList from '.././components/classify/XhClassifyList'
  export default {
    name: "XhClassify",
    components:{
      'classify-nav':ClassifyNav,
      'classify-list':ClassifyList
    },
    data(){
      return{
          navList:[],
          bookList:[],
          num:0
      }
    },
    methods: {
      // 请求接口，返回分类列表详情
      loadingClassifyData() {
        api.get('/api/xinhua/classification').then(data => {
          // 判断http请求状态码,200为请求成功
          if (data.status === 200) {
            // 判断接口请求是否成功 0为成功
            if (data.data.status === 0) {
              // 成功时接收数据
                  this.navList=data.data.datas.serviceData.body_2._DATA_;
                  this.changeList('0')
            } else {
              // 失败时打印错误信息
              console.log(data.data.err);
            }
          }
        }).catch(err => {
          // 请求错误返回错误信息
          console.log(err);
        });
      },
      // 点击实现数据的切换
      changeList(index){
        this.bookList=this.navList[index].children;
      }
    },
    created() {
      this.loadingClassifyData();
    }
  }
</script>

<style scoped>
 @import '.././assets/css/classify/classify.css';
</style>
