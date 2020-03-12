<template>
  <div>
    <div class="loading" v-if="isLoading"><img src="../assets/loading.gif"></div>
    <div class="user-main" v-else>
      <section class="homePage panel">
        <header class="header">
          <router-link :to="{
          name:'root',
        }" class="homePage">主页</router-link>
          <span class="divider">/</span>
        </header>
        <div class="page-content">
          <div>
            <img :src="userInfo.avatar_url" class="user_avatar">
            <span class="login-name">{{userInfo.githubUsername}}</span>
          </div>
          <div class="information">
            <ul>
              <li class="score">{{userInfo.score}}
                积分</li>
              <li class="create-time">注册时间
                {{userInfo.create_at|formatDate}}</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="latest_create panel">
        <header class="header create_topic">最近创建的话题</header>
        <ul>
          <li v-for="(create,index) in userInfo.recent_topics" v-if="index < 5" class="inner">
            <img :src="userInfo.avatar_url" class="user_avatar photo">
            <router-link :to="{
              name:'post_content',
              params:{
                id:create.id
              }
            }">
              <span class="create-title">{{create.title}}</span>
            </router-link>
            <span class="last-create">{{create.last_reply_at|formatDate}}</span>
          </li>
        </ul>
      </section>
      <section class="latest-join panel">
        <header class="header join-topic">最近参与的话题</header>
        <ul>
          <li v-for="(join,index) in userInfo.recent_replies" v-if="index < 5" class="inner">
            <img :src="join.author.avatar_url" class="user_avatar photo">
            <router-link :to="{
              name:'post_content',
              params:{
                id:join.id
              }
            }">
              <span class="join-title">{{join.title}}</span>
            </router-link>
            <span class="last-join">{{join.last_reply_at|formatDate}}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data(){
          return{
            isLoading:true,
            userInfo:{}
          }
        },
        methods:{
          getUserData(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
              .then((res)=>{
                this.userInfo = res.data.data
                this.isLoading = false
              })
              .catch((err)=>{
                console.log(err)
              })
          },
          },
          beforeMount() {
            this.getUserData()
          }

    }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .loading {
    text-align: center;
    padding-top: 300px;
  }
  a{
    text-decoration: none;
  }

  .user-main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
.panel{
  margin-bottom: 13px;
  margin-right: 305px;
  }
  .header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #80bd01;
    font-size: 14px;
  }
  .create_topic,.join-topic{
    color:#444;
  }
  .homePage{
    color: #80bd01;
  }
  .divider{
    padding: 0 5px;
    color: #ccc;
  }
  .page-content{
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
  }
  .user_avatar {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border-radius: 3px;
  }
  .login-name{
    color: #778087;
    font-size: 14px;
  }
  .score{
    color:#333;
    font-size: 14px;
  }
  .information{
    margin-top: 10px;
  }
  .information li{
    line-height: 2em;
  }
  .create-time{
    color: #ababab;
    font-size: 14px;
  }
  .photo{
    width: 30px;
    height: 30px;
  }
  .inner{
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    padding:10px;
  }
  .create-title,.join-title{
    color: #08c;
    padding-left: 25px;
  }
  .create-title:hover{
    text-decoration: underline;
  }
  .join-title:hover{
    text-decoration: underline;
  }
  .last-create,.last-join{
    color:#777;
    font-size: 11px;
    float: right;
  }
</style>
