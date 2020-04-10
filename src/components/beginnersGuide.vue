<template>
    <div class="wrapper">
        <div class="top">
            <span class="home-page"><router-link :to="{name:'root'}">主页</router-link></span>
            /
            <span class="get-start"> Node.js 新手入门</span>
        </div>
        <div class="inner-topic">
            <div class="markdown-text">
                <h2>Node.js 入门</h2>
                <p><strong>快速搭建 Node.js 开发环境以及加速 npm</strong></p>
                <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                <p><strong>Node.js 包教不包会</strong></p>
                <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
                <p><strong>ECMAScript 6入门</strong></p>
                <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
                <p><strong>七天学会NodeJS</strong></p>
                <p><a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a></p>
                <h2>Node.js 资源</h2>
                <p><strong>国内的 npm 镜像源</strong></p>
                <p><a href="http://cnpmjs.org/">http://cnpmjs.org/</a></p>
                <p><strong>node weekly</strong></p>
                <p><a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a></p>
                <p><strong>node123-<em>node.js中文资料导航</em></strong></p>
                <p><a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a></p>
                <p><strong>A curated list of delightful Node.js packages and resources</strong></p>
                <p><a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a></p>
                <p><strong>Node.js Books</strong></p>
                <p><a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a></p>
                <h2>Node.js 名人</h2>
                <p><strong>名人堂</strong></p>
                <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
                <h2>Node.js 服务器</h2>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "beginnersGuide"
    }
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
.markdown-text h1, h2, h3, h4, h5, h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative; }
.markdown-text h2 tt, h2 code {
    font-size: inherit; }
.markdown-text h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black; }
.markdown-text p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0; }
.markdown-text a {
    color: #4183C4; }
.markdown-text a.absent {
    color: #cc0000; }
.markdown-text a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}
.markdown-text{

}
    .top{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: .875rem;
    }
    .home-page{
        color: #80bd01;
    }
    .get-start{
        color: #999;
    }
    .inner-topic{
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        border-radius: 0 0 3px 3px;
    }

</style>