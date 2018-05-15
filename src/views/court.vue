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
            <flexbox-item :span="4">
              <div class="flex-demoe court-img"><img :src="item.img" alt=""></div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo ">
                <flexbox orient="vertical">
                  <flexbox-item>
                    <div class="flex-dsemo">
                      <div class="fl">{{item.name}}</div>
                      <div class="fr">3.1公里以内</div>
                    </div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flex-desmo">
                      <span>室外</span>
                      <span>收费</span>
                      <span>塑胶</span>
                      <span>灯光</span>
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
      list: [{ name: '南山球场', img: '/static/img/kobe.a2f95e0.jpg', id: 12 }]
    };
  }
};
</script>

<style>
.vux-x-icon {
  fill: #f70968;
}
.cell-x-icon {
  display: block;
  fill: #fff;
  color: #fff;
}
.icon-arrow-dropdown {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid #fff;
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
.courtList .court-img img {
  width: 100%;
}
</style>
