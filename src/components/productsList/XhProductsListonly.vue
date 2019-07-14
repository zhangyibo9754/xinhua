<template>
  <!--      仅看有货-->
  <div>
      <div class="onlyProductsList">
        <!--        <p>仅看有货</p>-->
        <div class="InstockssonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item v-model="value" :options="options" />
          </van-dropdown-menu>
        </div>
        <!--        <p>语种  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item title="语种" ref="item" >
              <van-switch-cell v-model="switch1" title="中文" />
              <div class="onlyProductsListchian"  >
                <van-button block type="info" @click="onConfirm"  class="ResetsonlyProductsList" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="ResetonlyProductsList">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
        <!--        <p>出版  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
        </div>
        <!--        <p>语言  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item title="语言" ref="item" >
              <van-switch-cell v-model="switch2" title="汉语" />
              <div  class="onlyProductsListchian">
                <van-button block type="info" @click="onConfirm"  class="ResetsonlyProductsList" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="ResetonlyProductsList">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsListonly",
      data() {
        return {
          value1: 0,
          value2: 0,
          value3: 0,
          option1: [
            { text: '综合', value: 0 },
            { text: '新品优先', value: 1 },
          ],
          option2: [
            { text: '销量', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          option3: [
            { text: '价格', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          show: false,
          shows:true,
          value: 0,
          switch1: false,
          switch2: false,
          option: [
            { text: '出版..', value: 0 },
            { text: '2018-01-01', value: 1 },
            { text: '2017-01-01', value: 2 },
            { text: '2016-04-01', value: 3 },
            { text: '2019-01-01', value: 4 },
            { text: '2017-05-01', value: 5 },
            { text: '2019-03-01', value: 6 },
            { text: '2018-07-01', value: 7 },
            { text: '2015-01-01', value: 8 },
            { text: '2016-06-01', value: 9 },
            { text: '2013-01-01', value: 10 },
          ],
          options: [
            { text: '仅看有货', value: 0 },
          ]
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        },
        showCount(){
          this.shows = !this.shows;
        },
        onConfirm() {
          this.$refs.item.toggle();
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductsList.css";

</style>
