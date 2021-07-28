<template>
  <div class="education-content-wapper">
    <dv-border-box-8 style="height:90%">

    </dv-border-box-8>
    <dv-border-box-8 style="height:90%">dv-border-box-8</dv-border-box-8>
    <dv-border-box-8 style="height:90%">dv-border-box-8</dv-border-box-8>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  @import '~@/assets/css/variables.less';
  .education-content-wapper{
    display: flex;
    height: 100%;
    .dv-border-box-8{
      width: 90%;
      margin-left: 10px;
      margin-top: 20px;
      color: @white;
      padding: 10px;
      font-size: 18px;
    }
  }
</style>
