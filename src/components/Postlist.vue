<template>
  <div class="wrapper">
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
          }"><img :src="post.author.avatar_url" class="portrait">
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
          }">
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
            postpage:1
          }
        },
        methods:{
            getData(){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                  params:{
                    page:this.postpage,
                    limit:30
                  }
                })
                    .then((response)=>{
                      this.posts = response.data.data
                      this.isLoading = false
                    }).catch((error)=>{
                        console.log(error)
                })
            },
          renderList(value){
              this.postpage = value
            this.getData()
          }
        },
        beforeMount() {
            this.getData()
        }
    }
</script>

<style scoped>
  .loading {
    text-align: center;
    padding-top: 300px;
    padding-bottom: 600px;
  }
  a{
    text-decoration: none;
  }
  .main-header{
    list-style: none;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .main-header span{
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    font-size: 14px;
    margin: 0 10px;
  }
li:not(:first-child){
  padding-right: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 10px 10px 10px 10px;
  font-size: 14px;
  list-style: none;
  position: relative;
}
  .portrait{
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  img{
    vertical-align: middle;
  }
  .count-wrapper{
    display: inline-block;
    width: 70px;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  .reply-count{
    color:#9e78c0;
    font-size:14px;

  }
  .visit-count{
    color:#b4b4b4;
    font-size: 10px;
  }
  .title{
    display: inline-block;
    color:#333;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
  }
  .title:hover{
    text-decoration: underline;
  }
  .reply-time{
    float:right;
  }
  .reply-time{
    color:#778087;
    font-size: 11px;
  }
  .put_top,.put_good{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .put_tab{
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
  }
</style>
