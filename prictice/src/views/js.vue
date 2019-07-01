<template>
  <div class="home">
    js 学习组件
    <div>
      使用自定义指令，注意看 console.log<br>
      <input
        type='text'
        v-testDirective
        @input="isInput"
        v-model="inputData"
      >
      {{inputData}}
    </div>

  </div>
</template>

<script>
import echartsCom from "@/components/echarts.vue";

export default {
  data() {
    return {
      inputData: ""
    };
  },
  components: {
    echartsCom
  },
  created() {},
  mounted() {},
  methods: {
    isInput() {
      console.log(9);
    }
  }
};
</script>
