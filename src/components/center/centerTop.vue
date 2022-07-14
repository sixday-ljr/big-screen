<template>
  <div class="all">
    <div class="all_banner"></div>
    <div class="all_main">
      <div class="all_left">
        <div><span>法律法规</span></div>
        <div><span>特种设备</span></div>
      </div>
      <div id="all_center"></div>
      <div class="all_right">
        <div><span>可视化</span></div>
        <div><span>四新风险评估</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "centerTop",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      let chartDom = document.getElementById("all_center");
      let myChart = echarts.init(chartDom);
      window.onresize = chartDom.resize;
      myChart.setOption({
        series: [
          {
            type: "gauge",
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: "#fff",
                width: 4,
              },
            },
            axisLabel: {
              color: "auto",
              distance: 40,
              fontSize: 20,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value} 天",
              color: "auto",
            },
            data: [
              {
                value: 70,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  // width: 100%;
  // height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  .all_banner {
    width: 698px;
    height: 657px;
    position: relative;
    background-image: url("@/assets/img/banner.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: myfirst2 30s infinite linear;
  }
  .all_main {
    display: flex;
    position: absolute;
  }
  .all_left {
    div {
      background-repeat: no-repeat;
      background-size: 239px 115px;
      margin: 50px 0;
      span {
        display: block;
        color: #fff;
        font-size: 18px;
        text-align: right;
        line-height: 115px;
        margin-right: 45px;
        font-weight: bold;
      }
    }
    div:nth-child(1) {
      width: 239px;
      height: 115px;
      background-image: url("@/assets/img/falufagui.png");
    }
    div:nth-child(2) {
      width: 239px;
      height: 115px;
      background-image: url("@/assets/img/tezhongshebei.png");
    }
  }
  #all_center {
    width: 400px;
    height: 400px;
  }
  .all_right {
    div {
      background-repeat: no-repeat;
      background-size: 239px 115px;
      margin: 50px 0;
      span {
        display: block;
        color: #fff;
        font-size: 18px;
        // text-align: right;
        line-height: 115px;
        margin-left: 45px;
        font-weight: bold;
      }
    }
    div:nth-child(1) {
      width: 239px;
      height: 115px;
      background-image: url("@/assets/img/keshihua.png");
    }
    div:nth-child(2) {
      width: 239px;
      height: 115px;
      background-image: url("@/assets/img/sixinfengxian.png");
      span {
        margin-left: 20px;
      }
    }
  }
}

@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
