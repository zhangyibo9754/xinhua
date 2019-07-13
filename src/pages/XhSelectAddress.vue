<template>
  <div class="xhSelectAddress">
    <!--  头部-->
    <div class="bannered-head">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span class="head-name">选择地址</span>
      <span class="management-words" @click="toConfirmOrder()">管理</span>
    </div>
    <!-- 头部结束-->
    <!--主体内容start-->
    <ul class="addressList">
      <li class="addressItem" v-for="(item,index) in list" :key="index" @click="selectSelf(index)">
        <van-checkbox class="margin-size" v-model="item.checked" checked-color="#c62f2e" icon-size="0.35rem">
          <p class="customerInfo">
            <span class="customer-name">{{item.name}}</span>
            <span class="customer-telPhone">{{item.tel}}</span>
            <span class="default-address" ref="address">默认地址</span>
          </p>
        </van-checkbox>
        <p class="customer-address">{{item.address}}</p>
      </li>

    </ul>
    <!--主体内容end-->

  </div>
</template>

<script>
  export default {
    name: "XhSelectAddress",
    data() {
      return {
        chosenAddressId: '1',
        isShow: 0,
        list: [
          {
            checked: true,
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          // {
          //   checked: false,
          //   id: '2',
          //   name: '李四',
          //   tel: '13000000000',
          //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          // },
          // {
          //   checked: false,
          //   id: '3',
          //   name: '李四',
          //   tel: '13000000000',
          //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          // },
          // {
          //   checked: false,
          //   id: '4',
          //   name: '李四',
          //   tel: '13000000000',
          //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          // },
        ]
      }
    },
    mounted() {
      this.defaultBgc()
    },
    methods: {
      selectSelf(index) {
        if (this.list.length === 1) {
          this.list[0].checked = true
        } else {
          this.list.forEach((item) => {
            item.checked = false;
          })
          this.$refs.address.forEach((item) => {
            item.style.backgroundColor = "#ffffff"
          })
          this.list[index].checked = true;
          this.$refs.address[index].style.backgroundColor = "#c62f2e"
        }
      },
      // 点击管理
      toConfirmOrder() {
        this.$router.push("/XhAddressManagement")
      },
      defaultBgc() {
        this.$refs.address[0].style.backgroundColor = "#c62f2e"
      }
    },
  }
</script>

<style scoped>
  @import "../assets/css/XhSelectAddress.css";
</style>
