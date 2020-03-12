<template>
  <div class="sidebar">
    <section class="sidebar-panel">
      <header class="header">作者</header>
      <div class="inner">
        <div class="user-card">
          <router-link :to="{
            name:'user_info',
            params:{

              name:userinfo.loginname
            }
          }">
            <span>
            <img :src="userinfo.avatar_url">
            </span>
          </router-link>
          <span class="user-name">{{userinfo.loginname}}</span>
          <div class="score">
            积分：{{userinfo.score}}
          </div>
          <div class="motto"></div>
        </div>
      </div>
    </section>
    <section class="sidebar-panel">
      <header class="header">作者参与的话题</header>
      <div class="inner">
        <ul>
          <li v-for="(create,index) in userinfo.recent_replies" v-if="index < 5">
              <router-link :to="{
                name:'post_content',
                params:{
                  id:create.id
                }
              }">
                <span class="create-title">{{create.title}}</span>
              </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="sidebar-panel">
      <header class="header">作者创建的话题</header>
      <div class="inner">
        <ul>
          <li v-for="(join,index) in userinfo.recent_topics" v-if="index < 5">
            <router-link :to="{
              name:'post_content',
              params:{
                id:join.id
              }
            }">
              <span class="create-title">{{join.title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "SlideBar",
      data(){
          return{
            userinfo:{}
          }
      },
      methods:{
        getUserData(){
          this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((res)=>{
              if(res.data.success == true){
                this.userinfo = res.data.data
              }
            })
            .catch((err)=>{
              console.log(err)
            })
        }
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
  a{
    text-decoration: none;
  }
  .sidebar-panel{
    margin-bottom: 13px;
  }
  .sidebar{
    float: right;
    width: 290px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .header{
    color: #51585c;
    border-radius: 3px 3px 0 0;
    padding: 10px;
    background-color: #f6f6f6;
  }
  .inner{
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
  }
  .user-card img{
    width: 48px;
    height: 48px;
    border-radius: 3px;
  }
  .user-name{
    font-size: 16px;
    color:#778087;
    vertical-align: middle;
    display: inline;
  }
  .score{
    margin-top: 10px;
    width: 80%;
    font-size: 14px;
  }
  .inner li{
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #778087;
  }
  .create-title{
    max-width: 270px;
    font-size: 14px;
    line-height: 30px;
    white-space: nowrap;
    color: #778087;
  }
  .create-title:hover{
    text-decoration: underline;
  }
</style>
