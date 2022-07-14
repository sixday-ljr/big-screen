<template>
  <div class="leftTop">
    <div class="mains">
      <div class="main_main">
        <div class="main_top">
          <img src="@/assets/imgs/work.png" alt="" srcset="" />
          <div class="center">
            <div class="center_top">
              <dv-water-level-pond
                :config="config"
                style="width: 70px; height: 70px"
              />
              <div class="informate">
                <div>100 <span>项目总数</span></div>
                <div>35 <span>未完成</span></div>
                <div class="last">专项整治 <span>3年活动</span></div>
              </div>
            </div>
            <div class="center_bot">
              <div class="informate">
                <div class="last">安全生产 <span>专项投资</span></div>
                <div>100 <span>项目总数</span></div>
                <div>45 <span>未完成</span></div>
              </div>
              <dv-water-level-pond
                :config="configs"
                style="width: 70px; height: 70px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftCenter",

  data() {
    return {
      config: {
        data: [55],
        shape: "round",
        waveHeight: 10,
      },
      configs: {
        data: [45],
        shape: "round",
        waveHeight: 10,
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
        .center_top,
        .center_bot {
          display: flex;
          color: #fff;
          justify-content: center;
          margin-top: 30px;
          .informate {
            display: flex;
            align-items: center;
            div {
              padding: 0 8px;
              text-align: center;
              font-size: 18px;
              span {
                font-size: 16px;
                opacity: 0.4;
                display: block;
              }
            }
            .last {
              opacity: 1;
              font-size: 18px;
              span {
                font-size: 18px;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
.main_top > img:hover {
  content: url("@/assets/img/work.png");
}
</style>
