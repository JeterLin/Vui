<template>
<intro-tmpl>
	<div slot="in-body">
		<header>
			<p class="title">简介</p>	
			<p class="main-intro">这个网站的主要目的是总结收集自己曾经碰到的UI控件，参考了诸如<a href="http://getbootstrap.com/" target="_blank" class="outer-link">Bootstrap</a> ,<a href="http://semantic-ui.com/" target="_blank" class="outer-link">Semantic UI</a>上控件的展示方式和交互方式，并且也查看了部分Bootstrap的CSS代码和CSS命名规范。与此同时，对于其中交互比较复杂的组件，采用<a href="https://cn.vuejs.org/v2/guide/single-file-components.html" class="outer-link">Vue单文件组件</a>的形式来开发。这个网站也是采用这种技术方案进行开发的，整体的配色、布局、间距、效果主要参考了这个dribbble上的<a href="https://dribbble.com/shots/2833155-AdRoll-UI-Framework/attachments/582238" target="_blank" class="outer-link">设计效果图</a>。</p>
		</header>
	</div>
</intro-tmpl>
</template>
<script >
	import introTmpl from "./templates/introTmpl.vue";
	export default {
		data(){
			return {}
		},
		components:{
			"introTmpl":introTmpl
		}

	};
	
</script>
