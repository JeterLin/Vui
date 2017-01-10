<script >
	let titlesMap = new Array();
	
	const TitleItem = class {
		constructor(rank,title='',subtitles=[]){
			this.rank = rank;
			this.title = title;
			this.subtitles = subtitles;
		}
	};
	const Stack = class {
		constructor(){
			this.container = [];
		}
		pop(){
			return this.container.pop();
		}
		push(item){
			this.container.push(item);
		}
		peek(){
			if(this.container.length>0){
				return this.container[this.container.length - 1];
			}
			return null;
		}
		size(){
			return this.container.length;
		}
		isEmpty(){
			return this.container.length === 0;
		}
		clear(){
			while(!this.isEmpty())this.pop();
		}
	};
	let stack = new Stack();
	stack.push(titlesMap);
	let debounce=function(fn,mills=200){

		let timer = null;
		return function(...args){
			clearTimeout(timer);
			timer = setTimeout(()=>{
				clearTimeout(timer);
				fn.apply(this,args);
			},mills);
		};
	};
	let once=function(fn){
		let flag = true;
		return function(...args){
			if(flag){
				flag = false;
				fn.apply(this,args);
			}
		}
	};
	let insertedEndList  = [];
	let preRank = -1;
	// must ensure this callback is the last element of `insertedEndList`
	insertedEndList.push(debounce(function(){
		// reset all data in the `stack` `titlesMap` `preRank`
		// every time the whole page of `v-xtitle` directives are inserted
		titlesMap = [];
		stack.clear();
		stack.push(titlesMap);
		preRank = -1;
	}));
	export default {
		inserted(el,binding){
			let headingText = el.innerHTML;
			if(binding.arg === 'rank' && typeof binding.value == 'number'){
				let rank = binding.value;
				let titleItem = new TitleItem(rank,headingText);
				if( preRank >= rank ){
					while(!stack.isEmpty()){
						let topList = stack.peek();
						if(topList.length > 0 && topList[0].rank <= rank)break;
						stack.pop();
					}
				}
				let parentList = stack.peek();
				parentList.push(titleItem);
				stack.push(titleItem.subtitles);
				preRank = rank;
			}
			for(let fn of insertedEndList){

				fn.call(this,titlesMap);
			}
		},
		// execute `fn` every time the whole page of `v-xtitle` directives are inserted
		onInsertedEnd(fn){
			// insertedEndList.push(debounce(fn));
			insertedEndList.unshift(debounce(fn));
		},
		// execute `fn` for one time when the whole page of `v-xtitle` directives are inserted
		onceInsertedEnd(fn){
			insertedEndList.unshift(once(debounce(fn)));
		}
	};
</script>