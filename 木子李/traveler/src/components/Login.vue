<template>
  <div class="login-container">
    <div class="flex-page">
      <div class="flex-left">
        <div class="login-title">
          <h1>
            <span v-text="projectName"></span>
          </h1>
          <p v-text="subHead"></p>
        </div>
        
      </div>
      <div class="flex-right">
        <div class="login-form">
          <div class="form-cav-title">
            <canvas>
              
            </canvas>
            <h1>用户登录</h1>
          </div>
          <div class="form-input">
            <label v-bind:class="[{ 'floatUp': isFloatUp.check0 }]">用户名</label> 
            <input v-model="t_username" @focus="floatUp('check0')" @blur="!t_username&&cancelFloat('check0')"/>
          </div>
          <div class="form-input">
            <label v-bind:class="[{ 'floatUp': isFloatUp.check1 }]">密码</label>
            <input v-model="t_password" @focus="floatUp('check1')"  @blur="!t_password&&cancelFloat('check1')"/>
          </div>
          <button class="form-btn login-btn" @click="goHome">登录</button>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>© 2020 木鱼微微暖</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data(){
    return {
      projectName: '旅行日记',
      subHead: '分享人生每一朵盛开的花',
      isFloatUp: {check0:false,check1:false},
      t_username: '',
      t_password: ''
    }
  },
  methods:{
    goHome: function(){
      this.$store.commit('login', {current: "test2333"});
      this.$router.push('main');
    },
    floatUp: function(i){
      this.isFloatUp[i] = true;
    },
    cancelFloat: function(i){
      this.isFloatUp[i] = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style/login.css';
</style>
