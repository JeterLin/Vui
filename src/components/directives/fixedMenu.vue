<script >
// this directive is for fixing menu on the page and the element this directive apply to must be positioned absolutely
	let scrolling = null;
	let debounce = (fn,mills = 200)=>{
		let timer = null;
		return function(...args){
			clearTimeout(timer);
			timer = setTimeout(()=>{
					fn.apply(this,args);
					clearTimeout(timer);
					timer = null;
			},mills);
		};
	};
	let getElementLeft=(el)=>{
		let actualLeft = 0;
		while(el){
			// console.info(el);
			actualLeft += el.offsetLeft;
			el = el.offsetParent;
		}
		// console.info(actualLeft);
		return actualLeft;
	};
	let getElementTop=(el)=>{
		let actualTop = 0;
		while(el){
			actualTop += el.offsetTop;
			el = el.offsetParent;
		}
		return actualTop;
	}
	// get browser window scrollTop
	let getBsWinScrollTop=()=>{
		return document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop :document.documentElement.scrollTop ;
	};
	let fixedMenu = {
		inserted(el,binding){
			let posParent = null;
			if( binding.value && 
				typeof binding.value.posParent === 'string' && 
				binding.value.posParent.length > 0 ){
				posParent = document.querySelector(binding.value.posParent);
			}
			fixedMenu.parent = posParent || {	
				addEventListener(e,fn){
					window.addEventListener(e,fn);
				},
				removeEventListener(e,fn){
					window.removeEventListener(e,fn);
				},
				get scrollTop(){
					return getBsWinScrollTop();
				}
			};
			let originPos = (getComputedStyle(el)['position'] == '' ? el.style.position : getComputedStyle(el)['position']);
			let originLeft = (getComputedStyle(el)['left'] == '' ? el.style.left : getComputedStyle(el)['left']).replace('px','');
			let originTop  = (getComputedStyle(el)['top'] == '' ? el.style.top : getComputedStyle(el)['top'].replace('px',''));
			originPos = (originPos === '') ? 'static' : originPos;
			// originLeft = el.offsetLeft;

			let actualLeft = getElementLeft(el);
			let actualTop = getElementTop(el);
			// let originTop = el.offsetTop;
			
			let topDiff = 0;
			let isSetFlag = false;
			scrolling=()=>{
				// when the top edge of window reach the current element's top edge
				if(actualTop - fixedMenu.parent.scrollTop  <= topDiff){
					// avoid redundant settings
					if(!isSetFlag){
						el.style.position = "fixed";
						el.style.top="0px";
						el.style.left = actualLeft + "px";
						isSetFlag = true;
					}
				}else {
					if(isSetFlag){
						el.style.position = originPos;
						el.style.top = originTop + "px";
						el.style.left = originLeft + "px";
						isSetFlag  = false;
					}
				}
				if(typeof fixedMenu.scrollEnd === "function"){

				}
			};
			fixedMenu.parent.addEventListener('scroll',scrolling);
		},
		unbind(el){
			fixedMenu.parent.removeEventListener('scroll',scrolling);
		},
		scrollEnd:null
	};
	export default fixedMenu;
</script>