<template>
  <div align="center">
    <!--显示监考信息-->
  <el-table
    @row-click='rows(row,event,column)'
    :data="tableData5"
    style="width: 50%">
    <el-table-column type="expand" >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="考试名称">
            <span>{{ props.row.examName }}</span>
          </el-form-item>
          <el-form-item label="考场">
            <span>{{ props.row.examPostion}}</span>
          </el-form-item>
          <el-form-item label="开始时间">
            <span>{{ props.row.startTime}}</span>
          </el-form-item>
          <el-form-item label="结束时间">
            <span>{{ props.row.endTime}}</span>
          </el-form-item>
          <el-form-item label="监考教师">
            <span>{{ props.row.teacherName}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="考试名称"
      prop="examName">
    </el-table-column>
    <el-table-column
      label="监考教师"
      prop="teacherName">
    </el-table-column>
    <el-table-column
      label="开始时间"
      prop="startTime">
    </el-table-column>
    <el-table-column
      label="结束时间"
      prop="endTime"
    >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
    export default {
        name: "InvigilateInfoView",
      data() {
        return {
          tableData5: [{
            examName: '12987122',
            teacherName: '好滋好味鸡蛋仔',
            startTime: '江浙小吃、小吃零食',
            endTime: '荷兰优质淡奶，奶香浓而不腻',
            examPostion: '上海市普陀区真北路',
          },{
            examName: '12987122',
            teacherName: '好滋好味鸡蛋仔',
            startTime: '江浙小吃、小吃零食',
            endTime: '荷兰优质淡奶，奶香浓而不腻',
            examPostion: '上海市普陀区真北路',
          },{
            examName: '12987122',
            teacherName: '好滋好味鸡蛋仔',
            startTime: '江浙小吃、小吃零食',
            endTime: '荷兰优质淡奶，奶香浓而不腻',
            examPostion: '上海市普陀区真北路',
          },{
            examName: '12987122',
            teacherName: '好滋好味鸡蛋仔',
            startTime: '江浙小吃、小吃零食',
            endTime: '荷兰优质淡奶，奶香浓而不腻',
            examPostion: '上海市普陀区真北路',
          },{
            examName: '12987122',
            teacherName: '好滋好味鸡蛋仔',
            startTime: '江浙小吃、小吃零食',
            endTime: '荷兰优质淡奶，奶香浓而不腻',
            examPostion: '上海市普陀区真北路',
          }]
        }
      },
      methods : {
          //单元行点击方法
        rows(row,event,column){
          ;
        }
      }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
