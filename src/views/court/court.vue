<template>
  <div>
    <x-header slot="header" class="header" title="场地信息" style="position:fixed" @on-click-more="addCourt(1)">
      <span slot="overwrite-left">
        深圳
        <FontAwesomeIcon icon="caret-down"></FontAwesomeIcon>

      </span>
      <div slot="right" @click="addCourt(2)">
        <FontAwesomeIcon icon="search" style="margin-right:20px"></FontAwesomeIcon>

        <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
      </div>
    </x-header>
    <div class="courtList">
      <!-- <font-awesome-icon icon="spinner" spin />
      <font-awesome-icon icon="spinner" pulse />
      <font-awesome-icon icon="plus" spin/>
      <font-awesome-icon icon="spinner" fixed-width />
      <font-awesome-icon :icon="['fab', 'font-awesome']" />
      <font-awesome-layers class="fa-lg">
        <font-awesome-icon icon="circle" />
        <font-awesome-icon icon="check" transform="shrink-6" style="color: red;" />
      </font-awesome-layers> -->
      <group style="display:block">
        <cell-box v-for="item in list" :key="item.id" style="margin-top:0">
          <div @click="goDetail(item.id)">
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
                        <div class="fr distance">
                          <FontAwesomeIcon icon="map-marker-alt" style="color:#bcbcbc" size="xs"></FontAwesomeIcon>
                          3.1km
                        </div>
                      </div>
                    </flexbox-item>
                    <!--  -->
                    <flexbox-item>
                      <div class="tags">
                        <span class="tag" v-for="tag in item.tags" :class="'tag_type_'+tag" :key="tag">{{tagsList[tag-1]}}</span>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </div>
              </flexbox-item>
            </flexbox>
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
      list: [],
      tagsList: ['室外', '收费', '塑胶', '灯光']
    }
  },
  computed: {
    dividerInfo() {
      return this.$store.getters.dividerInfo
    }
  },
  created() {
    // TODO:
    this.list = [
      {
        name: '南山球场',
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
    ]
  },
  methods: {
    addCourt(i) {
      this.$router.push({
        name: 'court.add'
      })
    },
    goDetail(id) {
      this.$router.push({
        name: 'court.edit',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
/* 球场列表 */
.courtList .weui-cells {
  margin-top: 0px;
}
.courtList .court-img img {
  width: 100%;
  /* max-height: 60px;
  min-height: 55px; */
  height: 4.25rem;
  border-radius: 2px;
}
.courtList .court-info {
  /* font-size: 0.75rem; */
  line-height: 1.28rem;
}
.courtList .court-info .name {
  font-size: 1.0667rem;
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
