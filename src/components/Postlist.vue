<template>
  <div class="wrapper" >
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div v-else>
      <ul>
        <li class="main-header">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </li>
        <li v-for="post in posts">
          <router-link :to="{
            name:'user_info',
            params:{
              id:post.id,
              name:post.author.loginname
            }
          }"><img v-lazy="post.author.avatar_url" class="portrait">
          </router-link> <!--动态绑定属性记得加:-->
          <span class="count-wrapper">
            <span class="reply-count">{{post.reply_count}}</span>
            <span class="visit-count">/</span>
            <span class="visit-count">{{post.visit_count}}</span>
          </span>
          <span :class="[{put_top:(post.top == true),put_good:(post.good == true),
          put_tab:(post.top != true && post.good != true)}]">{{post | formatType}}</span>
          <router-link :to="{
            name:'post_content',
            params:{
              id:post.id,
              name:post.author.loginname
            }
          }" class="title">
            <span class="title">{{post.title}}</span>
          </router-link>
          <span class="reply-time">{{post.last_reply_at | formatDate}}</span>
        </li>
        <Pagination @handleList="renderList"></Pagination>
      </ul>
    </div>
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  export default {
    name: "Postlist",
    components:{Pagination},
    data(){
      return{
        posts:[],
        isLoading:true,
        postpage:1,
      }
    },
    methods:{
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          params:{
            page:this.postpage,
            limit:30
          }
        }).then((response)=>{
          this.posts = response.data.data
          this.isLoading = false
        }).catch((error)=>{
          console.log(error)
        })
      },
      renderList(value){
        this.postpage = value
        this.getData()
      },
    },
    beforeMount() {
      this.getData()
    }
  }
</script>

<style scoped>
  @media (max-width: 500px){
    .reply-time{
      position: absolute;
      right: 3rem;
      color:#778087;
      font-size: .6875rem;
    }
    .title{
      display: inline-block;
      max-width: 70%;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .loading {
    text-align: center;
    padding-top: 18.75rem;
    padding-bottom: 37.5rem;
  }
  a{
    text-decoration: none;
  }
  .main-header{
    list-style: none;
    padding: 0.65rem;
    background-color: #f6f6f6;
    border-radius: 0.1875rem 0.1875rem 0 0;
  }
  .main-header span{
    color: #80bd01;
    padding: 0.1875rem .25rem;
    border-radius: 0.1875rem;
    font-size: .875rem;
    margin: 0.625rem;
  }
  li:not(:first-child){
    background: #fff;
    border-top: .0625rem solid #f0f0f0;
    padding: 0.625rem;
    font-size: .875rem;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }
  .portrait{
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 0.1875rem;
  }
  img{
    vertical-align: middle;
  }
  .count-wrapper{
    display: inline-block;
    width: 4.735rem;
    text-align: center;
    height: 1.875rem;
    line-height: 1.875rem;
  }
  .reply-count{
    color:#9e78c0;
    font-size:.875rem;

  }
  .visit-count{
    color:#b4b4b4;
    font-size: 0.625rem;
  }
  .title{
    display: inline-block;
    color:#333;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    text-overflow: ellipsis;
  }
  .title:hover{
    text-decoration: underline;
  }
  .reply-time{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    color:#778087;
    font-size: .6875rem;
  }
  .put_top,.put_good{
    text-align: center;
    width:2rem;
    height: 1.15rem;
    background: #80bd01;
    border-radius: 0.1875rem;
    color: #fff;
    font-size: .75rem;
    margin-right: .3125rem;
  }
  .put_tab{
    text-align: center;
    width:2rem;
    height: 1.15rem;
    background-color: #e5e5e5;
    color: #999;
    border-radius: 0.1875rem;
    font-size: .75rem;
    margin-right: .3125rem;
  }
</style>
