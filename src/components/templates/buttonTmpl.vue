<template>
<button class="btn" :class="getClassName('button')">
			<slot></slot>
			<span v-if="btnIcon !=='defaultVal' " class="btn-icon" :class="getClassName('icon')"></span>
			<slot name="afterIcon"></slot>
</button>
</template>

<script >
	let classMap = {
		// button types
		'btn-primary':'btn-primary',
		'btn-secondary':'btn-secondary',
		'btn-circle':'btn-circle',
		'btn-large':'btn-large',
		'btn-dropdown':'',
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
					default:
					break;
				}
				return resultList;
			}
		
	};
	export default {
		data(){
			return {
			};
		},
		props:props,
		methods:methods
	};
</script>
