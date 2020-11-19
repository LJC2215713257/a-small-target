<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store/index'

export default {
  name: 'TravelLogApp',
  store: store
}
</script>

<style>
@import './assets/style/index.css';
@import './assets/style/font/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0px 0px;
}
body{
  position:absolute;
  top:0px;left:0px;right:0px;bottom:0px;
  margin: 0px 0px;
  padding: 0px 0px;
  border: none;
  z-index: 10; 
}
</style>
