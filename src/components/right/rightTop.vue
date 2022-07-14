<template>
  <div class="leftTop">
    <div class="top_mains">
      <div class="top_main_main">
        <div class="top_main_top">
          <img src="@/assets/imgs/gongzuozhibiao.png" alt="" srcset="" />
        </div>
        <div class="top_center">
          <div class="top_center_top">
            <dv-capsule-chart
              :config="config"
              style="width: 300px; height: 200px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "leftCenter",

  data() {
    return {
      config: {
        data: [
          {
            name: "新曾职业病病人数",
            value: 167,
          },
          {
            name: "三违查处率",
            value: 67,
          },
          {
            name: "职业病危害监测合格率",
            value: 123,
          },
          {
            name: "职业病危害作业人员体检率",
            value: 123,
          },
          {
            name: "隐患按计划整改完成率",
            value: 123,
          },
          {
            name: "轻伤以上事故",
            value: 123,
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.jindu();
    });
  },
  methods: {
    jindu() {
      this.Jindu();
    },
    Jindu() {
      let chartDom = document.getElementById("top_jindu");
      let myChart = echarts.init(chartDom);
      window.onresize = chartDom.resize;
      myChart.setOption({
        // backgroundColor: "#f0f2f5",

        series: [
          {
            name: "内圈小",
            type: "gauge",

            pointer: {
              show: false,
            },
            radius: "70%",
            startAngle: 200,
            endAngle: -20,
            splitNumber: 4,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, "#bfcbd9"]],
                width: 20,
              },
            },
            splitLine: {
              //分隔线样式
              show: false,
            },
            axisLabel: {
              //刻度标签
              show: false,
            },
            axisTick: {
              //刻度样式
              show: false,
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 40,
              offsetCenter: [0, "20%"],
            },
            data: [
              {
                value: 120,
                name: "",
              },
            ],
          },
          {
            name: "内圈小",
            type: "gauge",
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 30,
              fontStyle: "italic",
              offsetCenter: [0, "33%"],
            },
            pointer: {
              show: true,
            },
            radius: "70%",
            startAngle: 200,
            endAngle: 50,
            splitNumber: 4,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, "#0093ee"]],
                width: 20,
                shadowColor: "#0093ee", //默认透明
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40,
                opacity: 1,
              },
            },
            splitLine: {
              //分隔线样式
              show: false,
            },
            axisLabel: {
              //刻度标签
              show: false,
            },
            axisTick: {
              //刻度样式
              show: false,
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 40,
              offsetCenter: [0, "20%"],
            },
            data: [
              {
                value: "120",
                name: "",
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
.leftTop {
  .top_mains {
    width: 400px;
    margin: 0 auto;
    height: 300px;
    .top_main_main {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/img/ocpity.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .top_main_top {
        img {
          width: 250px;
          height: 40px;
          display: block;
          margin-left: 20px;
          margin-top: 15px;
        }
      }
      .top_center {
        width: 88%;
        margin: 0 auto;
        margin-top: 5px;
        .center_top {
        }
      }
    }
  }
}
.top_fonts {
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.dv-capsule-chart {
  padding: 10px 0;
}

.main_top > img:hover {
  content: url("@/assets/img/weisheng.png");
}
</style>
