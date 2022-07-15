<template>
  <div class="leftTop">
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img src="@/assets/imgs/yinhuan.png" alt="" srcset="" />
        </div>
        <div class="center">
          <dv-scroll-board
            :config="config"
            style="width: 880px; height: 200px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "centerBot",
  data() {
    return {
      config: {
        header: ["序号", "问题描述", "责任单位", "整改措施", "单位"],
        data: [
          ["01", "机械故障，零件磨损", "生产部一", "修改", "整改中，已临期"],
          ["02", "机械故障，零件磨损", "生产部一", "修改", "已完成"],
          ["03", "机械故障，零件磨损", "生产部一", "修改", "已超期"],
          ["04", "机械故障，零件磨损", "生产部一", "修改", "整改中"],
          ["05", "机械故障，零件磨损", "生产部一", "修改", "已超期"],
          ["06", "机械故障，零件磨损", "生产部一", "修改", "整改中，已临期"],
          ["07", "机械故障，零件磨损", "生产部一", "修改", "整改中，已临期"],
          ["08", "机械故障，零件磨损", "生产部一", "修改", "整改中，已临期"],
          ["09", "机械故障，零件磨损", "生产部一", "修改", "整改中，已临期"],
        ],
        index: false,
        columnWidth: [50],
        align: ["center"],
        carousel: "page",
        headerBGC: "",
        oddRowBGC: "",
        evenRowBGC: "",
        indexHeader: "",
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.leftTop {
  .mains {
    width: 960px;
    margin: 0 auto;
    height: 300px;
    .main_main {
      width: 100%;
      height: 100%;
      background-image: url("@/assets/img/yinhuanzhenggai.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .main_top {
        img {
          width: 296px;
          height: 40px;
          display: block;
          margin-left: 34px;
          margin-top: 15px;
          padding-top: 3px;
        }
      }
      .center {
        margin-left: 40px;
        margin-top: 15px;
      }
    }
  }
}
.main_top > img:hover {
  content: url("@/assets/img/yinhuan.png");
}
</style>
