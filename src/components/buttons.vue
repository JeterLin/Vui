<template>
	<section id="intro">
		<header>
			<p class="title">按钮</p>	
			<p class="main-intro">按钮作为一种常用的人机交互控件对于绝大多数人来说恐怕不会陌生了吧。得益于CSS的强大，我们可以将大多数HTML元素制作成按钮。但是，只有<code>&lt;boutton&gt;</code>元素可以设置tabindex，可以获得键盘tab键的焦点。所以按钮控件如无特别说明都以<code>&lt;boutton&gt;</code>来制作。</p>
		</header>
		<div class="detail">
			<section>
				<p class="title">类型</p>	
				<section >
						<div class="container">
							<div class="row">
								<div class="cols-4">
									<span>默认</span>
								</div>
								<div class="cols-4">
									<button class="btn btn-primary">Primary</button>
								</div>
								<div class="cols-4">
									<button class="btn btn-secondary">Secondary</button>
								</div>

							</div>
							<div class="row">
								<div class="cols-4">浮动</div>
								<div class="cols-4"><button class="btn btn-primary btn-hover">Primary</button></div>
								<div class="cols-4"><button class="btn btn-secondary btn-hover">Secondary</button></div>
							</div>
							<div class="row">
								<div class="cols-4">获取焦点</div>
								<div class="cols-4"><button class="btn btn-primary btn-focus">Primary</button></div>
								<div class="cols-4"><button class="btn btn-secondary btn-focus">Secondary</button></div>
							</div>
							<div class="row">
								<div class="cols-4">激活</div>
								<div class="cols-4"><button class="btn btn-primary btn-active">Primary</button> </div>
								<div class="cols-4"><button class="btn btn-secondary btn-active">Secondary</button></div>
							</div>
							<div class="row">
								<div class="cols-4">禁用</div>
								<div class="cols-4"><button class="btn btn-primary btn-disable">Primary</button></div>
								<div class="cols-4"><button class="btn btn-secondary btn-disable">Secondary</button></div>
							</div>
							<div class="row">
								<div class="cols-4">带转动图标</div>
							</div>
						</div>
				</section>
			</section>
				
		</div>
		<right-nav :detail-list="detailList"></right-nav>
	</section>
</template>
<script >
	import rightNav from "./rightNav.vue";
	export default {
		data(){
			let subList = [
				{
					detailName:'DatePicker'
				},
				{
					detailName:'Emphasis'
				},
				{
					detailName:'Animated'
				},
				{
					detailName:'Labeled'
				},
				{
					detailName:'Icon'
				},
				{
					detailName:'Loading'
				}

			];
			let detailList = [
					{
						detailType:"Buttons",
						subList:subList
					},
					{
						detailType:"Panels",
						subList:subList
					},
					{
						detailType:"Wells",
						subList:subList
					},
					{
						detailType:"Progress bars",
						subList:subList
					},
					{
						detailType:"Forms",
						subList:subList
					}
			];
			return {
				detailList:detailList
			};
		},
		components:{
			"rightNav":rightNav
		}
	}
</script>
<style lang="scss">
	@import "./style/mixin";
	@import "./style/common";
	@import "./style/detail-intro";
	@import "./style/button";
</style>