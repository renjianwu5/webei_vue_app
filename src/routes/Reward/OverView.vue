<template>
  <div>
    <div class="overview-cash">
      <flexbox>
        <flexbox-item style="border-right: 1px solid #eee;">
          <h3>总收入</h3>
          <p>{{ 341.21 | currency '¥' }}</p>
        </flexbox-item>
        <flexbox-item>
          <h3>余额</h3>
          <p>{{ 32 | currency '¥' }}</p>
        </flexbox-item>
      </flexbox>
    </div>
    <group>
      <cell title="打赏记录" is-link></cell>
      <cell title="提现记录" is-link></cell>
    </group>
    <br />
    <tip align="left">关于赏金分配：</tip>
    <tip align="left">内容发布者＝70%</tip>
    <tip align="left">粉丝圈运营＝20%</tip>
    <tip align="left">平台服务费＝10%</tip>
    <br />
    <tip align="left">赏金超过1元，系统自动提现到您的微信钱包</tip>
    <tip align="left">平台运营者需要管理平台申请提现</tip>
  </div>
</template>

<script>
import Cell from 'vux-components/cell';
import Group from 'vux-components/group';
import Tip from 'vux-components/tip';
import Flexbox from 'vux-components/flexbox';
import FlexboxItem from 'vux-components/flexbox-item';

export default {
  components: {
    Group,
    Cell,
    Tip,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style>
  html {
    background-color: #f1f1f1;
  }

  .overview-cash {
    background-color: #fff;
    padding: 20px 0;
  }

  .overview-cash p, .overview-cash h3 {
    text-align: center;
  }

  .overview-cash h3 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
  }

</style>
