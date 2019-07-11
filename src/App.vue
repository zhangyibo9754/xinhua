<template>
  <div id="app">
    <xh-login></xh-login>
  </div>
</template>

<script>
	import XhLogin from "./pages/XhLogin.vue"
export default {
  name: 'App',
	components:{
		"xh-login":XhLogin
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  /*text-align: center;*/
  /*color: #2c3e50;*/
=======
  text-align: center;
  color: #2c3e50;
>>>>>>> 4e935e07ff5d861072f95d0908956c4755fcf67b
}
</style>
