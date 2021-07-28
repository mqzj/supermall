<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物车</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <featrue-view></featrue-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatrueView from "./childComps/FeatrueView";

import {getHomeMultidata} from "../../network/home";
// import Swiper from "../../components/common/swiper/Swiper";
// import SwiperItem from "../../components/common/swiper/SwiperItem";


export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatrueView,
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      //this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
