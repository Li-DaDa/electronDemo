<template>
    <div id="app" class="app">
        <HeaderBar>
        </HeaderBar>
        这是3.0.3
        <BottomBar>
        </BottomBar>
    </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar'
  import BottomBar from './components/BottomBar'

  export default {
    components: {
      HeaderBar,
      BottomBar
    },
    methods: {}
  }
</script>

<style lang="less">
    @import "assets/css/base.less";
    .app {
        background-color: #ffffff;
    }
</style>
