<template>
	<section id="intro">
		<header>
			<h1 class="title" >按钮</h1>	
			<p class="main-intro">按钮作为一种常用的人机交互控件对于绝大多数人来说恐怕不会陌生了吧。得益于CSS的强大，我们可以将大多数HTML元素制作成按钮。但是，只有<code>&lt;boutton&gt;</code>元素可以设置tabindex，可以获得键盘tab键的焦点。所以按钮控件如无特别说明都以<code>&lt;boutton&gt;</code>来制作。</p>
		</header>
		<div class="detail">
			<section>
				<h1 class="title" v-xtitle:rank="0">类型</h1>	
				<section >
						<header>
							<h2 class="sub-title" v-xtitle:rank="1">状态</h2>
						</header>					
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
								<div class="cols-4">
									 <button class="btn btn-primary ">
									 	Primary<span class="btn-icon spinner"></span>
									 </button>
								 </div>
								<div class="cols-4">
									<button class="btn btn-secondary ">
										Secondary<span class="btn-icon spinner spin"></span>
									</button>
								</div>
							</div>

						</div>
				</section>
				<section>
					<header>
						<h2 class="sub-title" v-xtitle:rank="1">图标按钮</h2>
					</header>
					<div class="container">
						<div class="row">
							<div class="cols-4">图标按钮</div>
							<div class="cols-4">
								<button class="btn btn-primary "><span class="btn-icon cart"></span></button>
							</div>
							<div class="cols-4">
								<button class="btn btn-secondary btn-icon"><span class="btn-icon cart"></span></button>
							</div>
						</div>
						<div class="row">
							<div class="cols-4">圆形按钮</div>
							<div class="cols-4">
								<button class="btn btn-primary  btn-circle"><span class="btn-icon cart"></span></button>
							</div>
							<div class="cols-4">
								<button class="btn btn-secondary btn-circle"><span class="btn-icon cart"></span></button>
							</div>
						</div>
						<div class="row">
							<div class="cols-4">图标按钮组</div>
							<div class="cols-4">
								<div class="btn-group">
									<button class="btn btn-primary "><span class="btn-icon align-left"></span></button>
									<button class="btn btn-primary "><span class="btn-icon align-right"></span></button>
									<button class="btn btn-primary "><span class="btn-icon align-center"></span></button>
								</div>
							</div>

							<div class="cols-4">
								<div class="btn-group">
									<button class="btn btn-secondary "><span class="btn-icon align-left"></span></button>
									<button class="btn btn-secondary "><span class="btn-icon align-right"></span></button>
									<button class="btn btn-secondary "><span class="btn-icon align-justify"></span></button>
								</div>
							</div>
						</div>						
					</div>
				</section>
				<section>
					<header>
						<h2 class="sub-title" v-xtitle:rank="1">标签化按钮</h2>
					</header>
					<div class="container">
						<div class="row">
							<div class="cols-6">右标签</div>
							<div class="cols-6">
								<div class="btn-group btn-label">
									<button class="btn btn-primary "><span class="btn-icon cart"></span>Cart</button>
									<span class="btn label">shopped!</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="cols-6">左标签</div>
							<div class="cols-6">
								<div class="btn-group btn-label">
								<span class="btn label label-right-caret">shopped!</span>
								<button class="btn btn-primary"><span class="btn-icon cart"></span>Cart</button>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="cols-6">标签化图标按钮</div>
							<div class="cols-6">
								<div class="btn-group btn-label">
								
								<button class="btn btn-primary "><span class="btn-icon heart"></span></button>
								<span class="btn label label-left-caret">liked!</span>					
								</div>
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
					<header>
						<h2 class="sub-title" v-xtitle:rank="1">普通链接按钮</h2>
					</header>
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
					<header>
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
					</header>
				</section>
			</section>
				
		</div>
		<right-nav :details="details"></right-nav>
	</section>
</template>
<script >
	import rightNav from "./rightNav.vue";
	import xtitle from "./directives/xtitle.vue";
	let details = {
		componentName:"按钮",
		detailList:[]
	};
	xtitle.onInsertedEnd((titlesMap)=>{
		let q = [];
		
		for(let iter of titlesMap){
			q.push(iter);
		}

		while(q.length!=0){
			
			let item = q.shift();
			let subtitles = [];

			
			for(let child of item.subtitles){
				subtitles.push({
					title:child.title
				});
			}
			if(subtitles.length == 0){
				subtitles.push({
					title:item.title
				});
			}
			details.detailList.push({
				title:item.title,
				subtitles:subtitles,
				isActive:false
			});
				
		}
	});
	export default {
		data(){
			return {
				isDrop:false,
				details:details
			};
		},
		components:{
			"rightNav":rightNav
		},
		directives:{
			"xtitle":xtitle
		}
	}
</script>
<style lang="scss">
	@import "./style/font-awesome/font-awesome";
	@import "./style/mixin";
	@import "./style/common";
	@import "./style/detail-intro";
	@import "./style/button";
</style>