<template>
  <div class="container">
    <div class="top">
      <div class="top_left" @click="back()"></div>
      <div class="top_right"></div>
    </div>
    <div class="main">
      <div class="text">整改详情</div>
      <div class="select">
        <el-row>
          <el-button type="info">点击添加查询条件</el-button>
          <el-button type="danger">查询</el-button>
          <el-button type="primary">重置</el-button>
          <el-button type="success">请选择</el-button>
        </el-row>
      </div>

      <div class="main_bot">
        <dv-scroll-board
          :config="config"
          style="width: 1000px; height: 360px"
        />
      </div>
    </div>
    <div class="pagin">
      <!-- <el-pagination
        :page-size="5"
        :pager-count="11"
        layout="prev, pager, next"
        :total="30"
      >
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      config: {
        header: ["序号", "问题描述", "责任单位", "整改措施", "单位"],
        data: [
          ["01", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
          ["02", "机械故障，零件磨损", "a0001", "修改", "已完成"],
          ["03", "机械故障，零件磨损", "a0001", "修改", "已超期"],
          ["04", "机械故障，零件磨损", "a0001", "修改", "整改中"],
          ["05", "机械故障，零件磨损", "a0001", "修改", "已超期"],
          ["06", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
          ["07", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
          ["08", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
          ["09", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
          ["10", "机械故障，零件磨损", "a0001", "修改", "整改中，已临期"],
        ],
        index: false,
        columnWidth: [160],
        align: ["center"],
        carousel: "page",
        headerBGC: "#00BAFF",
        oddRowBGC: "",
        evenRowBGC: "skyblue",
        indexHeader: "",
        hoverPause: true,
      },
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 112px;
    background: url("@/assets/img/top.png");
    background-size: 100% 186px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    padding: 15px 3px;
    .top_left,
    .top_right {
      width: 107px;
      height: 109px;
    }
    .top_left {
      background: url("@/assets/img/home.png");
      background-size: 107px 109px;
      background-repeat: no-repeat;
    }
    .top_right {
      background: url("@/assets/img/persion.png");
      background-size: 107px 109px;
      background-repeat: no-repeat;
    }
  }
  .main {
    .text {
      color: #fff;
      font-size: 20px;
      margin-left: 70px;
      margin-top: 30px;
    }
    .select {
      display: flex;
      justify-content: center;
      margin: 60px 0;
    }
  }
  .main_bot {
    display: flex;
    justify-content: center;
  }
}
.pagin {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
