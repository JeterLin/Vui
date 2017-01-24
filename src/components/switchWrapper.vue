<template>
	<component :is="currentView.viewName" ></component>
</template>
<script>
	// import eventBus from './eventBus.vue';
	import eventBus from "./utils/eventBus";
	let currentView = {viewName:'intro'};
	let createdWithHash = {};
	eventBus.on('click.intro',function(){
		currentView.viewName = 'intro';
	}).on('click.buttons',function(){
		currentView.viewName = 'buttons';
	}).on('click.notbuttons',function(){
		currentView.viewName = 'notButtons';
	}).on('click.menus',function(){

		currentView.viewName = 'menus';
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
				currentView.viewName = 'intro';
			}else if(hash === 'buttons') {
				currentView.viewName = 'buttons';
			}else if(hash === 'notbuttons'){
				currentView.viewName = 'notButtons';
			}else if(hash === 'menus'){
				currentView.viewName = 'menus';
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
			},
			'menus':function(resolve,reject){
				require(['./menus.vue'],resolve);
			}
		},
	};

</script>