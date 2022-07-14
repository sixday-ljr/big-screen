<template>
  <div ref="appRef" id="app">
    <div class="layout-container">
      <PageFrame :showBackBtn="currentPage != 'home'" :onChange="changePage">
        <el-collapse-transition name="el-fade-in-linear">
          <Home
            v-show="currentPage == 'home'"
            :pageData="pageData"
            :onChange="changePage"
          ></Home>
        </el-collapse-transition>
        <el-collapse-transition name="el-fade-in-linear">
          <Table
            v-show="currentPage == 'table'"
            :pageData="pageData"
            :onChange="changePage"
          ></Table>
        </el-collapse-transition>
        <el-collapse-transition name="el-fade-in-linear">
          <LeftInfo
            v-show="currentPage == 'leftinfo'"
            :pageData="pageData"
            :onChange="changePage"
          ></LeftInfo>
        </el-collapse-transition>
      </PageFrame>
    </div>
  </div>
</template>

<script>
import PageFrame from "./components/PageFrame";
import Home from "./components/Home";
import Table from "./pages/ZxhPage.vue";
import LeftInfo from "./components/left/leftBots.vue";
import { useIndex } from "@/rem";
export default {
  data() {
    return {
      currentPage: "home",
      pageData: null,
    };
  },
  mounted() {
    const { calcRate, windowDraw } = useIndex(this.$refs.appRef);
    calcRate();
    windowDraw();
  },
  components: {
    PageFrame,
    Home,
    Table,
    LeftInfo,
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#root {
  width: 100%;
  height: 100%;
  min-height: 635px;
  font-family: "microsoft yahei", arial, sans-serif;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
}
body {
  /* background-image: url('./assets/images/bg6.jpg'); */
  background-size: cover;
}
#app {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  background-image: url("@/assets/img/beijing.png");
  background-size: 1920px 1080px;
  background-repeat: no-repeat;
  .layout-container {
    width: 100%;
    height: 100%;
  }
}
</style>
