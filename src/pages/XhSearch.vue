<template>
    <div class="XhSearch">
		<div class="XhSearchHeader">
			<div class="SearchHeaderCenter">
				<input v-model="title"  style="display: block;width: 5.5rem;height:.56rem ; background: #FFFFFF;border: 0 !important;padding-left: .2rem;" type="text" placeholder="应物兄">
				<p><van-icon name="search" v-if="!title" /><van-icon name="cross" v-if="title" /></p>
				<router-link to="/">
          <span>取消</span>
        </router-link>

			</div>	
		</div>
		<div class="XhSearchFooter" v-if="!title">
			<div class="SearchFooterFooter">
				<div class="XhSearchLately">
					<p><span style="font-size:.3rem ;font-weight:800 ;color: #74787a;">最近搜索</span><van-icon name="delete" /></p>
					<ul>
						<li><span>白鹿原</span></li>
					</ul>
				</div>
				<div class="XhSearchLately">
					<p><span style="font-size:.3rem ;font-weight:800 ;color: #74787a;">热门搜索</span></p>
					<ul>
						<li><span>边城</span></li>
						<li><span>悲剧人偶</span></li>
						<li><span>曹文轩</span></li>
						<li><span>大江大河</span></li>
						<li><span>新华定制</span></li>
						<li><span>夏目友人帐</span></li>
					</ul>
				</div>
			</div>
		</div>
	    
	</div>
</template>

<script>
    export default {
        name: "XhSearch",
		data(){
			return{
				title:""
			}
		}
    }
</script>

<style scoped>
	.XhSearch{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
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
	.XhSearch .XhSearchFooter .SearchFooterFooter .XhSearchLately ul li span{
		line-height: .56rem;
		margin:0 .23rem 0 .23rem;
		font-size: .3rem;
		color: #999999;
	}
</style>
