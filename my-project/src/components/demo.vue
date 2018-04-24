<template>
<div>demo page</div>
</template>

<script>
import { Input, Button, Select } from 'element-ui';
export default {
  name: 'Layne',
  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1'
      };
  },

  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
html, body, div, p {
    margin: 0;
    padding: 0;
}
.el-menu-demo {
  text-align: center;
}
</style>
