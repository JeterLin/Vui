<script >
	let scrolling;
	let throttle = (fn,mills = 200)=>{
		let timer = null;
		return function(...args){
			clearTimeout(timer);
			timer = setTimeout(()=>{
				if(timer){
					fn.apply(this,args);
					clearTimeout(timer);
					timer = null;
				}
			},mills);
		};
	};
	let getElementLeft=(el)=>{
		let actualLeft = 0;
		while(el){
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
	let fixedMenu = {
		init(parent){
			fixedMenu.parent = parent || {
				addEventListener(e,fn){
					window.addEventListener(e,fn);
				},
				removeEventListener(e,fn){
					window.removeEventListener(e,fn);
				},
				get scrollTop(){
					return document.body.scrollTop;
				}
			};
			return fixedMenu;
		},
		inserted(el){
			fixedMenu.parent = fixedMenu.parent || {	
				addEventListener(e,fn){
					window.addEventListener(e,fn);
				},
				removeEventListener(e,fn){
					window.removeEventListener(e,fn);
				},
				get scrollTop(){
					return document.body.scrollTop > document.documentElement.scrollTop ? document.body.scrollTop :document.documentElement.scrollTop ;
				}
			};
			let actualLeft = getElementLeft(el);
			let actualTop = getElementTop(el);
			let limitTop = 0;
			let isSetFlag = false;
			// must preset the current element's left offset,otherwise once it is set to 'fixed' ,
			// it will run into left-most edge of the window 
			el.style.left = actualLeft + "px";
			scrolling=()=>{
				// when the top edge of window reach the current element's top edge
				if(actualTop - fixedMenu.parent.scrollTop  <= limitTop){
					// avoid redundant settings
					if(!isSetFlag){
						el.style.position = "fixed";
						el.style.top="0px";
						isSetFlag = true;
					}
				}else {
					if(isSetFlag){
						el.style.position = 'static';
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