<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
    components: {Header,Postlist},
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #e1e1e1;
  }
  .main{
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
</style>
