<template>
<<<<<<< HEAD
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
=======
    <div class="XhCreateAddress-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">新建地址</span>
      </div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-search-result
        :search-result="searchResult"
        @save="onSave"
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d
      />
    </div>
</template>

<script>

    export default {
<<<<<<< HEAD
      name: "XhCreateAddress",
      data() {
        return {
          areaList,
=======
        name: "XhCreateAddress",
      data() {
        return {
          areaList:{},
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d
          searchResult: []
        }
      },

      methods: {
        onSave() {
<<<<<<< HEAD
          Toast('save');
        },
        onDelete() {
          Toast('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [{
              name: '黄龙万科中心',
              address: '杭州市西湖区'
            }];
          } else {
            this.searchResult = [];
          }
        }
      }

=======
          this.$toast('save');
        },
      }
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d
    }
</script>

<style scoped>
  .XhCreateAddress-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  .XhCreateAddress-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .XhCreateAddress-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhCreateAddress-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
</style>
