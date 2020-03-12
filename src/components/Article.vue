<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div class="article-wrapper" v-else>
      <div class="article-topic panel">
        <div class="article-header">
          <div class="topic-title-wrapper">
          <span :class="[{put_top:(post.top == true),put_good:(post.good == true),
          put_tab:(post.top != true && post.good != true)}]">{{post | formatType}}</span>
            <span class="topic-title">
            {{post.title}}
          </span>
          </div>
          <div class="article-information" >
          <span>• 发布于
            {{post.create_at | formatDate}}
          </span>
            <span>• 作者
            {{post.author.loginname}}
          </span>
            <span>{{post.visit_count }}
            次浏览</span>
            <span>• 来自
            {{post | formatType}}</span>
          </div>
        </div>
        <div v-html="post.content" class="inner-topic markdown-body"></div>
      </div>
      <div class="reply-wrapper panel">
        <div class="reply-top">{{post.reply_count}}回复</div>
        <div class="reply-content" v-for="(reply,index) in post.replies">
          <router-link :to="{
            name:'user_info',
            params:{
              id:reply.id,
              name:reply.author.loginname
            }
          }">
            <img class="author-photo" :src="reply.author.avatar_url">
          </router-link>
          <span class="reply-name">{{reply.author.loginname}}</span>
          <span class="reply-time">{{index+1}}楼 • {{reply.create_at|formatDate}}</span>
          <span class="praise" v-if="reply.ups.length>0">{{reply.ups.length}}👍</span>
          <div class="reply-text markdown-body" v-html="reply.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Article",
      data(){
        return{
          isLoading:true,
          post:{}
        }
      },
      methods:{
        getArticleData(){
          this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then((res)=>{
              if(res.data.success == true){
                this.isLoading = false
                this.post = res.data.data
              }
            })
            .catch((err)=>{
              console.log(err)
            })
        }
      },
      beforeMount() {
        this.getArticleData()
      },
      watch:{
          '$route'(to,from){
            this.getArticleData()
          }
      }
    }
</script>

<style >
  @import url('../assets/markdown-github.css');
  .panel{
    margin-right: 305px;
  }
  a:hover{
    text-decoration: underline;
  }
  .loading{
    text-align: center;
    padding-top: 300px;
  }
  .article-topic{
    margin-bottom: 13px;
  }
  .article-header{
    padding: 10px;
    background-color: #fff;
    border-radius: 3px 3px 0 0;
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
  .topic-title-wrapper{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .article-information{
    font-size: 12px;
    color: #838383;
  }
  .inner-topic{
    padding: 10px 20px 10px 20px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
  }
  .reply-top{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .author-photo{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
  }
  .reply-content{
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    padding: 10px;
    font-size: 14px;
  }
  .reply-name{
    font-size: 12px;
    font-weight: 700;
    color: #666;
  }
  .reply-time{
    color: #08c;
    font-size: 11px;
  }
  .reply-text{
    padding-left: 50px;
  }
  .praise{
    padding-left: 20px;
  }
</style>
