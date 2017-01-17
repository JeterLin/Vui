<template>
	<button class="btn" :class="buttonClassNames" @click="onClickButton">
		<slot></slot>
		<!-- icon before button text -->
		<span v-if="btnIcon !=='defaultVal' " class="btn-icon js-inner-icon" :class="iconClassNames" @click.stop="onClickIcon"></span>
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
		'btn-plus':'',
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
		// values of iconState
		'icon-active':'icon-active',
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
			},
			isCheckIcon:{
				type:Boolean,
				default:false
			}
	};
	// cannot handle events on children elements of button in IE and FF,
	// thus the elements will be moved out from button
	let handleFFIEIconClick = function(){
		let target = this.$el.querySelector('.js-inner-icon');
		let replacementEle = document.createElement('span');
		replacementEle.style.cssText=`display:inline-block;width:${target.clientWidth}px;height:${target.clientHeight}px`;
		let originOffsetLeft = target.offsetLeft;
		let originOffsetTop = target.offsetTop;
		this.$el.removeChild(target);
		this.$el.insertBefore(replacementEle,this.$el.firstElementChild);
		let parent= this.$el.parentNode;

		parent.insertBefore(target,parent.firstElementChild);
		target.style.cssText = `position:absolute;left:${originOffsetLeft}px;top:${originOffsetTop}px;`;
	};
	export default {
		data(){
			return {

				isActiveButton:false,
				isCheckIconByClick:false,
				buttonClassNames:[],
				iconClassNames:[]
			};
		},
		created(){
			this.buttonClassNames = this.initClassName('button');
			this.iconClassNames = this.initClassName('icon');
		},
		mounted(){
			if(Array.isArray(this.btnType) && 
				this.btnType.includes('btn-multi')){
				handleFFIEIconClick.call(this);
			}
		},
		props:props,
		watch:{
			isCheckIcon(val){
				let resultList = [];
				if(val){
					this.isCheckIconByClick = true;
					resultList = this.checkIcon();

				}else {
					this.isCheckIconByClick = false;
					resultList = this.uncheckIcon();
				}
				this.iconClassNames = resultList;
			}
		},
		methods:{
			onClickButton(e){
				// console.info(e.originalEvent);
				if(Array.isArray(this.btnType) &&
					this.btnType.includes('btn-dropdown')){
					this.isActiveButton = !this.isActiveButton;
					if(this.isActiveButton){
						this.buttonClassNames.push(classMap['btn-active']);
					}else {
						this.buttonClassNames.pop();
					}
					this.buttonClassNames = this.buttonClassNames;
				}
			},
			checkIcon(){
				if( this.iconClassNames.includes(classMap['icon-active'])){
					return this.iconClassNames;
				}
				let resultList = [];

				resultList = this.iconClassNames.map((className)=>{
					if(className === classMap['square']){
						return classMap[this.btnIcon];
					}
					return className;
				});
				resultList.push(classMap['icon-active']);	
				
				return resultList;
			},
			uncheckIcon(){
				if(!this.iconClassNames.includes(classMap['icon-active'])){
					return this.iconClassNames;
				}
				let resultList = [];
				this.iconClassNames.pop();		
			    resultList = this.iconClassNames.map((className)=>{
					if(className === classMap[this.btnIcon]){
						return classMap['square'];
					}
					return className;
				});				
				return resultList;
			},
			handleClickIcon(){
				this.isCheckIconByClick = !this.isCheckIconByClick;
					let resultList = [];
					if(this.isCheckIconByClick){
					   resultList = this.checkIcon();
					   
					}else {
						resultList = this.uncheckIcon();
					}
					this.$emit('clickIcon');
					this.iconClassNames = resultList ;
			},
			onClickIcon(){
				// console.info('shit',this.iconClassNames);
				if(Array.isArray(this.btnType) && 
					this.btnType.includes('btn-multi')){
					this.handleClickIcon();
				}
			},
			initClassName(componentType){
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
