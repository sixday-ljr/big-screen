<template>
  <div id="container"></div>
</template>

<script>
import HighCharts from "highcharts";

export default {
  name: "Centerbotleft",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.getPie();
    });
  },
  methods: {
    getPie() {
      HighCharts.chart("container", {
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
              ["转移量", 18],
              ["处置量", 22],
              ["其他", 14],
              ["存储量", 24],
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
#container {
  width: 100%;
  height: 100%;
}
</style>
