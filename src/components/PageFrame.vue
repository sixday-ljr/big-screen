<template>
  <div id="root">
    <div class="full_screen">
      <div class="bg_video">
        <video src="bgvideo.mp4" :autoPlay="true" muted loop></video>
      </div>
      <div class="data" :style="{ paddingBottom: '20px' }">
        <header class="header_main">
          <div class="home" v-if="showBackBtn" @click="back()"></div>
          <!-- <div class="bizman"></div> -->
          <div class="light"></div>
          <div :style="{ width: '0px', height: '0px' }">
            <!-- <div class="bizman-lazy-hover"></div> -->
            <!-- <div class="bizman-lazy-active"></div> -->
            <div class="home-lazy-hover"></div>
            <div class="home-lazy-active"></div>
          </div>
        </header>
        <div class="wrapper">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: ["showBackBtn", "onChange"],
  methods: {
    back() {
      if (this.onChange) {
        this.onChange("home", {});
      }
    },
  },
};
</script>
<style>
table {
  height: 100%;
  overflow-y: auto;
  display: block;
}
tr {
  padding: 8px;
}
td {
  color: #c9ccd4;
  padding: 8px;
}
.content_title {
  width: 200px;
  text-align: center;
  color: #01c4f7;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -100px;
}
.databg {
  background: url("@/assets/images/databg.png") 0 0 no-repeat;
  background-size: 22px 30px;
  height: 30px;
  width: 22px;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
@keyframes bganomation {
  0% {
    width: 50%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}

@keyframes rotate1 {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes retate2 {
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
.map_bg {
  position: absolute;
  top: 54%;
  left: 50%;
  width: 100vh;
  height: 100vh;
  min-width: 280px;
  min-height: 280px;
  transform: translate(-50%, -50%);
  background: url("@/assets/images/videoborder.png") center no-repeat;
  background-size: 78.8vh 78.8vh;
  /* opacity: 0.5; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.map_bg video {
  width: 71.8vh;
  height: 71.8vh;
  border-radius: 1000px;
  object-fit: cover;
}
.circle_allow {
  position: absolute;
  top: 54%;
  left: 50%;
  width: 50vh;
  height: 50vh;
  min-width: 280px;
  min-height: 280px;
  transform: translate(-50%, -50%);
  background: url("@/assets/images/jt.png") center no-repeat;
  background-size: 50vh 50vh;
  animation: retate2 10s linear infinite;
}

.circle_bg {
  position: absolute;
  top: 54%;
  left: 50%;
  width: 52vh;
  height: 52vh;
  transform: translate(-50%, -50%);
  background: url("@/assets/images/lbx.png") center no-repeat;
  background-size: 52vh 52vh;
  animation: rotate1 10s linear infinite;
  opacity: 0.4;
}
.header_main {
  margin: 0 auto;
  width: 100%;
  height: 160px;
  background: url("@/assets/images/title_bg.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  z-index: 9999;
  animation: breathing 1s linear infinite;
}
.home {
  position: absolute;
  width: 95px;
  height: 95px;
  background: url("@/assets/images/home.png");
  left: 0px;
  top: 0px;
  z-index: 999;
}
.home:hover,
.home-lazy-hover {
  background: url("@/assets/images/home_active.png");
}
.home:active,
.home-lazy-active {
  background: url("@/assets/images/home_hover.png");
}
.bizman {
  position: absolute;
  width: 95px;
  height: 95px;
  background: url("@/assets/images/bizman.png");
  right: 0px;
  top: 0px;
  z-index: 999;
}
.bizman:hover,
.bizman-lazy-hover {
  background: url("@/assets/images/bizman_active.png");
}
.bizman:active,
.bizman-lazy-active {
  background: url("@/assets/images/bizman_hover.png");
}
@keyframes flyToRight {
  0% {
    margin-left: 0;
    opacity: 0;
    filter: brightness(100%);
  }
  20% {
    margin-left: 20%;
    opacity: 1;
    filter: brightness(100%);
  }
  50% {
    margin-left: 30%;
    opacity: 1;
    filter: brightness(200%);
  }
  80% {
    margin-left: 60%;
    opacity: 1;
    filter: brightness(100%);
  }
  100% {
    margin-left: 80%;
    opacity: 0;
    filter: brightness(100%);
  }
}
@keyframes breathing {
  0% {
    filter: brightness(100%);
  }
  20% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(150%);
  }
  80% {
    filter: brightness(100%);
  }
  100% {
    filter: brightness(100%);
  }
}
.light {
  background: url("@/assets/images/light.png");
  width: 708px;
  height: 146px;
  position: absolute;
  top: 23px;
  animation: flyToRight 1s linear infinite;
}
.wrapper {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 555px;
}
.container-fluid {
  height: 100%;
  min-height: 100%;
}
.row {
  margin-left: -7px;
  margin-right: -8px;
}
.row > div {
  padding-left: 7px;
  padding-right: 8px;
}
.xpanel-wrapper {
  padding-bottom: 15px;
  box-sizing: border-box;
}
.xpanel-wrapper-1 {
  height: 100%;
}
.xpanel-wrapper-2 {
  height: 50%;
}
.xpanel-wrapper-3 {
  height: 33.33333%;
}
.xpanel-wrapper-4 {
  height: 40%;
}
.xpanel-wrapper-5 {
  height: 60%;
}

.xpanel-wrapper-6 {
  height: 30%;
}
.xpanel {
  padding: 15px;
  height: 100%;
  min-height: 170px;
  background-size: 100% 100%;
  box-sizing: border-box;
}

/* tool */
.fill-h {
  height: 100%;
  min-height: 100%;
}
.no-margin {
  margin: 0 !important;
}
.no-padding {
  padding: 0 !important;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
}

html {
  overflow: hidden;
}

.header_wrapper {
  width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.full_screen {
  width: 100%;
  height: 100%;
}
.bg_video {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.bg_video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dv-capsule-chart .label-column :last-child {
  display: none !important;
}
.unit-label {
  display: none !important;
}
</style>
