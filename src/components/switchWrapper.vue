<template>
	<component :is="currentView.msg" ></component>
</template>
<script>
	import eventBus from './eventBus.vue';
	let currentView = {msg:'intro'};
	let createdWithHash = {};
	eventBus.on('click.intro',function(){
		currentView.msg = 'intro';
	}).on('click.buttons',function(){
		currentView.msg = 'buttons';
	}).on('click.notbuttons',function(){
		currentView.msg = 'notButtons';
	});
	export default {
		data(){
			return {
				currentView:currentView
			};
		},
		created(){
			let hash = location.hash.replace(/^#\//,'');
			if(hash === 'intro'){
				currentView.msg = 'intro';
			}else if(hash === 'buttons') {
				currentView.msg = 'buttons';
			}else if(hash === 'notbuttons'){
				currentView.msg = 'notButtons';
			}
			let fn = createdWithHash[hash];
			if(typeof fn === 'function'){
				fn();
			}
		},
		components:{
			'intro':function(resolve,reject){
				//require just works with webpack code spliting
				require(['./intro.vue'],resolve);
			},
			'buttons':function(resolve,reject){
				require(['./buttons.vue'],resolve);
			},
			'notButtons':function(resolve,reject){
				require(['./notButtons.vue'],resolve);
			}
		},
	};

</script>