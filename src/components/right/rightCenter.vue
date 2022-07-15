<template>
  <div class="leftTop">
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img
            class="img"
            @click="find(0)"
            src="@/assets/imgs/huanjing.png"
            alt=""
            srcset=""
          />
          <img
            class="imgs"
            @click="find(1)"
            src="@/assets/img/weisheng2.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="center" v-show="show == true">
          <div class="center_top">
            <div class="fonts">危险废物处置进度</div>
            <div class="fonts">废水达标排放情况</div>
          </div>
          <div class="center_bot">
            <div class="center_botleft">
              <CenterBotleft />
            </div>
            <div class="center_botright">
              <CenterBotright />
            </div>
          </div>
        </div>
        <div class="top_center" v-show="show == false">
          <div class="top_center_top">
            <div class="top_fonts">职业病危害检测率</div>
            <dv-capsule-chart
              :config="config"
              style="width: 160px; height: 200px"
            />
          </div>
          <div class="top_center_bot">
            <div class="top_fonts">职业健康体检进展</div>
            <div id="jindu"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import CenterBotleft from "./Centerbotleft.vue";
import CenterBotright from "./Centerbotright.vue";
export default {
  name: "rightCenter",
  components: {
    CenterBotleft,
    CenterBotright,
  },
  data() {
    return {
      index: 0,
      show: true,
      config: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.Jindu();
    });
  },
  methods: {
    find(index) {
      console.log(index);
      if (this.index == index) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    Jindu() {
      let chartDom = document.getElementById("jindu");
      let myChart = echarts.init(chartDom);
      window.onresize = chartDom.resize;
      myChart.setOption({
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
  .mains {
    width: 400px;
    margin: 0 auto;
    height: 300px;
    .main_main {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/img/ocpity.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .main_top {
        display: flex;
        .img {
          // width: 250px;
          height: 40px;
          display: block;
          margin-left: 20px;
          margin-top: 0px;
        }
        .imgs {
          // width: 120px;
          height: 28px;
          display: block;
          // margin-left: 20px;
          margin-top: 8px;
        }
      }
      .center {
        .center_top {
          display: flex;
          margin-top: 10px;
          padding: 0 40px;
          justify-content: space-between;
          .fonts {
            font-size: 16px;
            color: #fefefe;
          }
        }
        .center_bot {
          display: flex;
          justify-content: space-between;
          margin: 0 40px;
          .center_botleft {
            width: 150px;
            height: 150px;
          }
          .center_botright {
            width: 150px;
            height: 200px;
          }
        }
      }
    }
  }
}
.fonts {
  color: #fff;
  font-size: 16px;
}
.dv-capsule-chart {
  padding: 10px 0;
}
// .main_top > img:hover {
//   content: url("@/assets/img/huanjing.png");
// }
.top_center {
  width: 88%;
  margin: 0 auto;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  .center_top {
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
#jindu {
  width: 180px;
  height: 180px;
}
</style>
