<template>
	<btn-group class="btn-dropdown">
		<slot></slot>
		<btn-tmpl :btnType="btnType" @click.native="isDrop=!isDrop">
			{{btnText}}
			<span class="btn-icon caret-down" :class="caretAlign !='none' ? 'stick-'+caretAlign :'' " ></span>
		</btn-tmpl>
		<component :is="dropdownListType" v-show="isDrop"></component>
	</btn-group>	
</template>
<script >
	import buttonTmpl from './buttonTmpl.vue';
	import btnGrpTmpl from './btnGrpTmpl.vue';
	import defaultBtnDropdownList from "./defaultBtnDropdownList.vue";
	export default {
		data(){
			return {
				isDrop:false
			};
		},
		components:{
			'btnTmpl':buttonTmpl,
			'btnGroup':btnGrpTmpl,
			'default':defaultBtnDropdownList
		},
		props:{
			btnText:{
				type:String,
				default:''
			},
			dropdownListType:{
				type:String,
				default:'default'
			},
			btnType:{
				type:String,
				default:'btn-primary'
			},
			caretAlign:{
				type:String,
				default:'none',
				validator(value){
					return ['left','right','none'].includes(value);
				}
			}
		}
	};
</script>

<style lang="scss">
	// $fa-font-path:"../../assets/fonts/font-awesome" ;
	// @import "../style/font-awesome/font-awesome";
	// @import "../style/common";
	// @import "../style/button-icon";
	// @import "../style/button-dropdown";
	
</style>
