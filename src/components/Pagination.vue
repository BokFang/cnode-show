<template>
  <div class="pagination">
    <ul>
      <li @click="changeBtn">首页</li>
      <li @click="changeBtn">上一页</li>
      <li v-if="judge" class="pagebtn">...</li>
      <li v-for="btn in pagebtns"
          :class="[{currentPage:btn == currentPage},'pagebtn']" @click="changeBtn(btn)" :ref="'btn' + btn">{{btn}}</li>
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
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }
  li{
    display: inline;
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }
  .pagebtn{
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }
  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>
