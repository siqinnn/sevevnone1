<template>
  <div class="home">
  我是let
  <!-- <P>{{ms}}</P> -->
  </div>
  
</template>
<script>
export default {
    // props:['ms'],
  data() {
    return {};
  },
  created() {},
  mounted() {
      console.log(this.$route)
  },
  
  methods: {},
//   watch:{
//       $route(to,from){
//           //监听路由
//            console.log(this.$route.params);
//       }
//   }
};
</script>