<template>
  <div class="pagination">
    <ul>
      <li @click="changeBtn">首页</li>
      <li @click="changeBtn">上一页</li>
      <li v-if="judge" class="pagebtn">...</li>
      <li v-for="btn in pagebtns"
          :class="[{currentPage:btn == currentPage},
          'pagebtn']" @click="changeBtn(btn)"
          :ref="'btn' + btn" :key="btn">{{btn}}</li>
      <li class="pagebtn">...</li>
      <li @click="changeBtn">下一页</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Pagination",
      data(){
          return{
            pagebtns:[1,2,3,4,5],
            currentPage:1,
            judge:false
          }
      },
      methods:{
        changeBtn(page){
          if(typeof page != 'number'){
            switch(page.target.innerText){
              case '上一页':
                this.$refs[`btn${this.currentPage}`][0].previousElementSibling.click()
                break;
              case '下一页':
                this.$refs[`btn${this.currentPage}`][0].nextElementSibling.click()
                break;
                case '首页':
                  this.$refs[`btn1`][0].click()
                break;
            }
            return
          }
          if(page > 4){
            this.judge = true
          }else{
            this.judge = false
          }
          this.currentPage = page
          if(page == this.pagebtns[4]){
            this.pagebtns.shift()
            this.pagebtns.splice(4,0,this.pagebtns[3]+1)
          }else if(page == this.pagebtns[0] && page > 1){
            this.pagebtns.unshift(this.pagebtns[0]-1)
            this.pagebtns.splice(5,1)
          }
          this.$emit('handleList',this.currentPage)
        }
      }
    }
</script>

<style scoped>
  .pagination{
    margin-top: .3125rem;
    margin-bottom: 1.25rem;
    background-color: white;
    padding: .375rem 1.25rem;
    border-radius: .3125rem;
    border: .0625rem solid #888888;
  }
  li{
    display: inline;
    background-color: #fff;
    border: .0625rem solid #ddd;
    color: #778087;
    border-radius: .1875rem;
    outline: none;
    height: 1.3125rem;
    cursor: pointer;
    padding: 0.125rem;
    width: 3.4375rem;
    height: 1.8125rem;
  }
  .pagebtn{
    position: relative;
    bottom: .0625rem;
    width: 2.5rem;
    margin: 0.25rem;
  }
  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>
