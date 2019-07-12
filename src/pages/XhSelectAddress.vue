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
  /*页面背景*/
  .xhSelectAddress {
    height: 100%;
    overflow: hidden;
    background-color: #f7f7f7;
  }

  /*头部样式*/
  .bannered-head {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
  }

  .icon-fanhui {
    font-size: 0.3rem;
    color: #c62f2e;
  }

  .head-name {
    font-size: 0.32rem;
  }

  .management-words {
    font-size: 0.3rem;
    color: #363433;
  }

  /*主体内容样式*/
  .addressList {
    padding: 0.3rem 0.2rem;
  }

  .addressItem {
    /*height: 1.6rem;*/
    background: #fff;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
  }

  .margin-size {
    margin: 0 0.2rem;
  }

  .customerInfo {
    width: 6.1rem;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.26rem;
  }

  span.default-address {
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #ffffff;
    border-radius: 0.1rem;
    color: #fff;
  }

  span.default-address:nth-child(1) {
    background-color: #c62f2e;
  }

  .customer-address {
    font-size: 0.26rem;
    text-align: left;
    margin-left: 0.74rem;

  }
</style>
