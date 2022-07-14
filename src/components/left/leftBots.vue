<template>
  <div class="container">
    <div class="main">
      <div class="text">隐患整改完成率</div>
      <div class="main_bot">
        <div id="zhexian"></div>
        <div id="bing"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
    this.Zhexian();
  },
  methods: {
    Zhexian() {
      let zhexians = document.getElementById("zhexian");
      let myZheXian = echarts.init(zhexians);
      myZheXian.setOption({
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
          ],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: "24",
            },
          },
        },
        lineStyle: {
          color: "#00FF00",
        },

        yAxis: [
          {
            type: "value",
            axisTick: {
              show: true,
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "24",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            data: [150, 300, 200, 400, 160, 800, 260, 400, 100, 700, 200],
            type: "line",
          },
        ],
      });
    },
    init() {
      let Bing = document.getElementById("bing");
      let myChart = echarts.init(Bing);
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "5%",
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: 26,
          },
        },
        series: [
          {
            name: `${name}`,
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "低风险" },
              { value: 735, name: "一般风险" },
              { value: 580, name: "较大风险" },
              { value: 484, name: "重风险" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .main {
    .text {
      color: #fff;
      font-size: 24px;
      margin-left: 70px;
      margin-top: 30px;
    }
  }
  .main_bot {
    height: 400px;
    display: flex;
    margin: 200px 200px;
    justify-content: space-between;
    align-items: center;
    #zhexian {
      margin-top: 70px;
      width: 900px;
      height: 500px;
    }
    #bing {
      width: 800px;
      height: 600px;
    }
  }
}
</style>
