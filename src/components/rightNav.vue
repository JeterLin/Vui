<template>
	<nav id="right-nav">
		<header class="component-name">
			<span>Button</span>
		</header>
		<ul class="component-detail-list">
			<li v-for="item in detailList" >
				<a href="#">{{item.detailType}}</a>
				<ul class="detail-sublist " :class="{active:item.isActive}" >
					<li v-for="subitem in item.subList" :class="{active:subitem.isActive}">
						<a href="#">{{subitem.detailName}}</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>	
</template>
<script >
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
						detailType:"buttons",
						isActive:false,
						subList:subList
					},
					{
						detailType:"panels",
						isActive:true,
						subList:subList
					},
					{
						detailType:"wells",
						isActive:false,
						subList:subList
					},
					{
						detailType:"progress bars",
						isActive:false,
						subList:subList
					},
					{
						detailType:"forms",
						isActive:false,
						subList:subList
					}
			];
			return {
				detailList:detailList
			}
		}
	};
</script>
<style lang="scss">
	@import "./style/common";
	#right-nav{
		float:right;
		width:30%;
		height:100%;
		.component-name{
			font-size:$font-size-normal;
		}
		.component-detail-list{
			width:250px;
			font-size:$font-size-base;
			a{display:block;}
			>li>a{
				position: relative;
				@include draw-caret('left');
				&:after{
					@include center-vertical-abs(null);
					right:0;
				}
			}
			.detail-sublist{
				display:none;
				font-weight:normal;
				font-size:$font-size-sm;
				line-height:$line-height-normal;
				a:hover,.active{
					color:$product-color-blue;
				}
			}
			.detail-sublist.active{
				display:block;
			}
		}
		.component-name,
		.component-detail-list{
			font-weight:bold;
			line-height:$line-height-lg;
		}
	}
</style>
