<template>
  <div class="home">
    <section id="main" style="width:500px;height: 500px;"></section>
  </div>
</template>

<script lang="ts">
  import {ref,onMounted} from 'vue';
  import {} from '@ant-design/icons-vue';
  import * as echarts from 'echarts';

  export default {
    components: {
    },
    setup(){
      const search = ref('');
      onMounted(()=>{
        const myChart = echarts.init(document.getElementById('main') as HTMLElement);
        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      })
      return {
        search,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
