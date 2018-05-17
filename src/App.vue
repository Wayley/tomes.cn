<template>
  <div style="height:100%;">
    <view-box ref="viewBox" :body-padding-top="isShowNav?'46px':'0'" body-padding-bottom="50px">
      <!-- <x-header v-if="isShowNav" slot="header" class="header"></x-header> -->
      <router-view></router-view>
      <tabbar slot="bottom" @on-index-change="tabbarChange()">
        <tabbar-item :selected="routePath == '/' || itemIsSelected('/news')" link="/" @on-item-click="itemChange()">
          <x-icon type="ios-paper" class="icon-red" slot="icon"></x-icon>
          <span slot="label">资讯</span>
        </tabbar-item>
        <tabbar-item show-dot link="/court" :selected="itemIsSelected('/court')">
          <x-icon type="map" size="30" slot="icon"></x-icon>
          <span slot="label">场地</span>
        </tabbar-item>
        <tabbar-item link="/game" :selected="itemIsSelected('/game')">
          <x-icon type="ios-basketball" class="icon-red" slot="icon"></x-icon>
          <span slot="label">比赛</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/user" :selected="itemIsSelected('/user')">
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
    return {
      containerLsit: ['news.detail']
    };
  },
  computed: {
    pageSize() {
      return this.$store.getters.pageSize;
    },
    isShowNav() {
      return this.$route.meta.hasHeader;
    },
    routeName() {
      return this.$route.name;
    },
    routePath() {
      return this.$route.path;
    }
  },
  watch: {
    routePath(routePath) {
      // console.log(routePath, 1233);
    }
  },
  methods: {
    itemIsSelected(path) {
      console.log(23456, path, this.routePath.indexOf(path));
      return this.routePath.indexOf(path) > -1;
    },
    itemChange() {
      // console.log('item');
    },
    tabbarChange() {
      // console.log('tabbar');
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
.container {
  padding: 10px 15px;
}
.weui-cells {
  background-color: #fbf9fe !important;
}
.vux-divider {
  font-size: 0.5rem;
}
.vux-header-title {
  font-size: 0.75rem !important;
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
  border-radius: 3px;
  font-size: 12px;
}
html {
  font-size: 20px;
}
@media screen and (max-width: 320px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 375px) {
  html {
    font-size: 23.4375px;
  }
}
@media screen and (min-width: 414px) {
  html {
    font-size: 25.875px;
  }
}
</style>

