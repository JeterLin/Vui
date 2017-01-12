<template>
<button class="btn" :class="getClassName('button')">
			<slot></slot>
			<span v-if="btnIcon !=='defaultVal' " class="btn-icon" :class="getClassName('icon')"></span>
			<slot name="afterIcon"></slot>
</button>
 <!-- <component :is="buttonType" :config="childComponentConfig"><slot></slot></component> -->
</template>

<script >
	// import singleBtnTmpl from './singleBtnTmpl.vue';
	// import btnGrpTmpl from './btnGrpTmpl.vue';
	let classMap = {
		// button types
		'btn-primary':'btn-primary',
		'btn-secondary':'btn-secondary',
		'btn-circle':'btn-circle',
		// 'btn-group':'btn-group',
		// 'btn-label':'btn-label',
		// icons
		'spinner':'spinner',
		'cart':'cart',
		'align-left':'align-left',
		'align-right':'align-right',
		'align-center':'align-center',
		'align-justify':'align-justify',
		'heart':'heart',
		// icon animation type
		'spin':'spin',
		// button state
		'btn-hover':'btn-hover',
		'btn-focus':'btn-focus',
		'btn-active':'btn-active',
		'btn-disable':'btn-disable',
		// default values for all fields
		'defaultVal':''
	};
	let props = {
			btnType:{
				type:[String,Array],
				default:'btn-primary'
			},
			btnIcon:{
				type:[Object,String],
				default:'defaultVal'
			},
			btnState:{
				type:String,
				default:'defaultVal'
			}
	};
	let methods = {
			getClassName(componentType){
				let resultList = [];
				// console.info(this.btnIcon);
				switch(componentType){
					case 'button':
					if(typeof this.btnType === 'string'){
						resultList = [
						classMap[this.btnType],
						classMap[this.btnState]	];
					}else if(Array.isArray(this.btnType)){
						resultList = [
							...this.btnType.map((itemName)=>classMap[itemName]),
							classMap[this.btnState]
						];
					}
					break;
					case 'icon':
					if(this.btnIcon!=='defaultVal'){
						if(typeof this.btnIcon === 'string'){
							resultList = [
								classMap[this.btnIcon]
							];

						}else if(typeof this.btnIcon === 'object'){

							resultList = [
								classMap[this.btnIcon['iconName']],
								classMap[this.btnIcon['aniType']]
							];
						}
					}	
					break;
					// case 'label':
					// 	this.btnType==='btn-label'    ? 
					// 	(resultList = [
					// 	classMap[this.btnType]]) : 
					// 	(resultList=[]);
					// break;
					default:
					break;
				}
				return resultList;
			}
		
	};
	export default {
		data(){
			return {
				// childComponentConfig:{},
				// buttonType:'singleBtnTmpl'
			};
		},
		// created(){
			
		// 	let childComponentConfig = {};
		// 	// when child component is singleBtnTmpl
		// 	if(Array.isArray(this.btnType) || 
		// 		this.btnType === 'btn-primary' || 
		// 		this.btnType === 'btn-secondary' || 
		// 		this.btnType === 'btn-circle' ){
		// 		this.buttonType = 'singleBtnTmpl';
		// 		let iconClassList = this.getClassName('icon');
		// 		childComponentConfig = {
		// 			buttonClassNames:this.getClassName('button'),
		// 			iconConfig:{
		// 				enable:iconClassList.length > 0,
		// 				classNames:iconClassList
		// 			}
		// 		};
		// 	}
		// 	else if(this.btnType === 'btn-group' ||
		// 			this.btnType === 'btn-label'){
		// 		// when child component is btnGrpTmpl
		// 		this.buttonType = 'btnGrpTmpl';
		// 		childComponentConfig = {
		// 			groupType:classMap[this.btnType],
		// 			labelClassNames:this.getClassName('label')
		// 		};
		// 	}

		// 	this.childComponentConfig = childComponentConfig;
		// },
		props:props,
		methods:methods
		// ,
		// components:{
		// 	'singleBtnTmpl':singleBtnTmpl,
		// 	'btnGrpTmpl':btnGrpTmpl
		// }
	};
</script>
<style lang="scss">
	// $fa-font-path:"../../assets/fonts/font-awesome";
	// @import "../style/font-awesome/font-awesome";
	// @import "../style/common";
	// @import "../style/button";
</style>