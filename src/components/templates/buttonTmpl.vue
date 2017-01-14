<template>
<button class="btn" :class="buttonClassNames" @click="onClickButton">
	<slot></slot>
	<span v-if="btnIcon !=='defaultVal' " class="btn-icon" :class="iconClassNames" @click="onClickIcon"></span>
	<slot name="afterIcon"></slot>
</button>
</template>

<script >
	let classMap = {
		// the key part below is values of btnType
		'btn-primary':'btn-primary',
		'btn-secondary':'btn-secondary',
		'btn-circle':'btn-circle',
		'btn-large':'btn-large',
		'btn-dropdown':'',
		'btn-multi':'',
		// values of btnIcon or btnIcon.iconName
		'spinner':'spinner',
		'cart':'cart',
		'align-left':'align-left',
		'align-right':'align-right',
		'align-center':'align-center',
		'align-justify':'align-justify',
		'heart':'heart',
		'plus':'plus',
		'minus':'minus-square',
		'check':'check-square',
		'square':'square-o',
		// values of btnIcon.aniType
		'spin':'spin',
		// values of btnState
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
	// let methods = 
	export default {
		data(){
			return {
				isClickButton:false,
				isClickIcon:false,
				buttonClassNames:[],
				iconClassNames:[]
			};
		},
		created(){
			this.buttonClassNames = this.getClassName('button');
			this.iconClassNames = this.getClassName('icon');
		},
		props:props,
		methods:{
			onClickButton(){
				if(Array.isArray(this.btnType) &&
					this.btnType.includes('btn-dropdown')){
					this.isClickButton = !this.isClickButton;
					if(this.isClickButton){
						this.buttonClassNames.push(classMap['btn-active']);
					}else {
						this.buttonClassNames.pop();
					}
					this.buttonClassNames = this.buttonClassNames;
				}
			},
			onClickIcon(){
					this.isClickIcon = !this.isClickIcon;
					if(this.isClickIcon){
						this.iconClassNames = this.iconClassNames.map((className)=>{
							// return 
							if(className === classMap['square']){
								return classMap[this.btnIcon];
							}
							return className;
						});
					}else {
						this.iconClassNames = this.iconClassNames.map((className)=>{
							if(className === classMap[this.btnIcon]){
								return classMap['square'];
							}
							return className;
						});
					}
			},
			getClassName(componentType){
				let resultList = [];
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
							if(Array.isArray(this.btnType) &&
								this.btnType.includes('btn-multi')){
								resultList.pop();
								resultList.push(classMap['square']);
							}

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
		
		}
	};
</script>
