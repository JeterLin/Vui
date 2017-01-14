<template>
	<intro-tmpl>
		<div slot="in-body">
			<header>
				<h1 class="title">菜单</h1>
				<p class="main-intro">菜单主要用于概括、分级组织信息。菜单一般使用<code>&lt;ul&gt;</code>、<code>&lt;ol&gt;</code>和<code>&lt;li&gt;</code>这些元素来显示内容的组织层级结构。菜单与子菜单之间的展示位置的控制，则可以利用相对定位和绝对定位来设置控制。考虑到菜单的组织层级结构的复杂性，这里只展示二级菜单，如果需要更多层级结构的菜单展开，需要进一步改写代码，以满足用户的需求。</p>
			</header>
			<div class="detail">
				<section>
					<h1 class="title" v-xtitle:rank="0">类型</h1>
					<section>
						<h2 class="sub-title" v-xtitle:rank="1">基础菜单</h2>
						<div class="container">
							<div class="row">
								<div class="cols-2" >
									<span>横向菜单</span>
								</div>
								<div class="cols-10" > 
									<menu-tmpl :listModel="listModel"></menu-tmpl>
								</div>
							</div>
							<div class="row">
								<div class="cols-2">
									<span>纵向菜单</span>
								</div>
								<div class="cols-4" >
									<menu-tmpl :listModel="listModel" :listType="'menu-list-vec'"></menu-tmpl>
								</div>
								<div class="cols-2">
									<span>菜单组</span>
								</div>
								<div class="cols-4">
									<menu-tmpl :listModel="listModel" :listType="'menu-list-group'"></menu-tmpl>
								</div>
 							</div>
							<div class="row">
								
							</div>
						</div>

					</section>
					<section>
						<h2 class="sub-title" v-xtitle:rank="1">下拉菜单</h2>
						<div class="container">
							<div class="row">
								<div class="cols-3">默认</div>
								<div class="cols-3">
									<btn-dropdown text="All Types" caretAlign="right" btnType="btn-secondary" :listModel="dropDownListModel" listAlign="left"></btn-dropdown>
								</div>
								<div class="cols-3"></div>
								<div class="cols-3"></div>
							</div>
						</div>
					</section>
				</section>
			</div>
		</div>
		<div slot="out-body">
			<right-nav :details="details"></right-nav>
		</div>
	</intro-tmpl>
</template>
<script >

	import introTmpl from './templates/introTmpl.vue';
	import rightNav from './rightNav.vue';
	import xtitle from './directives/xtitle.vue';
	import menuTmpl from './templates/menuTmpl.vue';
	import btnDropdownTmpl from "./templates/btnDropdownTmpl.vue";

	// default details constructor to collect and save titles in this page
	let details = new introTmpl.Details("菜单");
	// default extract titles method
	introTmpl.extractTitles(details,xtitle);
	export default {
		data(){
			let listModel = [];
			for(let i = 0 ; i<3;i++){
				listModel.push({
					itemName:'menu item_'+i,
					subList:[]
				});
				for(let j = 0;j<3;j++){
					listModel[i]['subList'].push({itemName:'item '+j});
				}
			}
			listModel.push({itemName:'item'});
			let dropDownListModel = [
				'General web',
				'Facebook',
				'Instagram',
				'Prospecting',
				'Retargeting'
			];
			return {
				details,
				listModel,
				dropDownListModel
			};
		},
		components:{
			'introTmpl':introTmpl,
			'rightNav':rightNav,
			'menuTmpl':menuTmpl,
			'btnDropdown':btnDropdownTmpl
		},
		directives:{
			'xtitle':xtitle
		}

	};
</script>
<style lang="scss">
	// @import "./style/common";
	// @import "./style/button";

</style>
