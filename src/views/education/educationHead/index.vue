<template>
  <div class="scree_head">
    <div class="scree_left">
      <div v-html="timeDisplayArea" class="now_data" />

      <dv-decoration-2 class="time_box"></dv-decoration-2>
    </div>
    <div class="scree_center">测试大数据中心</div>
    <div class="scree_right">
      <div class="decoration_item active">首页</div>
      <div class="decoration_item">晨午晚检</div>
      <div class="decoration_item">学情综合分析</div>
      <div class="decoration_item">食堂重置消费</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      nowDate: '', // 当前日期
      currTime: new Date() // 当前日期对象
    }
  },

  computed: {
    timeDisplayArea () { // 时间展示区
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日
      const hours = this.currTime.getHours() > 9 ? this.currTime.getHours() : ('0' + this.currTime.getHours())
      const minutes = this.currTime.getMinutes() > 9 ? this.currTime.getMinutes() : ('0' + this.currTime.getMinutes())
      const seconds = this.currTime.getSeconds() > 9 ? this.currTime.getSeconds() : ('0' + this.currTime.getSeconds())
      const week = date.getDay() // 星期
      const weekArr = ['日', '一', '二', '三', '四', '五', '六']
      return `<span>${year}</span> 年 <span>${month}</span> 月 <span>${day}</span> 日 <span>${hours}:</span><span>${minutes}:</span><span style="margin-right:5px">${seconds}</span> 星期<span>${weekArr[week]}</span>`
    }
  },

  created () {
    this.currTime = new Date()
    clearInterval(this.updateTimer)
    this.updateTimer = setInterval(() => {
      this.currTime = new Date()
    }, 1000)
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="less" >
  @import '~@/assets/css/variables.less';
  .scree_head{
    width: 100%;
    height: 60px;
    background: url('~@/assets/123.png') no-repeat center;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-negative: 0;

    .scree_left{
      color: @white;
      line-height: 60px;
      text-align: center;
      font-size: 24px;

      .now_data{
        span{
          color: @e_c_main;
          font-weight: bold;
        }
      }
    }

    .scree_left,
    .scree_right{
      width: 30%;
    }
    .scree_center{
      width: 40%;
      font-size: 30px;
      font-weight: bold;
      color: @white;
      text-align: center;
      line-height: 60px;
    }

    .scree_right{
      display: flex;
      text-align: right;
      color: @white;
      line-height: 60px;
      font-size: 18px;
      justify-content:flex-end;
      padding-right: 20px;

      .decoration_item{
        padding: 0 20px;
        cursor: pointer;

        &.active{
          color: @e_c_main;
        }
      }
    }
  }
  .time_box{
    width:100%;
    height:100%;
  }
</style>
