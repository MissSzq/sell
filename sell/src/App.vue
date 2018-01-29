<template>
  <div id="app">
    <TopHeader :seller="seller"></TopHeader>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import TopHeader from '@/components/common/TopHeader'
  const ERR_OK = 0;
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      axios.get('/api/seller').then(response =>{
        if(response.data.errno ===ERR_OK){
          this.seller = response.data.data;
          console.log(this.seller)
        }
      })
    },
    components: {
      TopHeader
    }
  }

</script>

<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #778593;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  }

  .tab .router-link-active {
    color: rgb(240, 20, 20);
  }

</style>
