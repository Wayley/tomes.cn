<template>
  <div>
    <x-header slot="header" class="header" title="联赛" style="position:fixed" @on-click-more="addLeague(1)">
      <span slot="overwrite-left">
        深圳
        <i class="icon-arrow-dropdown"></i>
      </span>
      <div slot="right" @click="addLeague(2)">
        <icon type="search" style="color:#FFF"></icon>
      </div>
    </x-header>
    <div class="leagueList">
      <group>
        <cell-box v-for="item in list" :key="item.id" class="leagueItem mb-135 newleag" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}">
          <!-- <div @click="goDetail(item.id)" style="padding:5px 10px">
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item :span="4/5" class="name mb-15">
                2018南山科技园杯篮球邀请赛
              </flexbox-item>
              <flexbox-item :span="1/5" class="status mb-15">
                结束
              </flexbox-item>
              <flexbox-item :span="4/5" class="time">
                <x-icon type="ios-clock" class="icon-clock" size="20"></x-icon>
                <span>2018-05-17 18:00:00</span>
              </flexbox-item>
              <flexbox-item :span="1/5" class="area">南山区</flexbox-item>
            </flexbox>
          </div> -->
          <div class="info">
            <!-- 未发布 -->
            <div class="info-item unpublish" v-if="item.status == 0">
              <FontAwesomeIcon icon="exclamation-circle"></FontAwesomeIcon>
              {{item.status_name}}
            </div>
            <!-- 组队中 -->
            <div class="info-item onteam" v-if="item.status == 1">
              <FontAwesomeIcon icon="user-friends"></FontAwesomeIcon>
              {{item.status_name}}
            </div>
            <!-- 比赛中 -->
            <div class="info-item ongame" v-if="item.status == 2">
              <FontAwesomeIcon icon="basketball-ball"></FontAwesomeIcon>
              {{item.status_name}}
            </div>
            <!-- 已结束 -->
            <div class="info-item end" v-if="item.status == 3">
              <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
              {{item.status_name}}
            </div>
            <div class="info-item regular">
              <FontAwesomeIcon icon="clock" regular></FontAwesomeIcon>
              {{item.time}}
            </div>
            <div class="info-item regular">
              <FontAwesomeIcon icon="map-marker-alt"></FontAwesomeIcon>
              {{item.location}}
            </div>
          </div>
          <div class="name">
            {{item.name}}
          </div>
        </cell-box>
      </group>

      <divider>{{ dividerInfo }} </divider>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      BottomInfo: '我是有底线的',
      list: [
        {
          name: '优课体育2018篮球邀请赛',
          img: null,
          id: 1,
          status: 0,
          status_name: '未发布',
          location: '深圳市南山区',
          time: '2018-5-24'
        },
        {
          name: '优课体育2018篮球邀请赛',
          img: '/static/images/league_bg2.png',
          id: 2,
          status: 0,
          status_name: '未发布',
          location: '深圳市南山区',
          time: '2018-5-24'
        },
        {
          name: '2018南山科技园杯篮球邀请赛',
          img: '/static/test/league_bg.png',
          id: 3,
          status: 1,
          status_name: '组队中',
          location: '深圳市南山区',
          time: '2018-5-24'
        },
        {
          name: '大冲首届名人赛',
          img: '/static/images/baoti_court.jpg',
          id: 4,
          status: 2,
          status_name: '比赛中',
          location: '深圳市南山区',
          time: '2018-5-24'
        },
        {
          name: '中国广东省深圳市罗湖区全民篮球挑战赛2018赛季季前赛',
          img: '/static/images/kobe.jpg',
          id: 5,
          status: 3,
          status_name: '已结束',
          location: '深圳市南山区',
          time: '2018-5-24'
        }
      ]
    };
  },
  computed: {
    dividerInfo() {
      return this.$store.getters.dividerInfo;
    }
  },
  created() {},
  methods: {
    addLeague(i) {
      this.$router.push({
        name: 'league.add'
      });
    },
    goDetail(id) {
      this.$router.push({
        name: 'league.detail',
        params: {
          id: id
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
/* 球场列表 */
.leagueList .weui-cells {
  margin-top: 0px;
}
.leagueList .leagueItem {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  background-color: #ccc;
  font-size: 1.083rem;
  border-radius: 5px;
  padding: 1px 0;
  margin: 15px 10px;
  display: block;
}
.leagueList .weui-cell:before {
  border-top: none;
}
/* .leagueItem .name {
}
.leagueItem .status {
  text-align: center;
}
.leagueItem .time {
}
.leagueItem .time .icon-clock {
  fill: #fff;
  color: #fff !important;
  vertical-align: middle;
}

.leagueItem .area {
  text-align: center;
} */

/* // /////////// */
.newleag .info {
  margin-top: 30px;
  margin-left: 60%;
  overflow: hidden;
}
.newleag .info .info-item {
  width: -webkit-calc(100% - 2.8rem);
  width: -moz-calc(100% - 2.8rem);
  width: calc(100% - 2.8rem);
  height: 0;
  line-height: 1.667rem;
  border-left: 2.8rem solid transparent;
  margin-left: -1.8rem;
  font-size: 1rem;
  padding-left: 5px;
  margin-bottom: 5px;
}
.newleag .info .info-item svg {
  margin-right: 3px;
}
// 未发布
.newleag .info .unpublish {
  border-bottom: 1.667rem solid #4ad87f;
}
// 组队中
.newleag .info .onteam {
  border-bottom: 1.667rem solid @basic-color;
}
// 比赛中
.newleag .info .ongame {
  border-bottom: 1.667rem solid #f76a2c;
}
// 已结束
.newleag .info .end {
  border-bottom: 1.667rem solid #cfc9d0;
}
// 时间 和 地点
.newleag .info .regular {
  border-bottom: 1.667rem solid #808080;
}
.newleag .name {
  padding: 0.333rem 10px;
  background: #212023;
  margin-bottom: -1px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  line-height: 1.2rem;
}
</style>
