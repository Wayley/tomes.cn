<template>
  <div>
    <x-header slot="header" class="header" title="场地信息" style="position:fixed" @on-click-more="addLeague(1)">
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
        <cell-box v-for="item in list" :key="item.id" class="leagueItem mb-135" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}">
          <div @click="goDetail(item.id)" style="padding:5px 10px">
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

          </div>
        </cell-box>
      </group>

      <divider>{{ BottomInfo }} </divider>
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
          name: '南山球场',
          img: '/static/test/league_bg.png',
          id: 12,
          tags: [1, 2, 3, 4]
        },
        {
          name: '市民中心体育馆篮球场',
          img: '/static/images/kobe.jpg',
          id: 14,
          tags: [1, 2, 4]
        }
      ],
      tagsList: ['室外', '收费', '塑胶', '灯光']
    };
  },
  methods: {
    addLeague(i) {
      console.log(1222222, i);
      this.$router.push({
        name: 'court.add'
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

<style scoped>
/* 球场列表 */
.leagueList .weui-cells {
  margin-top: 0px;
}
.leagueList .leagueItem {
  /* width: 100%; */
  background: no-repeat center / cover;
  color: #fff;
  background-color: #ccc;
  font-size: 1.083rem;
  border-radius: 3px;
  padding: 5px 0;
  margin: 15px 10px;
}
.leagueItem .name {
}
.leagueItem .status {
  text-align: center;
}
.leagueItem .time {
}
.leagueItem .time .icon-clock {
  fill: #fff;
  /* fill: green; */
  color: #fff !important;
  vertical-align: middle;
}

.leagueItem .area {
  text-align: center;
}
</style>
