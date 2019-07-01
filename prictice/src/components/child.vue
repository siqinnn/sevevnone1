<template>
  <div class="home">
    <button @click="sendparent">子组件给父组件传数据</button>
    <button @click="haha">查看父传子的数据</button>
  </div>
</template>
<script>
export default {
  props: ["duixiang"],
  // props: {
  //   duixiang:Object
  // },
  data() {
    return {
      duixiang2: {
        name: "我是儿子111111对象"
      }
    };
  },

  created() {},
  mounted() {},
  methods: {
    sendparent() {
      this.$emit("clickkkkk", this.duixiang2);
    },
    //子传父

    haha() {
      console.log(this.duixiang);
    }
  }
};
</script>