<template>
	<nav id="left-nav">
		this is {{msg}} navigator bar
	</nav>	
</template>
<script >
	export default {
		data(){
			return {
				msg:"hehe_left"
			}
		}
	}
</script>
<style lang="scss">
	#left-nav{
		float:left;
		width:30%;
		background-color:#ffc;
		
		height:100%;
	}
</style>
