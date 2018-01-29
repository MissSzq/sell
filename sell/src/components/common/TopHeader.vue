<template>
  <div class="top-header">
    <!-- 头部内容 -->
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <i class="icon" :class="classMap[seller.supports[0].type]"></i>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}</span>个
        <i class="iconfont icon-qianjinxiayige"></i>
      </div>
    </div>
    <!-- 公告栏 -->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="iconfont icon-qianjinxiayige"></i>
    </div>
    <!-- 背景图层 -->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <!-- 详细信息 -->
    <transition name="fade">
      <div v-if="detialShow" class="detail">
        <div class="detail-wrap clearfix">
          <div class="detail-main">
            <h1 class="main-name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">
                  {{seller.supports[index].description}}
                </span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-colse" @click="hideDetail">
          <i class="iconfont icon-chahao"></i>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
  import star from './star'
  export default {
    name: "TopHeader",
    data() {
      return {
        detialShow: false
      }
    },
    components: {
      star
    },
    methods: {
      showDetail() {
        this.detialShow = true;
      },
      hideDetail() {
        this.detialShow = false;
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }

</script>
<style scoped>
  .top-header {
    position: relative;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.5);
    color: white;
  }

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
  }

  .avatar {
    display: inline-block;
    border-radius: 2px;
    vertical-align: top;
  }

  .content {
    display: inline-block;
    margin-left: 14px;
    vertical-align: top;

  }

  .title {
    margin: 2px 0 8px 0;
    font-size: 16px;
    line-height: 18px;
  }

  .title .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image: url("../../assets/img/brand@2x.png");
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }

  .content .description {
    margin: 8px 0 10px 0px;
    font-size: 12px;
    line-height: 12px;
  }

  .content .supports {
    font-size: 10px;
    line-height: 12px;
  }

  .supports .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }

  .supports .discount {
    background-image: url('../../assets/img/discount_1@2x.png')
  }

  .supports .decrease {
    background-image: url('../../assets/img/decrease_1@2x.png')
  }

  .supports .guarantee {
    background-image: url('../../assets/img/guarantee_1@2x.png')
  }

  .supports .special {
    background-image: url('../../assets/img/special_1@2x.png')
  }

  .supports .invoice {
    background-image: url('../../assets/img/invoice_1@2x.png')
  }

  .support-count {
    position: absolute;
    bottom: 18px;
    right: 12px;
    padding: 7px 8px;
    border-radius: 12px;
    font-size: 10px;
    line-height: 12px;
    background-color: rgba(0, 0, 0, .2)
  }

  .support-count .iconfont {
    font-size: 8px;
  }

  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
  }

  .bulletin-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    vertical-align: top;
    margin-top: 8px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
    background-image: url('../../assets/img/bulletin@2x.png')
  }

  .bulletin-text {
    font-size: 10px;
  }

  .bulletin-wrapper .icon-qianjinxiayige {
    position: absolute;
    right: 12px;
    top: 2px;
    font-size: 8px;
  }

  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, .5);
    filter: blur(10px);
  }

  .top-header .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
  }

  .detail .detail-wrap {
    min-height: 100%;
    width: 100%;
  }

  .detail-wrap .detail-main {
    padding: 64px 0;
  }

  .detail-main h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
  }

  .detail-main .star-wrapper {
    margin-top: 16px;
    padding: 2px 0;
    text-align: center;
  }

  .detail-main .title {
    display: flex;
    width: 80%;
    margin: 30px auto 24px auto;
  }

  .title .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, .2)
  }

  .title .text {
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
  }

  .detail-main .supports {
    width: 80%;
    margin: 0 auto;
  }

  .supports .support-item {
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
  }

  .support-item:last-child {
    margin-bottom: 0;
  }

  .support-item .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }

  .support-item .discount {
    background-image: url('../../assets/img/discount_2@2x.png')
  }

  .support-item .decrease {
    background-image: url('../../assets/img/decrease_2@2x.png')
  }

  .support-item .guarantee {
    background-image: url('../../assets/img/guarantee_2@2x.png')
  }

  .support-item .special {
    background-image: url('../../assets/img/special_2@2x.png')
  }

  .support-item .invoice {
    background-image: url('../../assets/img/invoice_2@2x.png')
  }

  .support-item .text {
    line-height: 16px;
    font-size: 12px;
  }

  .detail-main .bulletin {
    width: 80%;
    margin: 0 auto;
  }

  .bulletin .content {
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
  }

  .detail .detail-colse {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    font-size: 32px;
    clear: both;
  }

  .fade-enter-active,.fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,.fade-leave-to {
    opacity: 0;
  }

</style>
