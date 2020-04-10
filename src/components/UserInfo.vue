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
            }" class="create-title">
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
            }" class="join-title">
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
  @media (max-width: 500px){
    .create-title,.join-title{
      display: inline-block;
      max-width: 75%;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-left: .5rem;
    }
  }
  li{
    list-style: none;
  }
  .loading {
    text-align: center;
    padding-top: 18.75rem;
  }
  a{
    text-decoration: none;
  }

  .user-main {
    width: 90%;
    margin: .9375rem auto;
  }
.panel{
  margin-bottom: .8125rem;
  }
  .header{
    padding: .625rem;
    background-color: #f6f6f6;
    border-radius: .1875rem .1875rem 0 0;
    color: #80bd01;
    font-size: .875rem;
  }
  .create_topic,.join-topic{
    color:#444;
  }
  .homePage{
    color: #80bd01;
  }
  .divider{
    padding: 0 .3125rem;
    color: #ccc;
  }
  .page-content{
    padding: .625rem;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 .1875rem .1875rem;
    background-color: #fff;
  }
  .user_avatar {
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    border-radius: .1875rem;
  }
  .login-name{
    color: #778087;
    font-size: .875rem;
    padding: .5rem;
  }
  .score{
    color:#333;
    font-size: .875rem;
  }
  .information{
    margin-top: .625rem;
  }
  .information li{
    line-height: 2em;
  }
  .create-time{
    color: #ababab;
    font-size: .875rem;
  }
  .photo{
    width: 1.875rem;
    height: 1.875rem;
  }
  .inner{
    display: flex;
    flex-wrap: nowrap;
    padding-right: .625rem;
    background: #fff;
    border-top: .0625rem solid #f0f0f0;
    padding:.625rem;
  }
  .create-title,.join-title{
    color: #08c;
    padding-left: .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
  .create-title:hover{
    text-decoration: underline;
  }
  .join-title:hover{
    text-decoration: underline;
  }
  .last-create,.last-join{
    color:#777;
    font-size: .6875rem;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
</style>
