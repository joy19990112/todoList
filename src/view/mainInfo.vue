<template>
  <div class="text-3xl">{{ $store.state.testVue.testVue.test }}</div>
</template>

<script>
import testMixin from "@/mixins/test.js";
export default {
  mixins: [testMixin],
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {
    // testMixin
    this.getData();
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
</style>