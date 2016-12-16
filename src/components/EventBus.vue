<script >
	let EventMap={};
	export default {
		on(event,callback){
			if(!Array.isArray(EventMap[event])){
				EventMap[event]=[];
			}
			EventMap[event].push(callback);
		},
		off(event,callback){
			if(typeof callback === 'undefined'){
				if(Array.isArray(EventMap[event]))EventMap[event]=[];
			}else if(Array.isArray(EventMap[event])){
				let idx = 0;
				for(let fn of EventMap[event]){

					if(typeof fn === 'function' && fn === callback){
						EventMap[event].splice(idx,1);
						break;
					}
					idx++;
				}
			}
		},
		once(event,callback){
			// let self = this;
			let proxyCallback = (...args)=>{
				callback.apply(null,args);
				this.off(event,proxyCallback);
			};
			this.on(event,proxyCallback);
		},
		emit(event,...args){
			let cbList = EventMap[event];
			for(let fn  of cbList){
				fn.apply(null,args);
			}
		}


	};
</script>