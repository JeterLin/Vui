<template>
	<btn-group :class="initDropdownClassNames()">
		<slot></slot>
		<btn-tmpl :btnType="initBtnType()"  :btnIcon="initBtnIconName()" :isCheckIcon="isCancelItem" @click.native="isDrop=!isDrop" @clickIcon="onClickIcon" >
			<span :slot="initBtnSlotName()">
				<span class="drop-btn-text" v-if="isTextExist()">{{text}}</span><span class="btn-icon " :class="initDropIconClassNames()" ></span>
			</span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop" :isCheckAll="isCheckAll"  :listModel="listModel" :listAlign="listAlign" @cancelItem="onCancelListItem" :listWidth="initListWidth()" ></component>
	</btn-group>	
</template>
<script >
	import buttonTmpl from './buttonTmpl.vue';
	import btnGrpTmpl from './btnGrpTmpl.vue';
	import defaultBtnDropdownList from './defaultBtnDropdownList.vue';
	import multiDropdownList from './multiDropdownList.vue';
	import plusDropdownList from './plusDropdownList.vue';

	export default {
		data(){
			return {
				dropdownListType:'default',
				isCancelItem:false,
				isCheckAll:false,
				isDrop:false,
				classMap:{
					// the key part below is values of dropIcon
					'caret':'caret-down',
					'ellipsis':'ellipsis-h',
					// values of checkIcon
					'plus':'plus',
					'check':'check',
					'minus':'minus',
					'square':'square',
					// values of btnIcon
					'circle':'circle',
					// the key part below is values of dropIconAlign
					'drop-icon-left':'stick-left',
					'drop-icon-right':'stick-right',

					'defaultVal':''
				}
			};
		},
		methods:{
			onClickIcon(){
				debugger;
				this.isCheckAll=!this.isCheckAll;
				// this.isCancelItem=this.isCheckAll;
				if(this.isCheckAll){
					this.isCancelItem = false;
				}
			},
			onCancelListItem(){
				this.isCancelItem=!this.isCancelItem;
				// this.isCheckAll = this.isCancelItem;
				if(this.isCancelItem){
					this.isCheckAll = false;
				}
			},
			initDropdownListType(){
				if(this.containsBtnType('btn-multi')){
					this.dropdownListType = 'multi';
				}
				if(this.containsBtnType('btn-plus')){
					this.dropdownListType = 'plus';
				}
			},
			initBtnType(){
				if(typeof this.btnType==='string'){
					return ['btn-dropdown',this.btnType];
				}else if(Array.isArray(this.btnType)){
					return [...this.btnType,'btn-dropdown'];
				}

			},
			log(text){
				console.info(text);
			},
			initListWidth(){
				if(!this.containsBtnType('btn-circle') &&
				   !this.containsBtnType('btn-plus')){
					return '180px';
				}
				return 'auto';
			},
			initDropdownClassNames(){
				if(this.containsBtnType('btn-circle')){
					return 'circle-btn-dropdown';
				}
				if(this.containsBtnType('btn-multi') ){
					return 'multi-dropdown';
				}
				if(this.containsBtnType('btn-plus')){
					return 'plus-dropdown';
				}
				return 'btn-dropdown';
			},
			// button icon before button text
			initBtnIconName(){
				if(this.btnIcon!=='defaultVal'){
					return this.classMap[this.btnIcon];
				}
				if(this.containsBtnType('btn-multi')){
					return this.classMap[this.checkIcon];
				}
				return 'defaultVal';
			},
			initBtnSlotName(){
				if(this.containsBtnType('btn-multi') ||
					this.btnIcon!=='defaultVal'){
					return 'afterIcon';
				}
				return '';
			},
			// button icon after button text by default
			initDropIconClassNames(){
				let dropIconAlign= 'defaultVal';
				let dropIcon = this.dropIcon;
				if(this.dropIconAlign== 'left'){
					dropIconAlign = 'drop-icon-left';
				}else if(this.dropIconAlign == 'right'){
					dropIconAlign = 'drop-icon-right';
				}

				if(this.containsBtnType('btn-plus')){
					dropIcon = 'plus';
				}
				let resultList = [
					this.classMap[dropIcon],

					this.classMap[dropIconAlign]
				];
				return resultList;
			},
			isTextExist(){
				return typeof this.text === 'string' && this.text.length>0;
			},
			containsBtnType(type){
				return Array.isArray(this.btnType) && this.btnType.includes(type);
			}
		},
		components:{
			'btnTmpl':buttonTmpl,
			'btnGroup':btnGrpTmpl,
			'default':defaultBtnDropdownList,
			'multi':multiDropdownList,
			'plus':plusDropdownList
		},
		created(){
			this.initDropdownListType();
		},
		props:{
			text:{
				type:String,
				default:''
			},
			btnType:{
				type:[String,Array],
				default:'btn-primary'
			},
			btnIcon:{
				type:String,
				default:'defaultVal'
			},
			checkIcon:{
				type:String,
				default:'defaultVal'
			},
			dropIcon:{
				type:[String,Object],
				default:'caret'
			},
			// align icon relative to text in the button 
			dropIconAlign:{
				type:String,
				default:'none',
				validator(value){
					return ['left','right','none'].includes(value);
				}
			},
			listAlign:{
				type:String,
				default:'right'
			},
			listModel:{
				type:Array,
				default:()=>[]
			}
		}
	};
</script>