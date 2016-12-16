<template>
	<nav id="right-nav" v-fixed-menu>
		<header class="component-name">
			<span>Button</span>
		</header>
		<ul class="component-detail-list">
			<li v-for="item in detailList" class="detail-item" :class="{active:item.isActive}">
				<a href="#">{{item.detailType}}</a>
				<ul class="detail-sublist " >
					<li v-for="subitem in item.subList" :class="{active:subitem.isActive}">
						<a href="#">{{subitem.detailName}}</a>
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
			let subList = [
				{
					detailName:'Button',
					isActive:true
				},
				{
					detailName:'Emphasis',
					isActive:false
				},
				{
					detailName:'Animated',
					isActive:false
				},
				{
					detailName:'Labeled',
					isActive:false
				},
				{
					detailName:'Icon',
					isActive:false
				},
				{
					detailName:'Loading',
					isActive:false
				}

			];
			let detailList = [
					{
						detailType:"Buttons",
						isActive:false,
						subList:subList
					},
					{
						detailType:"Panels",
						isActive:true,
						subList:subList
					},
					{
						detailType:"Wells",
						isActive:false,
						subList:subList
					},
					{
						detailType:"Progress bars",
						isActive:false,
						subList:subList
					},
					{
						detailType:"Forms",
						isActive:false,
						subList:subList
					}
			];
			return {
				detailList:detailList
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
		float:right;
		// position: fixed;
		// top:195px;
		// left:80%;
		width:30%;
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
