<template>
  <div>
    <el-container>
      <!--导航栏-->
    <el-header>
    <el-menu id="mainmenu" mode="horizontal" background-color='rgb(84, 92, 100)' text-color="white">
    <el-menu-item id="id1" index="1">模块1</el-menu-item>
        <el-submenu index="2" >
           <span slot="title">sb</span>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
    <el-menu-item index="3">模块3</el-menu-item>
    </el-menu>
    </el-header>
      <!--组件-->
      <el-main>
        <InvigilateInfoView></InvigilateInfoView>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import Regedit from "./Regedit";
    import UserInformationView from "./UserInformationView";
    import InvigilateInfoView from "./InvigilateInfoView";
    export default {
        name: "MainView",
      components: {InvigilateInfoView,Regedit}
    }
</script>

<style scoped>

</style>
