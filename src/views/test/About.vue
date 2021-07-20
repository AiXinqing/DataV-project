<template>
  <echarts
    :id="'container'"
    :options="option"
    style="height:300px;width:100%"
    ref="popComparison"
  ></echarts>
</template>

<script>

export default {
  data () {
    return {
      option: {
        title: {
          text: '周销售额趋势'
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'line'
          }
        ]
      }
    }
  },

  mounted () {
    // window.addEventListener('resize', this.resizeTheChart)
  },
  beforeDestroy () {
    // window.removeEventListener('resize', this.resizeTheChart)
  },

  methods: {
    resizeTheChart () {
      if (this.$refs.popComparison) {
        this.$refs.popComparison.resize()
      }
    }
  }
}
</script>

<style lang="less">

</style>
