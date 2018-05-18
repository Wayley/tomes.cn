<template>
  <div>
    <x-header class=" header" :title="isEdit?'球场信息':'新增球场'" style="position:fixed " slot="header" :left-options="{backText: ''}" :right-options="{showMore: isEdit}" @on-click-more="showMore">
    </x-header>
    <div class="container3" style="padding-top:0">
      <group>
        <x-input title="球场名称" v-model="courtInfo.name" placeholder="请输入球场名称" text-align="right"></x-input>
        <x-input title="球场数量" v-model="courtInfo.courtNum" placeholder="请输入球场数量" type="number" text-align="left"></x-input>
        <popup-picker title="球场类型" :data="courtTypeList" :columns="1" v-model="courtType" show-name></popup-picker>
        <x-switch title="是否免费" v-model="courtInfo.isCharged"></x-switch>
        <x-number label-width="7.5rem" v-if="courtInfo.isCharged" title="收费标准(元/小时)" name="myname" :step="0.5" :min="0" v-model="courtInfo.price" fillable></x-number>
        <x-switch title="灯光" v-model="courtInfo.hasLight"></x-switch>

        <cell title="地板类型" :value="floorName" is-link @click.native="showPopup=true"></cell>
        <datetime v-model="minuteListValue" format="HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" title="开放时间"></datetime>
        <popup-picker title="开放时间" :data="list2" v-model="value2" popup-title="开始时间--关闭时间"></popup-picker>
        <x-input title="场地联系电话" v-model="courtInfo.phone" placeholder="请输入场地联系电话" type="tel" text-align="right"></x-input>
      </group>

      <!--  地板类型 多选框 -->
      <div v-transfer-dom>
        <popup v-model="showPopup" class="checker-popup">
          <div style="padding:10px 10px 40px 10px;">
            <p class="info">选择地板类型</p>
            <checker v-model="courtInfo.floor" type="checkbox" default-item-class="checker-item" selected-item-class="checker-item-selected" disabled-item-class="checker-item-disabled">
              <checker-item :value="item.type" @on-item-click="onItemClick" v-for="item in floorList" :key="item.type"> {{item.name }} </checker-item>
            </checker>
          </div>
        </popup>
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
      list2: [
        ['01', '02', '03', '04'],
        ['01', '02', '03', '04', '10'],
        ['05', '06', '07', '08'],
        ['11', '12', '13', '14', '12']
      ],
      value2: ['01'],
      courtType: ['v3'],
      // 球场类型
      courtTypeList: [
        {
          name: '类型1',
          value: 'v1'
        },
        {
          name: '类型2',
          value: 'v2'
        },
        {
          name: '类型3',
          value: 'v3'
        },
        {
          name: '类型4',
          value: 'v4'
        }
      ],
      // 地板类型
      floorList: [
        {
          type: 1,
          name: '塑胶球场'
        },
        {
          type: 2,
          name: '水泥'
        },
        {
          type: 3,
          name: '其他'
        }
      ],
      floorName: '',
      // 地板类型Popup
      showPopup: false,
      time_hour: ['01', '02', '03'],

      formatDemoValue: [],
      list: [{ key: 'gd', value: '广东' }, { key: 'gx', value: '广西' }],
      courtInfo: {},
      // 模拟请求的数据
      courtInfo_: {
        name: '高新园球场',
        courtNum: 4, //球场数量
        type: 1, // 1室内 2室外,
        // isFree: true, //是否免费
        isCharged: true, //是否收费
        price: 0.3, // 收费价格
        hasLight: true, //灯光
        floor: [1, 3], //地板类型 ...
        open_time_s: '09:30', // 开放时间
        open_time_e: '21:00', // 开放时间,
        phone: 13400001111, //联系人电话
        address: '深圳市南山区深南大道9977号',
        address_point: [116.404, 39.915] // 经纬度
      },
      menus: {
        menu1: '分享',
        menu2: '收藏'
      },
      showMenus: false
    };
  },
  created() {
    if (this.isEdit) this.getDetail(this.$route.params.id);
  },
  computed: {
    isEdit() {
      return this.$route.name == 'court.edit';
    },
    floorVals() {
      return this.courtInfo.floor;
    }
  },
  watch: {
    floorVals(newFloorVals, oldFloorVals) {
      console.log('watchName', newFloorVals, oldFloorVals);
      this.floorName = newFloorVals.join(',');
    }
  },
  methods: {
    showMore() {
      this.showMenus = true;
    },
    getDetail(id) {
      console.log(id, 'iiiii');
      setTimeout(() => {
        this.courtInfo = this.courtInfo_;
      }, 500);
    },
    onItemClick() {}
  }
};
</script>
<style lang="less" scoped>
.checker-popup {
  background: #fff;
}
.checker-popup p.info {
  padding: 5px 5px 5px 2px;
  color: #888;
  font-size: 14px;
}
.checker-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 15px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.checker-item-selected {
  background-color: #ff3b3b;
  color: #fff;
}
</style>
