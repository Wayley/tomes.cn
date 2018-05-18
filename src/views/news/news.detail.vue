<template>
  <div>
    <x-header class=" header" title="新闻资讯详情 " style="position:fixed " slot="header" :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMore">
    </x-header>
    <!--  -->
    <div class="newsDetail container">
      <div class="content">
        {{newsDetail.title}}
      </div>

      <div class="clearfix">
        <div class="fl from">来自:
          <span>{{newsDetail.from}}</span>
        </div>
        <div class="fr scan">
          <span>{{newsDetail.scan}}</span>次浏览
        </div>
      </div>

      <div class="news-cover">
        <img :src="newsDetail.img" alt="">
      </div>
      <div class="remark content">
        {{newsDetail.remark}}
      </div>
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
      newsDetail: {
        title:
          'Pual George宣布与深圳市南山区优课在线联盟签约两年,具体合同细节未公开。',
        id: 112,
        from: '腾讯体育',
        scan: '12094万',
        img: '/static/images/baoti_court.jpg',
        remark:
          '如果你无法简洁的表达你的想法，那只说明你还不够了解它。--阿尔伯特·爱因斯坦'
      },
      menus: {
        menu1: '分享',
        menu2: '收藏'
      },
      showMenus: false
    };
  },
  computed: {
    newsId() {
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
    }
  }
};
</script>

<style scoped>
.newsDetail .weui-cells {
  margin-top: 0px;
}
.newsDetail .content {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 2rem;
}
.newsDetail .from,
.newsDetail .scan {
  font-size: 13px;
}
.newsDetail .from span,
.newsDetail .scan span {
  color: red;
}
.newsDetail .news-cover {
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid #aaa;
}
.newsDetail .news-cover img {
  width: 100%;
  max-height: 220px;
}
.newsDetail .remark {
  margin-top: 20px;
  text-indent: 2em;
}
</style>
