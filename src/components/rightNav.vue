<template>
	<nav id="right-nav" v-fixed-menu>
		<header class="component-name">
			<span>{{details.componentName}} </span>
		</header>
		<ul class="component-detail-list">
			<li v-for="item in detailList" class="detail-item" :class="{active:item.isActive}" @click="closePreMenu(item);toggleMenu(item)">
				<a href="javascript:;">{{item.title}}</a>
				<ul class="detail-sublist " >
					<li v-for="subitem in item.subtitles" :class="{active:subitem.isActive}">
						<a href="#">{{subitem.title}}</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>	
</template>
<script >
	import fixedMenu from './directives/fixedMenu.vue';
	export default {
		data(){
			
			return {
				detailList:[]
			};
		},
		props:['details'],
		created(){
			this.detailList = this.details.detailList;
		},
		methods:{
			closePreMenu(item){

				if(this && !this.item){
					this.item = item;
				}else if(this && this.item != item) {
					this.item.isActive = false;
					this.item = item;
				}
			},
			toggleMenu(item){
				if(item){
					item.isActive = !item.isActive;
				}
			}
		},
		directives:{
			'fixedMenu':fixedMenu
		}
	};
</script>
<style lang="scss">
	@import "./style/common";
	#right-nav{
		float:left;
		width:30%;
		position: relative;
		top:195px;
		// left:100%;
		
		.component-name{
			font-size:$font-size-normal;
			padding-left:$space-base;
		}
		.component-detail-list{
			width:250px;
			font-size:$font-size-base;
			a{
				display:block;
			}
			.detail-item>a{
				position: relative;
				@include draw-caret('left');
				&:after{
					@include center-vertical-abs(null);
					right:0;
				}
				border-left:solid transparent 2px;
				padding-left:$space-base - 2px;
			}
			.detail-sublist{
				display:none;
				font-weight:normal;
				font-size:$font-size-sm;
				line-height:$line-height-normal;
				padding-left:$space-base;
				a:hover,.active{
					color:$product-color-blue;
				}
			}
			.detail-item.active{

				.detail-sublist{
					display:block;

				}
				
				&>a{
					 @include draw-caret('down');
					 &:after{
						@include center-vertical-abs(null);
						right:0;					 	
					 }
					 border-left:solid $product-color-blue;
				}

			}
		}
		.component-name,
		.component-detail-list{
			font-weight:bold;
			line-height:$line-height-lg;
		}
	}
</style>
