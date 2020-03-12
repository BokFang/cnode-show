<template>
    <header class="header">
      <div class="container">
        <router-link :to="{
          name:'root',
        }">
          <a href="#" class="img"><img src="../assets/cnodejs_light.svg">
          </a>
        </router-link>
        <ul>
          <li><router-link :to="{
            name:'root',
          }">首页</router-link></li>
          <li><a href="#">新手入门</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
        </ul>
      </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    width: 90%;
    margin: auto;
    padding: 5px;
  }
  .img{
    padding: 6px 20px 0 0;

  }
  img{
    max-width: 120px;
    padding: 3px 0;
  }
  li>a{
    text-decoration:none;
    color: #ccc;
    padding: 10px 15px;
    font-size: 13px;
  }
  li{
    list-style: none;
    display: inline-block;
  }
  header{
    background-color: #444;
    height: 50px;
  }
  ul{
    float: right;
    padding-top: 10px;
  }
</style>
