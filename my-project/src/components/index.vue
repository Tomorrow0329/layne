<template>
<div>
  <el-menu :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="2">我的工作台</el-menu-item>
    <el-menu-item index="3">消息中心</el-menu-item>
</el-menu>


<el-row class="tac">
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
</div>
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
