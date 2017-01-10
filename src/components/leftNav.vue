<template>
	<nav id="left-nav">
		<header class="search-bar">
			<input type="text" placeholder="搜索" >
		</header>
		<ul class="item-list">
			<li v-for="item in itemList" :class="{active:item.isActive}">
				<a :href="item.hashname" @click="cancelPreItem(item);clickWhich(item);">{{item.itemName}}</a>
			</li>
		</ul>
	</nav>	
</template>
<script >
	import eventBus from "./eventBus.vue";
	export default {
		data(){
			let itemList=[
					{
						itemName:"简介",
						hashname:'#/intro',
						isActive:false
					},
					{
						itemName:"按钮",
						hashname:'#/buttons',
						isActive:false
					},
					{
						itemName:"其他",
						hashname:'#/notbuttons',
						isActive:false
					}
				];
			return {
				itemList:itemList
			}
		},
		created(){
			let hash = location.hash;
			for( let item of this.itemList){
				if(item.hashname === hash){
					item.isActive = true;
					this.item = item;
					break;
				}
			}
		},

		methods:{
			cancelPreItem(item){
				if(!this.item){
					this.item = item;
				}else {
					this.item.isActive = false;
					this.item = item;
				}
			},
			clickWhich(item){
				item.isActive = !item.isActive ;
				switch(item.hashname){
					case '#/intro':
					eventBus.emit('click.intro');
					break;
					case '#/buttons':
					eventBus.emit('click.buttons');
					break;
					case '#/notbuttons':
					eventBus.emit('click.notbuttons');
					break;
					default:
					break;
				}
			}
		}
	}
</script>
<style lang="scss">
	@import "./style/common";

	#left-nav{
		float:left;
		width:300px;
		// width:30%;
		height:100%;
		padding-left:$space-md;
		.item-list{

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
