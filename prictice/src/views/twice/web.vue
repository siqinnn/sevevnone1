<template>
  <div class="home">
    <h2>Hot</h2>
    <router-link :to="{name:'file'}">film</router-link>
    <router-link :to="{name:'tv'}">tv</router-link>
    <router-link :to="{name:'music'}">music</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// const file = { template: '<div>foo</div>' }
// const tv = { template: '<div>bar</div>' }
export default {
   
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>