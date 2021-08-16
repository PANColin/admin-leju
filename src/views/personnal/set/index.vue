<template>
  <div>
    <div class="wrapper" :class="isLowTab ? 'active' : ''">
      <el-tabs stretch tab-position="left" @tab-click="handleClick">
        <el-tab-pane label="安全设置">
          <h2>安全设置</h2>
          <div>
            <div class="row1 item">
              <div class="left">
                <p>账号密码</p>
                <p class="btm">当前密码强度: 强</p>
              </div>
              <div class="right"><el-button type="text">编辑</el-button></div>
            </div>

            <div class="row2 item">
              <div class="left">
                <p>密保手机</p>
                <p class="btm">已绑定手机：185****0152</p>
              </div>
              <div class="right"><el-button type="text">编辑</el-button></div>
            </div>

            <div class="row3 item">
              <div class="left">
                <p>密保问题</p>
                <p class="btm">未设置密保问题，密保问题可有效保护账户安全</p>
              </div>
              <div class="right"><el-button type="text">编辑</el-button></div>
            </div>

            <div class="row4 item">
              <div class="left">
                <p>备用邮箱</p>
                <p class="btm">已绑定邮箱：245***381@qq.com</p>
              </div>
              <div class="right"><el-button type="text">编辑</el-button></div>
            </div>

            <div class="row5 item">
              <div class="left">
                <p>MFA 设备</p>
                <p class="btm">未绑定 MFA 设备，绑定后，可以进行二次确认</p>
              </div>
              <div class="right"><el-button type="text">编辑</el-button></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新消息通知">
          <h2>新消息通知</h2>
          <div class="row1 item">
            <div class="left">
              <p>账号密码</p>
              <p class="btm">其他用户的消息将以站内信的形式通知</p>
            </div>
            <div class="right">
              <el-switch
                v-model="accountValue"
                active-color="#13ce66"
                inactive-color="#999"
              >
              </el-switch>
            </div>
          </div>

          <div class="row2 item">
            <div class="left">
              <p>系统消息</p>
              <p class="btm">系统消息将以站内信的形式通知</p>
            </div>
            <div class="right">
              <el-switch
                v-model="messageValue"
                active-color="#13ce66"
                inactive-color="#999"
              >
              </el-switch>
            </div>
          </div>

          <div class="row3 item">
            <div class="left">
              <p>待办任务</p>
              <p class="btm">待办任务将以站内信的形式通知</p>
            </div>
            <div class="right">
              <el-switch
                v-model="taskValue"
                active-color="#13ce66"
                inactive-color="#999"
              >
              </el-switch>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <copyright></copyright>
  </div>
</template>

<script>
// import copyright from '@/components/copyright/index.vue'

export default {
  name: 'Set',
  components: { },
  data() {
    return {
      //是否是内容较少的tabs栏
      isLowTab: false,
      accountValue: false,
      messageValue: false,
      taskValue: false
    }
  },
  methods: {
    // tabs点击事件
    handleClick(tab, event) {
      // console.log(tab, event)
      // console.log(Boolean(Number(tab.index)),tab.index);
      this.isLowTab = Boolean(Number(tab.index))
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .el-tabs__nav-scroll {
    height: fit-content !important;
  }
  &.active {
    height: 400px;
  }
  height: 550px;
  max-height: 800px;
  background-color: #fff;
  margin: 20px;
  padding: 40px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    .btm {
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
