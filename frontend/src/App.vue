

<template>
  <!-- <div style="font-size: 24px;font-weight: bold;">Hello GoBtc</div> -->
  <el-row class="tac" style="border-top: 1px solid #ececec">
    <el-col :span="4" style="border-right: 1px solid var(--el-menu-border-color)">
      <el-menu default-active="1" :default-openeds="DefaultOpens" class="el-menu-vertical-demo" @open="handleOpen"
        @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Orange />
            </el-icon>
            <span>交易</span>
          </template>
        
          <el-menu-item-group title="行情和交易">
            <router-link to="/">
              <el-menu-item index="1-1">主页</el-menu-item>
              </router-link>
            <router-link to="/Currency">
            <el-menu-item index="1-2">现货</el-menu-item>
          </router-link>
          <router-link to="/Futures">
            <el-menu-item index="1-3">合约</el-menu-item>
          </router-link>
          </el-menu-item-group>
        </el-sub-menu>
          <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Orange />
            </el-icon>
            <span>机器人</span>
          </template>
            <router-link to="/">
              <el-menu-item index="2-1">机器人</el-menu-item>
            </router-link>
</el-sub-menu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="MainBox">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  ForkSpoon,
  Menu as IconMenu,
  Orange,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const DefaultOpens = ["1", "2"]
</script>

<style>

</style>
