<template>
  <div>
    <div class="common-layout">
      <el-container direction="horizontal">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header >header</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "layout",
});
</script>

<style lang="scss" >

  .common-layout{
    color: $baseText;
    .el-header{
      background: $baseColor;
    }
    .el-aside{
      height: 100vh;
      background: $baseColor;
    }
  }
</style>