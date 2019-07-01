<template>
  <div class="home">
    <button v-for="name of nameList" :key="name" @click="Route(name)">{{name}}</button>
    <!-- <let ms="{好好学习，天天向上}"></let> -->
    <router-view />
  </div>
</template>
<script>
// import letA from './views/twice/neirong/three/let'
export default {
  
  data() {
    return {
      nameList:["let","var"],
    }
  },
  // components:{letA},
  created() {},
  mounted() {},
  methods: {
    Route(name){
      this.$router.push({name:name,params:{id:"let"}});
    }
  },
     
};
</script>