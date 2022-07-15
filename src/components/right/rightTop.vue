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
              style="width: 300px; height: 220px"
            />
          </div>
          2
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
  mounted() {},
  methods: {},
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
/deep/ .dv-capsule-chart .label-column {
  font-size: 16px;
}
</style>
