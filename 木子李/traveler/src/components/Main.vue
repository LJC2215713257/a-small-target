<template>
  <div class="main-page">
    <div class="page-head" @mousemove="renderGradient" @mouseleave="hiddenGradient" @mouseenter="showGradient">

      <div class="def-sty head-nav">
          <h1 class="tra-logo"><i></i><span>旅行日记</span>
            <div class="page-head-grad">
            </div>
          </h1>
          <ul class="opt-nav">
              <li>
                  <h2>个人中心</h2>
                  <div style="display:none;">
                      2333
                  </div>
              </li>
          </ul>
          <div class="opt-config">
            <div class=""></div>
          </div>
      </div>
    </div>
    <div style="height:600px;">
        
    </div>
  </div>
</template>

<script>
import "jquery";
export default {
  name: "MainPage",
  data() {
    return {
        
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/style/index.css";
</style>
