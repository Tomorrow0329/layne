<template>
  <el-container>
    <el-header>

      <el-steps :active="active1" finish-status="success" align-center>
        <el-step title="任务" description="配置任务基本属性"></el-step>
        <el-step title="任务源" description="配置数据源"></el-step>
        <el-step title="数据解析" description="配置单条消息解析规则"></el-step>
        <el-step title="数据处理" description="配置数据过滤和转换"></el-step>
        <el-step title="数据输出" description="配置数据输出"></el-step>
        <el-step title="完成" description="任务配置完成"></el-step>

      </el-steps>

      <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
    </el-header>
    <el-main>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="样例数据" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <el-form-item label="一级解析类型">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="分隔符" name="first">

              <tr><td><label>分隔符</label></td><td><el-input v-model="a"></el-input></td></tr>
              <el-form-item>
                <el-button @click="addFirst">增加一级字段</el-button>
              </el-form-item>

              <div class="first-level-box"  v-for="(first, index) in ruleForm.firsts">
                <label>一级字段</label><el-input v-model="a" class="input"></el-input>
                <label>类型</label><el-select v-model="value_select" placeholder="请选择" value="" class="select">
                <el-option
                  v-for="item in options_select"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                <label>序号</label><el-input v-model="a"   value="" class="input"></el-input>
                <label>不可空</label><el-checkbox v-model="checked"></el-checkbox>
                <label>输出</label><el-checkbox v-model="checked"></el-checkbox>


                <el-button @click="removeFirst(first)">删除一级字段</el-button>

                <el-button @click="addSecond(index)">增加二级字段</el-button>
                <div v-for="(second, index2) in ruleForm.seconds[index]" class="second_div">

                  <label>二级字段</label><el-input v-model="a"  class="input"></el-input>
                  <label>类型</label><el-select v-model="value_select" placeholder="请选择" value="" class="select">
                  <el-option
                    v-for="item in options_select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                  <label>序号</label><el-input v-model="a"  class="input"></el-input>
                  <el-radio v-model="radio1" label="1" >split</el-radio>
                  <el-radio v-model="radio1" label="2" >正则</el-radio>
                  <nobr v-if="radio1==='1'" >
                      <label>分隔符</label><el-input v-model="a"  class="input"></el-input> 序号<el-input v-model="a"  class="input"></el-input>
                  </nobr>
                  <nobr v-if="radio1==='2'" >
                      <label>表达式</label><el-input v-model="a"  class="input"></el-input>
                  </nobr>
                  <label>不可空</label><el-checkbox v-model="checked2"></el-checkbox>
                  <label>输出</label><el-checkbox v-model="checked3"></el-checkbox>
                  <el-button @click="removeSecond(index,second)">删除二级字段</el-button>
                </div>
              </div>


            </el-tab-pane>
            <el-tab-pane label="正则" name="second">

              <el-form-item>
                <el-button @click="addFirst">增加一级字段</el-button>
              </el-form-item>

              <div  v-for="(first, index) in ruleForm.firsts">
                <label>一级字段</label><el-input v-model="a" class="input"></el-input>
                <label>类型</label><el-select v-model="value_select" placeholder="请选择" value="" class="select">
                <el-option
                  v-for="item in options_select"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
                <label>表达式</label><el-input v-model="a"   value="" class="input"></el-input>
                <label>不可空</label><el-checkbox v-model="checked"></el-checkbox>
                <label>输出</label> <el-checkbox v-model="checked"></el-checkbox>


                <el-button @click="removeFirst(first)">删除一级字段</el-button>

                <el-button @click="addSecond(index)">增加二级字段</el-button>
                <div v-for="(second, index2) in ruleForm.seconds[index]" class="second_div">

                  <label>二级字段</label><el-input v-model="a"  class="input"></el-input>
                  <label>类型</label><el-select v-model="value_select" placeholder="请选择" value="" class="select">
                  <el-option
                    v-for="item in options_select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                  <label>序号</label><el-input v-model="a"  class="input"></el-input>
                  <el-radio v-model="radio1" label="1" >split</el-radio>
                  <el-radio v-model="radio1" label="2" >正则</el-radio>
                  <nobr v-if="radio1==='1'" >
                  <label>分隔符</label><el-input v-model="a"  class="input"></el-input> 序号<el-input v-model="a"  class="input"></el-input>
                  </nobr>
                  <nobr v-if="radio1==='2'" >
                    <label>表达式</label><el-input v-model="a"  class="input"></el-input>
                  </nobr>
                  <label>不可空</label><el-checkbox v-model="checked2"></el-checkbox>
                  <label>输出</label><el-checkbox v-model="checked3"></el-checkbox>
                  <el-button @click="removeSecond(index,second)">删除二级字段</el-button>
                </div>
              </div>
            </el-tab-pane>

          </el-tabs>
        </el-form-item>
        <el-form-item label="增加自定义字段">
          <el-button @click="addUserField">增加自定义字段</el-button>
        </el-form-item>

        <el-form-item
          v-for="(userField, index) in ruleForm.userFields"
          :key="userField.key"
          :prop="'userFields.' + index + '.value'"

        >
          <div>
            <label>字段</label><el-input v-model="userField.value" class="input"></el-input>
            <label>类型类型</label><el-select v-model="value_select" placeholder="请选择" value="" class="select">
            <el-option
              v-for="item in options_select"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
            <label>常量值</label><el-input v-model="userField.value" class="input"></el-input>
            <label>输出</label><el-checkbox v-model="checked4"></el-checkbox>
            <el-button @click.prevent="removeUserField(userField)">删除</el-button>
          </div>
        </el-form-item>

        <el-form-item label="增加JSON字段">
          <span class="icon-add-50" :onclick="addJsonField"></span>
          <el-button @click="addJsonField">增加JSON字段</el-button>
        </el-form-item>
        <el-form-item
          v-for="(jsonField, index) in ruleForm.jsonFields"
          :key="jsonField.key"
          :prop="'jsonFields.' + index + '.value'"

        >
          <div>
            <label>引用字段</label><el-input v-model="jsonField.value" class="input"></el-input>
            <el-button @click="addJsonField">JSON解析</el-button>
            <el-button @click.prevent="removeJsonField(jsonField)">删除</el-button>
          </div>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  import {Input, Button, Select} from 'element-ui';// 用到的组件 要在这边先引入
  export default {
    name: 'Layne',
    data() {// 在这里对页面数据初始化
      return {
        ruleForm: {
          name: '',
          seconds: [
            [],
          ],
          firsts: [{
            value: ''
          }],
          userFields: [],
          jsonFields:[]

        },
        rules: {
          desc: [
            { required: true, message: '请填写样例数据', trigger: 'blur' }
          ],


        },
        active1:2,
        options_select: [{
          value: 'STRING',
          label: 'STRING'
        }, {
          value: 'INT',
          label: 'INT'
        }, {
          value: 'BIGINT',
          label: 'BIGINT'
        }, {
          value: 'DOUBLE',
          label: 'DOUBLE'
        }, {
          value: 'FLOAT',
          label: 'FLOAT'
        }, {
          value: 'BOOLEAN',
          label: 'BOOLEAN'
        }],
        value_select: '',
       radio1:'1',
        activeName:'first'
      };
    },
    route: {
      data: function () {// 这里写 当页面生成是 需要立即之行 的函数
        // this.initFn()
      },
      canReuse: true
    },

    methods: {// 这里写页面中涉及的处理函数
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 这里可以发ajax请求啦～
            alert('submit!');
            if (this.active1++ > 2) this.active1 = 0;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(value) {
        console.log(value);
      },
      addSecond(index){
        console.log(this.ruleForm.seconds[index]);
        this.ruleForm.seconds.push([]);
        this.ruleForm.seconds[index].push({
          value: '',
          key: Date.now()
        });
      },
      removeSecond(index,item){
        var index2 = this.ruleForm.seconds[index].indexOf(item);
        console.log(index2);
        if (index2 !== -1) {
          this.ruleForm.seconds[index].splice(index2, 1)
        }
      },
      addUserField(){
        this.ruleForm.userFields.push({
          value: '',
          key: Date.now()
        });
      },
      removeUserField(item){
        var index = this.ruleForm.userFields.indexOf(item);
        console.log(index);
        if (index !== -1) {
          this.ruleForm.userFields.splice(index, 1)
        }
      },
      addFirst(){
        this.ruleForm.firsts.push({
          value: '',
          key: Date.now()
        });
      },
      removeFirst(item){
        var index = this.ruleForm.firsts.indexOf(item);
        console.log(index);
        if (index !== -1) {
          this.ruleForm.firsts.splice(index, 1)
        }
      },
      addJsonField(){
        this.ruleForm.jsonFields.push({
          value: '',
          key: Date.now()
        });
      },
      removeJsonField(item){
        var index = this.ruleForm.jsonFields.indexOf(item);
        console.log(index);
        if (index !== -1) {
          this.ruleForm.jsonFields.splice(index, 1)
        }
      }
    }
  }
</script>

<style>
  html, body, div, p {
    margin: 0;
    padding: 0;
  }
  .el-header, .el-footer {

    line-height: 60px;
  }

  .el-main {
    margin-top: 60px;
    line-height: 160px;
  }

  .input {
    width: 70px;
  }
  .select {
    width: 100px;
  }
/* 全局样式－－当前页面所有该标签（或class）均适用 */
  label {
    margin-right: 5px;
    margin-left: 15px;
  }
/* "增加以及字段按钮"  样式 */
  .el-form-item .el-form-item {
    margin: 30px 0 10px;
  }
  /* 一级字段的样式 */
  .first-level-box {
    margin: 40px 0;
  }
  /* 二级字段的样式 */
  .second_div {
    background-color: #efefef;
    padding: 10px 0 5px 10px;
    margin: 15px 30px;
    border-radius: 5px;
  }

</style>
