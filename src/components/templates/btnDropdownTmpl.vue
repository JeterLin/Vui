<template>
	<btn-group :class="getDropdownClassNames()">
		<slot></slot>
		<btn-tmpl :btnType="getBtnType()" @click.native="isDrop=!isDrop" :btnIcon="getBtnIconName()">
			<span :slot="getBtnSlotName()">
				<span class="drop-btn-text">{{text}}</span><span class="btn-icon " :class="getDropIconClassNames()" ></span>
			</span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop" :btnType="btnType" :listModel="listModel" :listAlign="listAlign">{{text}}</component>
	</btn-group>	
</template>
<script >
	import buttonTmpl from './buttonTmpl.vue';
	import btnGrpTmpl from './btnGrpTmpl.vue';
	import defaultBtnDropdownList from "./defaultBtnDropdownList.vue";
	export default {
		data(){
			return {
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
					// the key part below is values of dropIconAlign
					'drop-icon-left':'stick-left',
					'drop-icon-right':'stick-right',

					'defaultVal':''
				}
			};
		},
		methods:{
			getBtnType(){
				if(typeof this.btnType==='string'){
					return ['btn-dropdown',this.btnType];
				}else if(Array.isArray(this.btnType)){
					return [...this.btnType,'btn-dropdown'];
				}

			},
			log(text){
				console.info(text);
			},
			getDropdownClassNames(){
				if(Array.isArray(this.btnType) &&
					this.btnType.includes('btn-circle')){
					return 'circle-btn-dropdown';
				}
				if(Array.isArray(this.btnType) &&
					this.btnType.includes('btn-multi') ){
					return 'multi-dropdown';
				}
				return 'btn-dropdown';
			},
			getBtnIconName(){
				if(['plus','minus','check'].includes(this.checkIcon)){
					return this.classMap[this.checkIcon];
				}
				return 'defaultVal';
			},
			getBtnSlotName(){
				if(['plus','check','minus'].includes(this.checkIcon)){
					return 'afterIcon';
				}
				return '';
			},
			getDropIconClassNames(){
				let dropIconAlign= 'defaultVal';
				if(this.dropIconAlign== 'left'){
					dropIconAlign = 'drop-icon-left';
				}else if(this.dropIconAlign == 'right'){
					dropIconAlign = 'drop-icon-right';
				}
				let resultList = [
					this.classMap[this.dropIcon],

					this.classMap[dropIconAlign]
				];
				return resultList;
			}
		},
		components:{
			'btnTmpl':buttonTmpl,
			'btnGroup':btnGrpTmpl,
			'default':defaultBtnDropdownList
		},
		props:{
			text:{
				type:String,
				default:''
			},
			dropdownListType:{
				type:String,
				default:'default'
			},
			btnType:{
				type:[String,Array],
				default:'btn-primary'
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