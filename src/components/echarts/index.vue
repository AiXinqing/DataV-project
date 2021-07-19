<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import Charts from '@jiaminghi/charts'
import resize from './mixins/resize'
export default {
  name: 'echart',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'container'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler (options) {
        // 设置true清空echart缓存
        // this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const container = document.getElementById(this.id)
      const myChart = new Charts(container)
      myChart.setOption(this.options)
    }
  }
}
</script>

<style>
</style>
