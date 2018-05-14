<template>
  <div>
    <group>
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
    </group>
    <group title="验证码">
      <x-input title="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
// import { Group, XInput } from 'vux';

export default {
  // components: {
  //   Group,
  //   XInput
  // },
  data() {
    return {
      msg: 'Hello World!'
    };
  }
};
</script>

<style>

</style>
