<template>
  <div id="ui-demo">
    <head-nav></head-nav>
    <left-nav></left-nav>
    <switch-wrapper></switch-wrapper>   
    <footer></footer> 
  </div>
</template>

<script>
import leftNav from "./leftNav.vue";
import headNav from "./headNav.vue";

// import intro from "./intro.vue";
import switchWrapper from './switchWrapper.vue';

export default {
  name: 'app',
  data () {
    return {};
  },
    components:{
      "left-nav":leftNav,
      // "intro":intro,
      "switchWrapper":switchWrapper,
      "headNav":headNav
    }
}
</script>

<style lang="scss">
  @import "./style/font-family-def";
  @import "./style/font-awesome/font-awesome";

  @import "./style/normalize";
  @import "./style/common";
  @import './style/mixin';
  @import "./style/detail-intro";
  @import "./style/button-icon";
  @import "./style/button";
  @import "./style/button-dropdown";
  @import './style/menus';

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

    >footer {
      // display:inline-block;
      overflow:hidden;

      height:80px;
    }
  }

</style>
