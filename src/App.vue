<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
  import 'swiper/js/swiper';
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
  @import './assets/common.css';
  @import './assets/iconfont.css';
  @import "~swiper/css/swiper.min.css";
</style>
