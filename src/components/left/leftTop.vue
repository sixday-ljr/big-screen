<template>
  <div class="leftTop">
    <!-- <canvas id="canvas" style="width: 600px; height: 500px"></canvas> -->
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img src="@/assets/imgs/anquan.png" alt="" srcset="" />
        </div>
        <div id="containers"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HighCharts from "highcharts";
export default {
  name: "leftTop",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.init(); //初始化
    });
  },
  methods: {
    init() {
      HighCharts.chart("containers", {
        title: {
          text: "",
        },
        credits: {
          enabled: false,
        },
        chart: {
          type: "pie",
          backgroundColor: "rgba(0, 0, 0, 0)", //去掉白色背景
          marginTop: 10, //上边距
          options3d: {
            enabled: true, //3D启用
            alpha: 50, //内旋转角度
            beta: 0, //外选择角度
          },
        },
        plotOptions: {
          //数据列配置//3D饼图的厚度
          pie: {
            innerSize: 0,
            depth: 30, //3D饼图的厚度
            dataLabels: {
              enabled: false,
            },
          },
        },
        series: [
          {
            name: "数量",
            data: [
              ["一般风险", 189],
              ["低风险", 72],
              ["重大风险", 72],
              ["较大风险", 50],
            ],
            colors: [
              "#3F7CFF",
              "#9660E5",
              "#FBC61F",
              "#3FC9CB",
              "#FA5728",
              "#29F217",
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
  width: 100%;
  height: 300px;
  .mains {
    width: 400px;
    height: 300px;
    margin: 0 auto;

    .main_main {
      background-image: url("@/assets/img/ocpity.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .main_top {
        width: 250px;
        height: 40px;
        img {
          width: 250px;
          height: 40px;
          display: block;
          margin-left: 20px;
          margin-top: 15px;
        }
      }
      #containers {
        // width: 100%;
        height: 250px;
        margin: 0 auto;
      }
    }
  }
}
.main_top > img:hover {
  content: url("@/assets/img/anquan.png");
}
</style>
