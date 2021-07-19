<template>
  <div class="home">
    <dv-border-box-3 style="height:230px">dv-border-box-3</dv-border-box-3>
    <div id="container" style="height:300px;width:100%"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Line } from '@antv/g2plot'

export default {
  name: 'Home',
  components: {

  },

  mounted () {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
      { year: '1999', value: 8 }
    ]
    const linePlot = new Line('container', {
      data,
      xField: 'year',
      yField: 'value',
      stepType: 'vh'
    })

    linePlot.render()
  }
}
</script>
