<template id="hot">
  <div class="hotWrap">
    <div>
      <p>二级三级路由</p>
      <button v-for="name of nameList" :key="name" @click="Route(name)">{{name}}</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameList: ["film", "tv", "music"]
    };
  },
  created() {},
  mounted() {},
  methods: {
    Route(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style>
.gai {
  margin: 10px;
}
</style>
