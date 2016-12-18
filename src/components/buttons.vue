<template>
	<section id="intro">
		<header>
			<p class="title">Button</p>	
			<p class="main-intro">Using this configuration, webpack-dev-server will serve the static files in your build folder. It’ll watch your source files, and recompile the bundle whenever they are changed.

			This modified bundle is served from memory at the relative path specified in publicPath (see API). It will not be written to your configured output directory. Where a bundle already exists at the same URL path, the bundle in memory takes precedence (by default).</p>
		</header>
		<div class="detail">
			<section>
				<p class="title">Button</p>	
				<p class="main-intro">Using this configuration, webpack-dev-server will serve the static files in your build folder. It’ll watch your source files, and recompile the bundle whenever they are changed.

				This modified bundle is served from memory at the relative path specified in publicPath (see API). It will not be written to your configured output directory. Where a bundle already exists at the same URL path, the bundle in memory takes precedence (by default).</p>
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
</style>