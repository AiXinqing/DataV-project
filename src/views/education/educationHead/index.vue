<template>
  <div class="scree_head">
    <div class="scree_left">
      <dv-decoration-2 class="time_box" />
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
    margin-top: 30px
  }
</style>
