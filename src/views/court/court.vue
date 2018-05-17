<template>
  <div>
    <x-header slot="header" class="header" title="场地信息" style="position:fixed">
      <span slot="overwrite-left">
        深圳
        <i class="icon-arrow-dropdown"></i>
      </span>
      <div slot="right">
        <icon type="search" style="color:#FFF"></icon>
        <!-- <x-icon type="ios-plus-empty" size="20" class="cell-x-icon"></x-icon>
        <x-icon type="ios-search" size="20" style="color:#fff"></x-icon> -->
      </div>
    </x-header>
    <div class="courtList">
      <group>
        <cell-box v-for="item in list" :key="item.id">
          <flexbox>
            <!-- 左侧 -->
            <flexbox-item :span="4">
              <div class="court-img">
                <!-- <img src="../assets/uooc_court.jpg" alt=""> -->
                <img :src="item.img" :alt="item.name">
              </div>
            </flexbox-item>
            <!-- 右侧 -->
            <flexbox-item>
              <div class="">
                <flexbox orient="vertical">
                  <!--  -->
                  <flexbox-item>
                    <div class="court-info clearfix">
                      <div class="fl name">{{item.name}}</div>
                      <div class="fr distance">3.1公里以内</div>
                    </div>
                  </flexbox-item>
                  <!--  -->
                  <flexbox-item>
                    <div class="tags">
                      <span class="tag" v-for="tag in item.tags" :class="'tag_type_'+tag">{{tagsList[tag-1]}}</span>
                    </div>
                  </flexbox-item>
                </flexbox>
              </div>
            </flexbox-item>
          </flexbox>
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
          // img: '/static/img/nanshan_court.ec32b37.jpg',
          img: '/static/images/vux_logo.png',
          id: 12,
          tags: [1, 2, 3, 4]
        },
        {
          name: '市民中心体育馆篮球场',
          img: '/static/images/kobe.jpg',
          id: 14,
          tags: [1, 2, 4]
        },
        {
          name: '深大球场',
          img: '/static/images/shenda_court.jpg',
          id: 17,
          tags: [1, 4]
        },
        {
          name: '宝体中心球场',
          img: '/static/images/baoti_court.jpg',
          id: 15,
          tags: [1, 3]
        },
        {
          name: 'uooc中心球场',
          img: '/static/images/uooc_court.jpg',
          id: 13,
          tags: [1, 2, 3, 4]
        },
        {
          name: '南山球场',
          img: '/static/images/nanshan_court.jpg',
          id: 11,
          tags: [1, 2, 3, 4]
        },
        {
          name: '市民中心体育馆篮球场',
          img: '/static/images/kobe.jpg',
          id: 16,
          tags: [1, 2, 4]
        },
        {
          name: '深大球场',
          img: '/static/images/shenda_court.jpg',
          id: 18,
          tags: [1, 4]
        },
        {
          name: '宝体中心球场',
          img: '/static/images/baoti_court.jpg',
          id: 19,
          tags: [1, 3]
        }
      ],
      tagsList: ['室外', '收费', '塑胶', '灯光']
    };
  },
  methods: {}
};
</script>

<style>
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
.flex-dem2o {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
/* 球场列表 */
.courtList .weui-cells {
  margin-top: 0px;
}
.courtList .court-img img {
  width: 100%;
  /* max-height: 60px;
  min-height: 55px; */
  height: 55px;
  border-radius: 2px;
}
.courtList .court-info {
  /* font-size: 0.75rem; */
  line-height: 0.8rem;
}
.courtList .court-info .name {
  font-size: 16px;
  max-width: 60%;
}
.courtList .court-info .distance {
  color: #999;
  font-size: 0.6rem;
}
.courtList .tags .tag {
  color: #fff;
  font-size: 0.6rem;
  border-radius: 5px;
  padding: 1px 0.4rem;
  margin-right: 0.4rem;
}
.courtList .tags .tag_type_1 {
  background: #32ef1f;
}
.courtList .tags .tag_type_2 {
  background: #636eb2;
}
.courtList .tags .tag_type_3 {
  background: #df8c39;
}
.courtList .tags .tag_type_4 {
  background: #e52c3f;
}
</style>
