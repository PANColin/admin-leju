<template>
  <div id="main" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "lineChartIns",
  mounted() {
    this.getInit();
  },
  methods: {
    getInit() {
      var myChart = echarts.init(document.getElementById("main"));
      var data = [];

      for (var i = 0; i <= 100; i++) {
        var theta = (i / 100) * 360;
        var r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
        data.push([r, theta]);
      }

      let option = {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {},
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            data: data
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      setTimeout(() => {
        // 让地图自适应屏幕的宽度
        window.onresize = function() {
          myChart.resize();
        };
      }, 200);
    }
  }
};
</script>

<style></style>
