<template>
	<intro-tmpl>
		<div slot="in-body">
			<header>
				<h1 class="title" >按钮</h1>	
				<p class="main-intro">按钮作为一种常用的人机交互控件对于绝大多数人来说恐怕不会陌生了吧。得益于CSS的强大，我们可以将大多数HTML元素制作成按钮。但是，<code>&lt;button&gt;</code>元素可以设置tabindex，可以获得键盘tab键的焦点。所以按钮控件默认使用<code>&lt;button&gt;</code>元素，而链接按钮使用<code>&lt;a&gt;</code>元素</p>
			</header>
			<div class="detail">
				<section>
					<h1 class="title" v-xtitle:rank="0">类型</h1>	
					<section >
							<h2 class="sub-title" v-xtitle:rank="1">状态</h2>
							<div class="container">
								
								<div class="row">
									<div class="cols-4">
										<span>默认</span>
									</div>
									<div class="cols-4">
										<btn-tmpl btnType="btn-primary">
											Primary
										</btn-tmpl>
									</div>
									<div class="cols-4">
										<btn-tmpl btnType="btn-secondary">
											Secondary
										</btn-tmpl>
									</div>

								</div>
								<div class="row">
									<div class="cols-4">浮动</div>
									<div class="cols-4">
										<!-- <button class="btn btn-primary btn-hover">Primary</button> -->
										<btn-tmpl btnType="btn-primary" btnState="btn-hover">
											Primary
										</btn-tmpl>
									</div>
									<div class="cols-4">
										<!-- <button class="btn btn-secondary btn-hover">Secondary</button> -->
										<btn-tmpl btnType="btn-secondary" btnState="btn-hover">
											Secondary
										</btn-tmpl>
									</div>
								</div>
								<div class="row">
									<div class="cols-4">获取焦点</div>
									<div class="cols-4">
										<!-- <button class="btn btn-primary btn-focus">Primary</button> -->
										<btn-tmpl btnType="btn-primary" btnState="btn-focus">
											Primary
										</btn-tmpl>
									</div>
									<div class="cols-4">
										<!-- <button class="btn btn-secondary btn-focus">Secondary</button> -->
										<btn-tmpl btnType="btn-secondary" btnState="btn-focus">
											Secondary
										</btn-tmpl>
									</div>
								</div>
								<div class="row">
									<div class="cols-4">激活</div>
									<div class="cols-4">
										<!-- <button class="btn btn-primary btn-active">Primary</button>  -->
										<btn-tmpl btnType="btn-primary" btnState="btn-active">Primary</btn-tmpl>
									</div>
									<div class="cols-4">
										<!-- <button class="btn btn-secondary btn-active">Secondary</button> -->
										<btn-tmpl btnType="btn-secondary" btnState="btn-active">Secondary</btn-tmpl>
									</div>
								</div>
								<div class="row">
									<div class="cols-4">禁用</div>
									<div class="cols-4">
										<!-- <button class="btn btn-primary btn-disable">Primary</button> -->
										<btn-tmpl btnType="btn-primary" btnState="btn-disable">Primary</btn-tmpl>
									</div>
									<div class="cols-4">
										<!-- <button class="btn btn-secondary btn-disable">Secondary</button> -->
										<btn-tmpl btnType="btn-secondary" btnState="btn-disable">Secondary</btn-tmpl>
									</div>
								</div>
								<div class="row">
									<div class="cols-4">带转动图标</div>
									<div class="cols-4">
									<!-- 	 <button class="btn btn-primary ">
										 	Primary<span class="btn-icon spinner"></span>
										 </button> -->
										 <btn-tmpl btnType="btn-primary" :btnIcon="{iconName:'spinner',aniType:'spin'}">
										 	Primary
										 </btn-tmpl>
									 </div>
									<div class="cols-4">
										<!--<button class="btn btn-secondary ">
											Secondary<span class="btn-icon spinner spin"></span>
										</button> -->
										<btn-tmpl btnType="btn-secondary" :btnIcon="{iconName:'spinner',aniType:'spin'}">
											Secondary
										</btn-tmpl>
									</div>
								</div>

							</div>
					</section>
					<section>
						<h2 class="sub-title" v-xtitle:rank="1">图标按钮</h2>
						<div class="container">
							<div class="row">
								<div class="cols-4">图标按钮</div>
								<div class="cols-4">
									<!-- <button class="btn btn-primary "><span class="btn-icon cart"></span></button> -->
									<btn-tmpl btnType="btn-primary" btnIcon="cart"></btn-tmpl>
								</div>
								<div class="cols-4">
									<!-- <button class="btn btn-secondary btn-icon"><span class="btn-icon cart"></span></button> -->
									<btn-tmpl btnType="btn-secondary" btnIcon="cart"></btn-tmpl>
								</div>
							</div>
							<div class="row">
								<div class="cols-4">圆形按钮</div>
								<div class="cols-4">
									<!-- <button class="btn btn-primary  btn-circle"><span class="btn-icon cart"></span></button> -->
									<btn-tmpl :btnType="['btn-primary','btn-circle']" btnIcon="cart"></btn-tmpl>
								</div>
								<div class="cols-4">
									<!-- <button class="btn btn-secondary btn-circle"><span class="btn-icon cart"></span></button> -->
									<btn-tmpl :btnType="['btn-secondary','btn-circle']" btnIcon="cart"></btn-tmpl>
								</div>
							</div>
							<div class="row">
								<div class="cols-4">图标按钮组</div>
								<div class="cols-4">
									<btn-group >
										<btn-tmpl btnType="btn-primary" btnIcon="align-left"></btn-tmpl>
										<btn-tmpl btnType="btn-primary" btnIcon="align-right"></btn-tmpl>

										<btn-tmpl btnType="btn-primary" btnIcon="align-center"></btn-tmpl>										
									</btn-group>
								</div>

								<div class="cols-4">
									<btn-group>
										<btn-tmpl btnType="btn-secondary" btnIcon="align-left"></btn-tmpl>
										<btn-tmpl btnType="btn-secondary" btnIcon="align-right"></btn-tmpl>
										<btn-tmpl btnType="btn-secondary" btnIcon="align-justify"></btn-tmpl>
									</btn-group>
								</div>
							</div>						
						</div>
					</section>
					<section>
						<h2 class="sub-title" v-xtitle:rank="1">标签化按钮</h2>
						<div class="container">
							<div class="row">
								<div class="cols-6">右标签</div>
								<div class="cols-6">
							<!-- 		<div class="btn-group btn-label">
										<button class="btn btn-primary "><span class="btn-icon cart"></span>Cart</button>
										<span class="btn label">shopped!</span>
									</div> -->
								<btn-label btnIcon="cart" btnText="Cart" labelText="shopped!"></btn-label>
								</div>
							</div>
							<div class="row">
								<div class="cols-6">左标签</div>
								<div class="cols-6">
									<!-- <div class="btn-group btn-label">
									<span class="btn label label-right-caret">shopped!</span>
									<button class="btn btn-primary"><span class="btn-icon cart"></span>Cart</button>
									</div> -->

									<btn-label btnIcon="cart" btnText="Cart" labelText="shopped!" caretAlign="right" ></btn-label>
								</div>
							</div>
							<div class="row">
								<div class="cols-6">标签化图标按钮</div>
								<div class="cols-6">
									<!-- <div class="btn-group btn-label">
									
									<button class="btn btn-primary "><span class="btn-icon heart"></span></button>
									<span class="btn label label-left-caret">liked!</span>					
									</div> -->
									<btn-label btnIcon="heart" labelText="liked!" caretAlign="left"></btn-label>
								</div>
							</div>
						</div>
					</section>
				</section>
				<section>
					<h1 class="title" v-xtitle:rank="0">按钮尺寸</h1>
					<section>
						<div class="container">
							<div class="row">
								<div class="cols-6">默认大小</div>
								<div class="cols-6">
									<button class="btn btn-primary">Primary</button>
								</div>
							</div>
							<div class="row">
								<div class="cols-6">大按钮</div>
								<div class="cols-6">
									<button class="btn btn-primary btn-large">Create Campaign</button>
								</div>
							</div>
						</div>
					</section>
				</section>
				<section>
					<h1 class="title" v-xtitle:rank="0">按钮式下拉菜单</h1>
					<section>
						<div class="container">
							<div class="row">
								<div class="cols-6">默认</div>
								<div class="cols-6">
									<div class="btn-group btn-dropdown">
										<button class="btn btn-primary">Primary</button>
										<button class="btn btn-primary" @click="isDrop=!isDrop">
											<span class="dropdown-caret"></span>
										</button>
										<ul class="dropdown-list" v-show="isDrop" >
											<li>list item 1</li>
											<li>list item 2</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
				<section>
					<h1 class="title" v-xtitle:rank="0">链接按钮</h1>
					<section>
						<h2 class="sub-title" v-xtitle:rank="1">普通链接按钮</h2>
						<div class="container" @click.prevent="">
							<div class="row">
								<div class="cols-6">默认</div>
								<div class="cols-6"><a href="" class="btn btn-link" >Secondary</a></div>
							</div>
							<div class="row">
								<div class="cols-6">按钮组</div>
								<div class="cols-6" >
									<div class="btn-group">
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
									</div>
									<div class="btn-group">
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
									</div>
									<div class="btn-group">
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
										<a href="" class="btn btn-link">Button</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
							<h2 class="sub-title" v-xtitle:rank="1">大尺寸按钮</h2>
							<div class="container" @click.prevent="">
								<div class="row">
									<div class="cols-6" >默认</div>
									<div class="cols-6">
										<a href="" class="btn btn-link btn-link-large">
											<span class="btn-header btn-icon cart"></span>
											<span class="btn-header-name">Cart Abandoners</span>
											<span class="btn-body">Choose if you want to spend ads to people who didn't finish buying</span>
										</a>
									</div>
								</div>
								<div class="row">
									<div class="cols-3" style="padding-left:0;text-align:center">按钮组</div>
									<div class="cols-9">
										<div class="btn-group">
											<a href="" class="btn btn-link btn-link-large">
												<span class ="btn-header btn-icon cart"></span>
												<span class ="btn-header-name">Cart Abandoners</span>
												<span class ="btn-body">Choose if you want to spend ads to people who didn't finish buying</span>
											</a>
											<a href="" class="btn btn-link btn-link-large">
												<span class ="btn-header btn-icon cart"></span>
												<span class ="btn-header-name">Cart Abandoners</span>
												<span class ="btn-body">Choose if you want to spend ads to people who didn't finish buying</span>
											</a>
											<a href="" class="btn btn-link btn-link-large">
												<span class ="btn-header btn-icon cart"></span>
												<span class ="btn-header-name">Cart Abandoners</span>
												<span class ="btn-body">Choose if you want to spend ads to people who didn't finish buying</span>
											</a>
										</div>
									</div>
								</div>
							</div>
					</section>
				</section>
					
				</div>
			<!-- div.detail end-->
		</div>
		<!-- slot=in-body end -->
		<div slot="out-body">
			<right-nav :details="details"></right-nav>
		</div>
	</intro-tmpl>
</template>
<script >
	import rightNav from "./rightNav.vue";
	import xtitle from "./directives/xtitle.vue";
	import introTmpl  from "./templates/introTmpl.vue";
	import buttonTmpl from "./templates/buttonTmpl.vue";
	import btnGrpTmpl from "./templates/btnGrpTmpl.vue";
	import btnLabelTmpl from "./templates/btnLabelTmpl.vue";
	// let details = {
	// 	componentName:"按钮",
	// 	detailList:[]
	// };
	let details = new introTmpl.Details("按钮");
	introTmpl.extractTitles(details,xtitle);
	export default {
		data(){
			return {
				isDrop:false,
				details:details
			};
		},
		components:{
			"rightNav":rightNav,
			"introTmpl":introTmpl,
			"btnTmpl":buttonTmpl,
			"btnGroup":btnGrpTmpl,
			"btnLabel":btnLabelTmpl
		},
		directives:{
			"xtitle":xtitle
		}
	}
</script>
<style lang="scss">
	@import "./style/font-awesome/font-awesome";
	@import "./style/common";
	@import "./style/button";
</style>