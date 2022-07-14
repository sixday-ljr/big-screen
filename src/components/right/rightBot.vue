<template>
  <div class="leftTop">
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img src="@/assets/imgs/xiangying.png" alt="" srcset="" />
        </div>
        <div class="center">
          <div class="center_top">
            <div class="font">预案情况统计</div>
            <div class="font">消防装备情况统计</div>
          </div>
          <div class="center_bot">
            <dv-capsule-chart
              :config="config"
              style="width: 200px; height: 200px"
            />
            <div id="echarts" style="width: 200px; height: 200px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "rightBot",
  data() {
    return {
      config: {
        data: [
          {
            name: "综合预案",
            value: 167,
          },
          {
            name: "专项预案",
            value: 67,
          },
          {
            name: "现场方案",
            value: 123,
          },
        ],
        showValue: true,
        colors: ["#e062ae", "#fb7293", "#e690d1"],
        unit: "",
      },
    };
  },
  mounted() {
    this.init(); //初始化
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.Init();
      });
    },
    Init() {
      let chartDom = document.getElementById("echarts");
      let myChart = echarts.init(chartDom);
      window.onresize = chartDom.resize;
      myChart.setOption({
        color: ["#37a2da", "#32c5e9", "#9fe6b8", "#ffdb5c"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },

            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
          },
        },

        calculable: true,
        series: {
          name: `${name}`,
          type: "pie",
          radius: [40, 60],
          roseType: "area",
          data: [
            { value: 10, name: "rose1" },
            { value: 5, name: "rose2" },
            { value: 15, name: "rose3" },
            { value: 25, name: "rose4" },
          ],
          label: {
            normal: {
              show: false,
            },
          },
        },
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
        img {
          width: 250px;
          height: 40px;
          display: block;
          margin-left: 20px;
          margin-top: 15px;
        }
      }
      .center {
        .center_top {
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          margin-top: 10px;
          .font {
            font-size: 16px;
            color: #fefefe;
          }
        }
        .center_bot {
          display: flex;
          padding: 0 20px;
        }
      }
    }
  }
}
.main_top > img:hover {
  content: url("@/assets/img/xiangying.png");
}
</style>
