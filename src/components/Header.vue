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
          <li><router-link :to="{name:'root',}">首页</router-link></li>
          <li><router-link :to="{name:'Beginners_Guide'}">新手入门</router-link></li>
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
    padding: .3125rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .img{
    padding: .375rem 1.25rem 0 0;

  }
  img{
    width: 7.5rem;
    padding: 0.1875rem 0;
  }
  ul>li>a:hover{
    color: white;
  }
  li>a{
    text-decoration:none;
    color: #ccc;
    padding: 0.625rem .9375rem;
    font-size: .8125rem;
  }
  li{
    list-style: none;
    display: inline-block;
  }
  header{
    background-color: #444;
    padding-bottom: .125rem;

  }
  ul{
    padding-top: .625rem;
  }
</style>
