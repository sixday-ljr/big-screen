<template>
  <div class="leftTop">
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img src="@/assets/imgs/success.png" alt="" srcset="" />
          <div id="success"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "leftBot",

  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.success();
    });
  },
  methods: {
    success() {
      this.Success();
    },
    Success() {
      let chartDom = document.getElementById("success");
      let myChart = echarts.init(chartDom);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          scale: true,
          boundaryGap: [0.05, 0.05],
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            fontSize: "20",
            formatter: function (value) {
              return (value / 10).toFixed(0) + "%";
            },
          },
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [100, 400, 600, 200, 50, 80, 60],
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
        img {
          width: 250px;
          height: 40px;
          display: block;
          margin-left: 20px;
          margin-top: 15px;
        }
        #success {
          width: 360px;
          height: 220px;
          margin: 0 auto;
        }
      }
    }
  }
}
.main_top > img:hover {
  content: url("@/assets/img/success.png");
}
</style>
