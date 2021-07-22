<template>
  <div class="education_content">
    <dv-full-screen-container>
      <education-head />
    </dv-full-screen-container>
  </div>
</template>

<script>
import educationHead from './education/educationHead'
export default {
  components: {
    educationHead
  }
}
</script>

<style lang="less">
@import '~@/assets/css/variables.less';
.education_content{
  width: 100%;
  height: 100%;
  // background-color: @eMain;
  background: url('../assets/1.jpg') @eMain no-repeat center center;
  font-size: 14px;
}

</style>
