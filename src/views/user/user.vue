<template>
  <div>
    <x-header slot="header" :left-options="{showBack:false}" class="header " title="个人中心 " style="position:fixed ">
    </x-header>
    <div>
      <div class="avatar">
        <img :src="userInfo.avatar" :alt="userInfo.name">
        <div class="info">
          <span class="name">{{userInfo.name}}</span>
          <tag v-for="tag in userInfo.role" class="role" :class="{captain:tag.r_id ==1,player:tag.r_id == 2}">
            <FontAwesomeIcon icon="crown" v-if="tag.r_id ==1" size="xs"></FontAwesomeIcon>
            <FontAwesomeIcon icon="user" v-if="tag.r_id ==2" size="xs"></FontAwesomeIcon>
            {{tag.r_name}}
          </tag>
        </div>
        <div class="signature">
          个性签名:每一个篮球场都是我的天下
        </div>
      </div>
      <div class="list">
        <group>
          <cell is-link>
            <FontAwesomeIcon icon="user-alt" slot="icon" style="color:#4ad87f" regular></FontAwesomeIcon>
            <span slot="title" style="color:green;">
              <span style="vertical-align:middle;">我的消息</span>
              <badge text="13"></badge>
            </span>
          </cell>
          <cell title="我的球队" is-link>
            <FontAwesomeIcon icon="basketball-ball" slot="icon" style="color:#30a8d5"></FontAwesomeIcon>
          </cell>
          <cell title="我的比赛" is-link>
            <FontAwesomeIcon icon="trophy" slot="icon" style="color:#f76a2c"></FontAwesomeIcon>
          </cell>
          <cell title="我的关注" is-link>
            <FontAwesomeIcon icon="star" slot="icon" style="color:red"></FontAwesomeIcon>
          </cell>
        </group>
        <group style="margin-top:1.2rem">
          <cell title="我的设置" is-link>
            <FontAwesomeIcon icon="cog" slot="icon" style="color:#666"></FontAwesomeIcon>
          </cell>
        </group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        avatar: '',
        role: []
      },
      // FIXME:
      info: {
        name: '狼仰头哥',
        avatar: '/static/test/avator.png',
        role: [{ r_id: 1, r_name: '队长' }, { r_id: 2, r_name: '球员' }]
      }
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // FIXME:
      setTimeout(() => {
        this.userInfo = this.info;
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.avatar {
  background: url('/static/test/person_bg.png') no-repeat center;
  background-size: 100% 100%;
  // height: 14.667rem;
  text-align: center;
  color: #fff;
}
.avatar img {
  margin: 2.5rem auto 1.4rem;
  width: 6.25rem;
  height: 6.25rem;
}
.info {
  margin: 0 1.458rem;
  padding-bottom: 8px;
  padding-left: 20px;
  border-bottom: 1px solid #999;
}
.info .name {
  font-size: 1.333rem;
}
.info .role {
  padding: 0px 3px;
  border-radius: 4px;
  margin-right: 10px;
  display: inline-block;
  width: 55px;
}
.info .captain {
  background: #f76a2c;
}
.info .player {
  background: @basic-color;
}
.signature {
  // font-size: 0.917rem;
  // font-size: 1rem;
  padding: 5px 0;
}
// 中心列表
.list {
  background: @basic-bg;
  padding-top: 1.2rem;
}
.list .weui-cell {
  font-size: 1.08rem !important;
}
.list .weui-cell svg {
  margin-right: 10px;
}
</style>
