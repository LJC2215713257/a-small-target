<template>
  <div class="mail-page">
    <h1>{{title}}</h1>
    <div>{{content}}</div>
  </div>
</template>

<script>
import mail from "../assets/content/mail.json";//引入josn文件
import "jquery";
export default {
  name: "MailPage",
  data() {
    let mthis = mail.first;
    return {
        title: mthis.title,
        content: mthis.content
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/style/mail.css";
</style>
