<template>
  <div>
    <x-header class=" header" title="联赛详情 " style="position:fixed " slot="header" :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMore">
    </x-header>
    <!--  -->
    <div class="leagueDetail">
      <div class="league-cover">
        <img src="/static/test/league_bg.png" alt="">
      </div>
      <tab v-model="tabIndex" prevent-default @on-before-index-change="switchTabItem">
        <tab-item selected>概况</tab-item>
        <tab-item>球队</tab-item>
        <tab-item>赛程</tab-item>
        <tab-item>快讯</tab-item>
      </tab>
    </div>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: {
        menu1: '分享',
        menu2: '收藏'
      },
      showMenus: false,
      tabIndex: 1
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    routePath() {
      return this.$route;
    }
  },
  created() {},
  methods: {
    showMore() {
      this.showMenus = true;
      console.log(this.routePath);
    },
    switchTabItem(index) {
      console.log('on-before-index-change', index);
      this.$vux.loading.show({
        text: 'loading'
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.tabIndex = index;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.leagueDetail .weui-cells {
  margin-top: 0px;
}
.leagueDetail .league-cover img {
  width: 100%;
  height: 180px;
  border-radius: none;
}
</style>
