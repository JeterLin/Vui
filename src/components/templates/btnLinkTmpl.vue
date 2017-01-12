<template>
	<a href="javascript:;" class="btn btn-link" :class="getClassNames('anchor')">
		<span v-if="btnType === 'large'" class="btn-header btn-icon" :class="getClassNames('headerIcon')"></span>
		<span v-if="btnType === 'large'" :class="getClassNames('headerText')">{{btnText.header}}</span>
		<span :class="getClassNames('bodyText')">{{btnText.body || btnText}}</span>
	</a>
</template>
<script>
	let classMap = {
		'cart':'cart',
		'heart':'heart'
	};
	export default {
		data(){
			return {

			};
		},
		methods:{
			getClassNames(componentType)
			{
				let resultList = [];
				if(this.btnType === 'large'){
					switch(componentType){
						case 'anchor':
						resultList.push('btn-link-large');
						break;
						case 'bodyText':

						resultList.push('btn-body');
						break;
						case 'headerIcon':
						resultList.push(classMap[this.btnIcon]);
						 break;
						case 'headerText':
						resultList.push('btn-header-name');
						break;
						default:break;
					}
				}
				return resultList;
			}
		},
		props:{
			btnType:{
				type:String,
				default:'normal'
			},
			btnText:{
				type:[String,Object],
				default:''
			},
			btnIcon:{
				type:String,
				default:''
			}
		}
	};
</script>
