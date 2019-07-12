<template>
  <div class="XhSearch">
    <div class="XhSearchHeader">
      <div class="SearchHeaderCenter">
        <input v-model="title"  style="display: block;width: 5.5rem;height:.56rem ; background: #FFFFFF;border: 0 !important;padding-left: .2rem;" type="text" placeholder="应物兄">
        <p>
          <van-icon name="search" v-if="!title" @click="search"/>
          <van-icon name="cross" v-if="title" @click="delKey"/>
        </p>
        <router-link to="">
          <span @click="$router.back()">取消</span>
        </router-link>
      </div>
    </div>
    <ul class="SearchBox"  v-if="title">
      <li v-for="(item,index) in pendingData" :key="index" class="rel">
        <span>{{item.name}}</span>
          <i class="abs">—></i>
      </li>
    </ul>
    <div class="XhSearchFooter" v-if="!title">
      <div class="SearchFooterFooter">
        <div class="XhSearchLately" v-show="history">
          <p><span style="font-size:.3rem ;font-weight:800 ;color: #74787a;">最近搜索</span>
            <van-icon name="delete" @click="delHistory"/>
          </p>
          <ul>
            <li><span>白鹿原</span></li>
          </ul>
        </div>
        <div class="XhSearchLately">
          <p><span style="font-size:.3rem ;font-weight:800 ;color: #74787a;">热门搜索</span></p>
          <ul>
            <li v-for="(before,index) in searchBefore" :key="index">
              <a href="">{{before}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../XinHuaApi'
  export default {
    name: "XhSearch",
    data() {
      return {
        title:"",
        flag:2,
        defaultKey:"",
        searchBefore: [],
        history:true,
        pendingData:[]
      }
    },
    created(){
      this.SearchBefore();
    },
    updated(){
      this.SearchPending()
    },
    methods:{
      Clear(){
        this.title=""
      },
      SearchBefore(){
        api.get('/api/xinhua/search/find/words').then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              // 成功时接收数据
              //     console.log(data.data.datas)
              this.defaultKey=data.data.datas.defaultWord
              this.searchBefore=data.data.datas.hotWords
            }else{
              // 失败时打印错误信息
              console.log(data.data.err)
            }
          }
        }).catch(err=>{
          // 请求错误返回错误信息
          console.log(err)
        })
      },
      search(){
        console.log(1);
      },
      delKey(){
        this.title=""
      },
      delHistory(){
        this.history=false;
      },
      SearchPending(){
        // var a=this;
        if(this.title){
          api.get('/api/xinhua/search/prompt',{keyword:this.title}).then(data=>{
            // 判断http请求状态码,200为请求成功
            if(data.status===200){
              // 判断接口请求是否成功 0为成功
              if(data.data.status===0){
                // 成功时接收数据
                // console.log(data.data.datas)
                this.pendingData=data.data.datas
              }else{
                // 失败时打印错误信息
                console.log(data.data.err)
              }
            }
          }).catch(err=>{
            // 请求错误返回错误信息
            console.log(err)
          })
        }

      },
    },
  }
</script>

<style scoped>
  .XhSearch{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
  }
  .XhSearch .XhSearchHeader{
    width: 100%;
    height: .88rem;
    float: left;
  }
  .XhSearch .XhSearchHeader .SearchHeaderCenter{
    width: 7.09rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .XhSearch .XhSearchHeader .SearchHeaderCenter p{
    width: .68rem;
    height:.56rem;
    background: #FFFFFF;
    font-size: .3rem;
    line-height: .66rem  !important;
    text-align: center;
    margin-right: .1rem;
    color: #999999;
    font-weight: 900;
  }
  .XhSearch .XhSearchHeader .SearchHeaderCenter span{
    font-size:.27rem ;
    color:black ;
  }
  .XhSearch .XhSearchFooter{
    width: 100%;
    float: left;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter{
    width: 7.09rem;
    margin: 0 auto;
  }
  .XhSearch  .SearchBox{
    width: 7.09rem;
    margin: .7rem  auto;
    text-align: left;
  }
  .XhSearch  .SearchBox li{
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    border-bottom: 2px #eeeeee solid;
    font-size: .3rem;
    color: #999999;
  }
  .XhSearch  .SearchBox li span{
    display: inline-block;
    width: 86%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .XhSearch  .SearchBox li i{
    right:0.1rem;
    top:0;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately{
    width: 100%;
    margin-top:.75rem ;
    float: left;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately p{
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: space-between;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately p .van-icon{
    font-size: .3rem  !important;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately ul{
    width: 100%;
    float: left;
    margin-top: .22rem;
    display: flex;
    flex-wrap: wrap;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately ul li{
    background: #eaebed;
    font-size: .29rem;
    margin-right: .23rem;
    margin-bottom: .23rem;
    height: .56rem;
    border-radius: .1rem;
  }
  .XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately ul li a{
    line-height: .56rem;
    margin:0 .23rem 0 .23rem;
    font-size: .3rem;
    color: #999999;
  }
</style>
