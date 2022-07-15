<template>
  <div class="container-fluid">
    <div class="btn">
      <div class="btn_left">
        <img src="@/assets/imgs/3.png" alt="" srcset="" />
        <img src="@/assets/imgs/2.png" alt="" srcset="" />
      </div>
      <div class="btn_right">
        <img src="@/assets/imgs/4.png" alt="" srcset="" />
        <img src="@/assets/imgs/1.png" alt="" srcset="" />
      </div>
    </div>
    <div
      class="row fill-h"
      :style="{
        display: 'flex',
        perspective: '2000px',
        padding: '20px',
        boxSizing: 'border-box',
      }"
    >
      <div
        class="col-lg-3 fill-h"
        :style="{
          width: '25%',
          transform: 'rotateY(40deg)',
          borderRadius: '20px',
        }"
      >
        <div>
          <DvBorderBox1>
            <LeftTop />
          </DvBorderBox1>
        </div>
        <div>
          <DvBorderBox1>
            <LeftCenter />
          </DvBorderBox1>
        </div>
        <div @click="changePage('leftinfo', '风险因素占比')">
          <DvBorderBox1>
            <LeftBot />
          </DvBorderBox1>
        </div>
      </div>

      <div class="col-lg-6 fill-h" :style="{ width: '50%' }">
        <div class="xpanel-wrapper xpanel-wrapper-5">
          <div
            class="xpanel"
            :style="{
              position: 'relative',
            }"
          >
            <div class="map_bg">
              <video src="video4.mp4" :autoPlay="true" muted loop></video>
            </div>
            <div class="circle_allow"></div>
            <div class="circle_bg"></div>
            <div
              :style="{
                height: 60,
                width: 200,
                position: 'absolute',
                top: 20,
                right: 20,
              }"
            >
              <DvDecoration1 :style="{ width: '100%', height: '100%' }" />
            </div>
          </div>
        </div>
        <div
          :style="{
            display: 'flex',
          }"
        >
          <div
            @click="changePage('table', '风险因素占比')"
            :style="{
              width: '100%',
              paddingRight: 8,
              marginTop: '50px',
              position: 'relative',
            }"
          >
            <DvBorderBox8>
              <CenterBot />
            </DvBorderBox8>
          </div>
        </div>
      </div>
      <div
        class="col-lg-3 fill-h"
        :style="{
          width: '25%',
          transform: 'rotateY(-40deg)',

          borderRadius: '20px',
        }"
      >
        <div>
          <DvBorderBox1>
            <RightTop />
          </DvBorderBox1>
        </div>
        <div>
          <DvBorderBox1>
            <RightCenter />
          </DvBorderBox1>
        </div>
        <div>
          <DvBorderBox1>
            <RightBot />
          </DvBorderBox1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import LeftTop from "./left/leftTop.vue";
import LeftCenter from "./left/leftCenter.vue";
import LeftBot from "./left/leftBot.vue";
import RightTop from "./right/rightTop.vue";
import RightCenter from "./right/rightCenter.vue";
import RightBot from "./right/rightBot.vue";
import CenterBot from "./center/centerBot.vue";
export default {
  name: "App",
  components: {
    LeftTop,
    LeftCenter,
    LeftBot,
    RightTop,
    RightCenter,
    RightBot,
    CenterBot,
  },
  props: ["onChange"],
  data() {
    return {};
  },
  methods: {
    changePage(pageName, params) {
      console.log("test");
      if (this.onChange) {
        this.onChange(pageName, params);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {});
  },
};
</script>
<style lang="scss">
.btn {
  position: absolute;
  display: flex;
  margin: auto;
  width: 100%;
  top: -15px;
  z-index: 9999;
  justify-content: space-between;
}
.btn_left,
.btn_right {
  display: flex;
  img {
    // width: 170px;
    display: block;
  }
}
.btn_left {
  margin-left: 240px;
}
.btn_right {
  margin-right: 240px;
}
</style>
