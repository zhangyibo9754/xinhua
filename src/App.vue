<template>
  <div id="app">
		<!-- <xh-XHmine></xh-XHmine> -->
		<!-- <xh-XhMyOrder></xh-XhMyOrder> -->
		<router-view></router-view>
    <!-- <xh-login></xh-login> -->
  </div>
</template>

<script>
	// import XhLogin from "./pages/XhLogin.vue"
	// import XHmine from "./components/mine/XHmine"
	// import XhMyOrder from "./pages/XhMyOrder"
export default {
  name: 'App',
	components:{
		// "xh-login":XhLogin,
		// "xh-XHmine":XHmine,
		// "xh-XhMyOrder":XhMyOrder
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:  #f7f7f7;
}
</style>
