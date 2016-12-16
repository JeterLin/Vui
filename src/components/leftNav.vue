<template>
	<nav id="left-nav">
		<header class="search-bar">
			<input type="text" placeholder="search..." >
		</header>
		<ul class="component-list">
				<li v-for="item in componentList" :class="{active:item.isActive}">
					<a href="#">{{item.componentName}}</a>
				</li>
		</ul>
	</nav>	
</template>
<script >
	import eventBus from "./EventBus.vue";
	export default {
		data(){
			eventBus.on('activePanel',(obj)=>{
				this.componentList[0].isActive=true;
			});
			let componentList=[
					{
						componentName:"buttons",
						isActive:false
					},
					{
						componentName:"panels",
						isActive:true
					},
					{
						componentName:"wells",
						isActive:false
					},
					{
						componentName:"progress bars",
						isActive:false
					},
					{
						componentName:"forms",
						isActive:false
					}
				];
			for(let i=0;i< 15;i++){
				componentList.push(componentList[i%5]);
			}
			return {
				componentList:componentList
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss">
	@import "./style/common";

	#left-nav{
		float:left;
		max-width:300px;
		width:30%;
		height:100%;
		padding-left:$space-md;
		.component-list{

			line-height:$line-height-lg;
			li{
				a{
					display:block;
				}
				a:hover,&.active{
					color:$product-color-blue;
				}
			}
		}
		.search-bar{
			height:$space-lg;
			margin-left:-$space-md;
			padding-right:$space-md;
			input{
				display:block;
				height:100%;
				width:100%;
				// background-color:$bg-color-blue-active;
				background-color:$color-line-rule;

				font-family:$font-family-sans-serif;
				font-size:$font-size-base;
				// background-color:$bg-color-blue-active;
				padding-left:$space-md;

				border:none;
				outline:none;
			}
		}
	}
</style>
