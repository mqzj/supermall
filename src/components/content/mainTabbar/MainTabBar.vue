<template>
  <tab-bar>
    <tab-bar-item path="/home" class="tab-bar-item">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="../../../assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:item-text><div>首页</div></template>
<!--      <img v-slot:item-icon src="../../../assets/img/tabbar/home.svg" alt="">-->
<!--      <img v-slot:item-icon-active src="../../../assets/img/tabbar/home_active.svg" alt="">-->
<!--      <div v-slot:item-text>首页</div>-->
    </tab-bar-item>
    <tab-bar-item path="/category" class="tab-bar-item">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="../../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:item-text><div>分类</div></template>

<!--      <img v-slot:item-icon src="../../../assets/img/tabbar/category.svg" alt="">-->
<!--      <img v-slot:item-icon-active src="../../../assets/img/tabbar/category_active.svg" alt="">-->
<!--      <div v-slot:item-text>分类</div>-->
    </tab-bar-item>
    <tab-bar-item path="/cart" class="tab-bar-item">
      <template v-slot:item-icon> <img src="../../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template v-slot:item-icon-active><img src="../../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template v-slot:item-text><div>购物车</div></template>

<!--      <img v-slot:item-icon src="../../../assets/img/tabbar/shopcart.svg" alt="">-->
<!--      <img v-slot:item-icon-active src="../../../assets/img/tabbar/shopcart_active.svg" alt="">-->
<!--      <div v-slot:item-text>购物车</div>-->
    </tab-bar-item>
    <tab-bar-item path="/profile" class="tab-bar-item">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:item-icon-active> <img src="../../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:item-text><div>我的</div></template>

<!--      <img v-slot:item-icon src="../../../assets/img/tabbar/profile.svg" alt="">-->
<!--      <img v-slot:item-icon-active src="../../../assets/img/tabbar/profile_active.svg" alt="">-->
<!--      <div v-slot:item-text>我的</div>-->
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  @import  '../../../assets/css/maintabbar.css';
</style>
