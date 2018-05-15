<template>
  <div style="height:100%;">
    <view-box ref="viewBox" :body-padding-top="isShowNav?'46px':'0'" body-padding-bottom="50px">
      <!-- <x-header v-if="isShowNav" slot="header" class="header"></x-header> -->
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item selected link="/">
          <x-icon type="ios-paper" class="icon-red" slot="icon"></x-icon>
          <span slot="label">资讯{{isShowNav}}</span>
        </tabbar-item>
        <tabbar-item show-dot link="/court">
          <x-icon type="map" size="30" slot="icon"></x-icon>
          <span slot="label">场地</span>
        </tabbar-item>
        <tabbar-item link="/game">
          <x-icon type="ios-basketball" class="icon-red" slot="icon"></x-icon>
          <span slot="label">比赛</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/user">
          <x-icon type="home" class="icon-red" slot="icon"></x-icon>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    pageSize() {
      return this.$store.getters.pageSize;
    },
    isShowNav() {
      return this.$route.meta.hasHeader;
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #fbf9fe;
}
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  color: #fff;
}
.weui-cells {
  background-color: #fbf9fe !important;
}
</style>
<style lang="less">
.clearfix:after {
  content: '.';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
  font-size: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
img {
  vertical-align: middle;
}
</style>

