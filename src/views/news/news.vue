<template>
  <div>
    <x-header slot="header" class="header" title="新闻资讯" style="position:fixed">
      <span slot="overwrite-left">
        <!-- 深圳
        <i class="icon-arrow-dropdown"></i> -->
      </span>
      <!-- <div slot="right">
        <icon type="search" style="color:#FFF"></icon>
      </div> -->
    </x-header>
    <div class="newsList">
      <group>
        <cell-box v-for="item in list" :key="item.id">
          <div @click="goDetail(item.id)">
            <flexbox>
              <!-- 左侧 -->
              <flexbox-item :span="4">
                <div class="news-cover">
                  <img :src="item.img" :alt="item.title">
                </div>
              </flexbox-item>
              <!-- 右侧 -->
              <flexbox-item>
                <div class="news-details">
                  <flexbox orient="vertical">
                    <!--  -->
                    <flexbox-item>
                      <div class="title">{{item.title}}</div>
                    </flexbox-item>
                    <!--  -->
                    <flexbox-item>
                      <div>
                        <div class="fl from">来自:
                          <span>{{item.from}}</span>
                        </div>
                        <div class="fr scan">
                          <!-- <FontAwesomeIcon icon="eye"></FontAwesomeIcon> -->
                          <span>{{item.scan}}</span>次浏览
                        </div>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </div>
              </flexbox-item>
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
          title:
            '南山小火箭30分大胜深大掘金，小周首次第二节登场，砍6分2篮板创新高！',
          img: '/static/images/nanshan_court.jpg',
          id: 12,
          from: '新浪体育',
          scan: 11209
        },
        {
          title: '优课在线男篮大胜广东男篮29分,创历史交手领先新高',
          img: '/static/images/kobe.jpg',
          id: 132,
          from: '扑虎体育',
          scan: '1209万'
        },
        {
          title: '南山詹姆斯提出本赛季结束将加入优课在线联盟,未来前景一片大好',
          id: 152,
          from: '新浪体育',
          scan: 12309,
          img: '/static/images/shenda_court.jpg'
        },
        {
          title:
            'Pual George宣布与深圳市南山区优课在线联盟签约两年,具体合同细节未公开',
          id: 112,
          from: '腾讯体育',
          scan: '12094万',
          img: '/static/images/baoti_court.jpg'
        },
        {
          title:
            '2018年深圳市男联盟选秀大会上,优课联盟已状元签选中Lonzo Ball Plus',
          id: 122,
          from: '新浪体育',
          scan: '1312万',
          img: '/static/images/nanshan_court.jpg'
        },
        {
          title:
            '美国NBA联盟明尼苏达森林狼将于本月18号(2018年5月18日)来到中国参加一场友谊赛',
          id: 102,
          from: '新浪体育',
          scan: '3.78万',
          img: '/static/images/kobe.jpg'
        },
        {
          title:
            '深圳市蓝男联盟选秀大会将于2018年5月17日早上9点在宝安体育馆进行',
          id: 1542,
          from: '新浪体育',
          scan: 1209,
          img: '/static/images/uooc_court.jpg'
        },
        {
          title: 'CBA总决赛将于北京时间2018年5月7日在辽宁主场打响',
          id: 1232,
          from: '北京体育',
          scan: '3万',
          img: '/static/images/shenda_court.jpg'
        },
        {
          title: '湖人总冠军',
          id: 1412,
          from: '新浪体育',
          scan: '7209万',
          img: '/static/images/baoti_court.jpg'
        }
      ],
      tagsList: ['室外', '收费', '塑胶', '灯光']
    };
  },
  methods: {
    goDetail(id) {
      const routeParams = {
        name: 'news.detail',
        params: {
          id: id
        },
        query: {
          a: 1,
          b: 'hhkshd'
        }
      };
      this.$router.push(routeParams);
    }
  }
};
</script>

<style scoped>
/* 球场列表 */
.newsList .weui-cells {
  margin-top: 0px;
}
.newsList .news-cover img {
  width: 100%;
  max-height: 65px;
  border-radius: 2px;
}
.newsList .news-details {
  font-size: 13px;
}
.newsList .title {
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.newsList .from {
  color: #999;
  font-size: 12px;
}
.newsList .from span,
.newsList .scan span {
  color: red;
}
.newsList .scan {
  color: #ccc;
}
</style>
