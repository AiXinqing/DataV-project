<template>
  <div class="dataV_content">
    <dv-full-screen-container >
      <div class="top-header">
        <dv-decoration-8 class="header-left-decoration" />
        <dv-decoration-5 class="header-center-decoration" />
        <dv-decoration-8 :reverse="true" class="header-right-decoration"  />
        <div class="center-title">综合数据展示</div>
      </div>
      <digitalFlop />
    </dv-full-screen-container>
  </div>
</template>

<script>
import digitalFlop from './digitalFlop'
export default {
  components: {
    digitalFlop
  }
}
</script>

<style lang="less">
  .dataV_content{
    background-color: #030409;
    margin: 0 0;
    padding: 0 0;
    width: 100%;
    height:100%;
  }
  .top-header{
    position: relative;
    width: 100%;
    height: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-negative: 0;
    flex-shrink: 0;

    .header-left-decoration,
    .header-right-decoration{
      width: 25%;
      height: 45px;
    }

    .header-center-decoration {
      width: 40%;
      height: 45px;
      margin-top: 30px;
    }

    .center-title {
      position: absolute;
      font-size: 24px;
      font-weight: 700;
      left: 50%;
      top: 15px;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      color: #fff;
    }
  }
</style>
