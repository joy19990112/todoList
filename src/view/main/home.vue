<template>
  <div
    class="text-3xl">
    {{ todoList }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapState(
      'todoInfo/todoInfo',
      ['todoList']
    ),
  },
}
</script>
<style
  scoped></style>
