<template>
  <!-- echarts的挂在对象 -->
  <div ref="barEchartsBox" id="main" style="width:100%;height:100%" />
</template>
<script>
import $ from "jquery";
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    randomColor() {
      return (
        "rgb(" +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(",") +
        ")"
      );
    },
    init() {
      var ROOT_PATH =
        "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      var updateFrequency = 2000;
      var dimension = 0;

      var countryColors = {
        Australia: this.randomColor(),
        Canada: this.randomColor(),
        China: this.randomColor(),
        Cuba: this.randomColor(),
        Finland: this.randomColor(),
        France: this.randomColor(),
        Germany: this.randomColor(),
        Iceland: this.randomColor(),
        India: this.randomColor(),
        Japan: this.randomColor(),
        "North Korea": this.randomColor(),
        "South Korea": this.randomColor(),
        "New Zealand": this.randomColor(),
        Norway: this.randomColor(),
        Poland: this.randomColor(),
        Russia: this.randomColor(),
        Turkey: this.randomColor(),
        "United Kingdom": this.randomColor(),
        "United States": this.randomColor()
      };

      $.when(
        $.getJSON("https://cdn.jsdelivr.net/npm/emoji-flags@1.3.0/data.json"),
        $.getJSON(ROOT_PATH + "/data/asset/data/life-expectancy-table.json")
      ).done(function(res0, res1) {
        var flags = res0[0];
        var data = res1[0];
        var years = [];
        for (var i = 0; i < data.length; ++i) {
          if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
            years.push(data[i][4]);
          }
        }

        function getFlag(countryName) {
          if (!countryName) {
            return "";
          }
          return (
            flags.find(function(item) {
              return item.name === countryName;
            }) || {}
          ).emoji;
        }
        var startIndex = 10;
        var startYear = years[startIndex];

        var option = {
          grid: {
            top: 10,
            bottom: 30,
            left: 150,
            right: 80
          },
          xAxis: {
            max: "dataMax",
            label: {
              formatter: function(n) {
                return Math.round(n);
              }
            }
          },
          dataset: {
            source: data.slice(1).filter(function(d) {
              return d[4] === startYear;
            })
          },
          yAxis: {
            type: "category",
            inverse: true,
            max: 10,
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: 14
              },
              formatter: function(value) {
                return value + "{flag|" + getFlag(value) + "}";
              },
              rich: {
                flag: {
                  fontSize: 25,
                  padding: 5
                }
              }
            },
            animationDuration: 300,
            animationDurationUpdate: 300
          },
          series: [
            {
              realtimeSort: true,
              seriesLayoutBy: "column",
              type: "bar",
              itemStyle: {
                color: function(param) {
                  return countryColors[param.value[3]] || "#5470c6";
                }
              },
              encode: {
                x: dimension,
                y: 3
              },
              label: {
                show: true,
                precision: 1,
                position: "right",
                valueAnimation: true,
                fontFamily: "monospace"
              }
            }
          ],
          // Disable init animation.
          animationDuration: 0,
          animationDurationUpdate: updateFrequency,
          animationEasing: "linear",
          animationEasingUpdate: "linear",
          graphic: {
            elements: [
              {
                type: "text",
                right: 160,
                bottom: 60,
                style: {
                  text: startYear,
                  font: "bolder 80px monospace",
                  fill: "rgba(100, 100, 100, 0.25)"
                },
                z: 100
              }
            ]
          }
        };

        // console.log(option);
        myChart.setOption(option);

        for (var i = startIndex; i < years.length - 1; ++i) {
          (function(i) {
            setTimeout(function() {
              updateYear(years[i + 1]);
            }, (i - startIndex) * updateFrequency);
          })(i);
        }

        function updateYear(year) {
          var source = data.slice(1).filter(function(d) {
            return d[4] === year;
          });
          option.series[0].data = source;
          option.graphic.elements[0].style.text = year;
          myChart.setOption(option);
        }
      });

      option && myChart.setOption(option);
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

<style scoped lang="scss"></style>
