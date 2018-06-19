<template>
  <!--监考信息修改-->
  <div >
    <el-row type="flex" justify="center">
      <el-col span="8" >
        <!--监考信息修改表单-->
        <el-form :model="InvigilateForm" :rules="rules" label-position="left" ref="InvigilateForm" label-width="100px" >
          <!--考试名称-->
          <el-form-item label="考试名称" prop="name">
            <el-input v-model="InvigilateForm.name" placeholder="请输入监考名称"></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item label="监考地点" prop="position">
            <el-input v-model="InvigilateForm.position"  placeholder="请输入监考地点"></el-input>
          </el-form-item>
          <!--确认密码-->
          <el-form-item label="监考教师" prop="teacherName" >
            <el-select v-model="InvigilateForm.teacherId" placeholder="请选择监考教师">
              <el-option
                v-for="item in teacherList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!--手机号-->
          <el-form-item label="日期时间" prop="examTime">
            <el-date-picker
              v-model="InvigilateForm.examTime"
              type="datetimerange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              picker-options="{
                start:'08:00',
                step:'00:30'
                end :'20:00'
              }"
              ></el-date-picker>
          </el-form-item>
          <!--按钮-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('InvigilateForm')">立即修改</el-button>
            <el-button @click="resetForm('InvigilateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <!--just for test-->
    <!--<span>{{InvigilateForm.name}}</span>-->
    <!--<span>{{InvigilateForm.position}}</span>-->
    <!--<span>{{InvigilateForm.teacherId}}</span>-->
    <!--<span>{{InvigilateForm.examTime}}</span>-->
  </div>
</template>

<script>
    export default {
        name: "InvigulateInfoRectify",
       data(){
          return {
            teacherList:[
              {value:'exp1',label:'老罗'},
              {value:'exp2',label:'老苏'},
              {value:'exp3',label:'邱老板'}
            ],
            InvigilateForm:{
              name:'',
              position:'',
              teacherId:'',
              examTime:''
            }
          }
       },
       methods:{
         submitForm(formName){
           //提交表单方法
         },
         resetForm(formName) {
           //重置表单
           this.$refs[formName].resetFields();
         }
       }
    }
</script>

<style scoped>

</style>
