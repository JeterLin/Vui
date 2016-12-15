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
  #ui-demo{
    @include clearfix;
    width:100%;
    height:100%;
  }
</style>
