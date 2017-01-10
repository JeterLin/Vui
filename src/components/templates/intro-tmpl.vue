<template>
	<section id="intro">
		<div class="intro-inner">
			<div class="intro-body">
				<slot name="in-body"></slot>
			</div>
			<slot name="out-body"></slot>
		</div>
	</section>
</template>
<script >
	export default {
		data(){
			return {};
		}
	}
</script>
<style lang="scss">
	@import "../style/mixin";
	@import "../style/common";
	@import "../style/detail-intro";
</style>