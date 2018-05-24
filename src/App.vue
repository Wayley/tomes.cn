<template>
  <div style="height:100%;">
    <view-box ref="viewBox" :body-padding-top="isShowNav?'46px':'0'" body-padding-bottom="50px">
      <!-- <x-header v-if="isShowNav" slot="header" class="header"></x-header> -->
      <router-view></router-view>
      <tabbar slot="bottom" @on-index-change="tabbarChange()">
        <tabbar-item :selected="routePath == '/' || itemIsSelected('/news')" link="/" @on-item-click="itemChange()">
          <FontAwesomeIcon icon="file-alt" slot="icon"></FontAwesomeIcon>
          <span slot="label">资讯</span>
        </tabbar-item>
        <tabbar-item show-dot link="/court" :selected="itemIsSelected('/court')">
          <FontAwesomeIcon icon="th" :rotation="90" slot="icon"></FontAwesomeIcon>
          <span slot="label">场地</span>
        </tabbar-item>
        <tabbar-item link="/league" :selected="itemIsSelected('/league')">
          <FontAwesomeIcon icon="trophy" slot="icon"></FontAwesomeIcon>
          <span slot="label">比赛</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/user" :selected="itemIsSelected('/user')">
          <FontAwesomeIcon icon="user-circle" slot="icon"></FontAwesomeIcon>
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
  // background-color: #fbf9fe;
}
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
/* 位置icon */
.icon-arrow-dropdown {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #fff;
  position: absolute;
  left: 7px;
  top: 35%;
  margin-left: 25px;
}
.container {
  padding: 10px 15px;
}
// VUX覆盖样式
.container .weui-cells {
  margin-top: 0px;
}
.weui-cells {
  // background-color: #fbf9fe !important;
  margin-top: 0px !important;
}
.weui-cells .weui-cell:before {
  left: 0 !important;
}
.vux-divider {
  font-size: 0.5rem;
}
.vux-header-title {
  font-size: 1.066rem !important;
}
.weui-tabbar__icon svg {
  width: 100% !important;
  height: 100% !important;
}
.weui-tabbar__item {
  // color: @menu-color!important;
}
.weui-tabbar__label {
  color: @menu-color!important;
}
</style>
<style lang="less">
html {
  font-size: 12px;
}
@media screen and (max-width: 320px) {
  html {
    font-size: 12px;
  }
}
@media screen and (min-width: 375px) {
  html {
    font-size: 14.0625px;
  }
}
@media screen and (min-width: 414px) {
  html {
    font-size: 15.525px;
  }
}
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
.hide {
  display: none !important;
}
.mb-15 {
  margin-bottom: 15px !important;
}
</style>

