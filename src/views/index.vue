<template>
  <div class="education_content">
    <dv-full-screen-container>
      <!-- <education-head />
      <education-content/> -->
      <div class="line_box">123</div>
      <div class="bb"></div>
      <data-center/>
    </dv-full-screen-container>
  </div>
</template>

<script>
// import educationHead from './education/educationHead'
// import educationContent from './education/'
import dataCenter from './dataCenter/'
export default {
  components: {
    // educationHead,
    // educationContent
    dataCenter
  }
}
</script>

<style lang="less">
@import '~@/assets/css/variables.less';
.education_content{
  width: 100%;
  height: 100%;
  background-color: @eMain;
  // background: url('../assets/1.jpg') @eMain no-repeat center center;
  font-size: 14px;
}

</style>
<style>
  .line_box{
    width:100%;
    height: 30px;
    border-bottom: 1px solid #fff;
    position: relative;
  }
  .line_box:before{
    display: inline-block;
    width: 4px;
    height: 4px;
    background: red;
    position: absolute;
    right: 50%;
    top: 28px;
    content: '';
    z-index: 99;
    animation: leftBox 8s linear infinite;
    /* margin: -5%;
    box-shadow: inset 0 0 0 2px; */
  }

  @keyframes leftBox {
    0%, 100% {
      clip: rect(50%);
    }
    25% {
      clip: rect(30%);
    }
    50% {
      clip: rect(10%);
    }
    75% {
      clip: rect(0);
    }
  }
  .bb, .bb::before, .bb::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bb {
    width: 200px;
    height: 200px;
    margin: auto;
    /* background: url("img/Button-White-Large.png") no-repeat 50%/70% rgba(0, 0, 0, 0.1); */
    color: #69ca62;
    box-shadow: inset 0 0 0 1px rgba(105, 202, 98, 0.5);
  }
  .bb::before, .bb::after {
    content: '';
    z-index: -1;
    margin: -5%;
    box-shadow: inset 0 0 0 2px;
    animation: clipMe 8s linear infinite;
  }
  .bb::before {
    animation-delay: -4s;
  }
  /* .bb:hover::after, .bb:hover::before {
    background-color: rgba(255, 0, 0, 0.3);
  } */

  @keyframes clipMe {
    0%, 100% {
      clip: rect(0px, 220.0px, 2px, 0px);
    }
    25% {
      clip: rect(0px, 2px, 220.0px, 0px);
    }
    50% {
      clip: rect(218.0px, 220.0px, 220.0px, 0px);
    }
    75% {
      clip: rect(0px, 220.0px, 220.0px, 218.0px);
    }
  }
</style>
