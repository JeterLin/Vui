<template>
	<section id="intro">

		<right-nav></right-nav>
	</section>
</template>
<script >
	import rightNav from "./rightNav.vue";
	export default {
		data(){
			return {}
		},
		components:{
			"rightNav":rightNav
		}
	}
</script>
<style>
	#intro{
		width: 70%;
		overflow: hidden;
	}
</style>