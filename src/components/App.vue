<template>
  <div id="ui-demo">
    <head-nav></head-nav>
    <left-nav></left-nav>
    <intro></intro>    
    
  </div>
</template>

<script>
import leftNav from "./leftNav.vue";
import headNav from "./headNav.vue";

import intro from "./intro.vue";

export default {
  name: 'app',
  data () {
    return {};
  },
    components:{
      "left-nav":leftNav,
      "intro":intro,
      "headNav":headNav
    }
}
</script>

<style lang="scss">
  @import "./style/normalize";
  @import "./style/common";
  @import './style/mixin';
  body{
      font-family:$font-family-sans-serif;
      font-size:$font-size-base;
      line-height:$line-height-base;
      color:$color-font;
  }
  html,body{
      min-height:100%;
   }
  #ui-demo{
    @include clearfix;
    width:100%;
    height:100%;
  }
</style>
