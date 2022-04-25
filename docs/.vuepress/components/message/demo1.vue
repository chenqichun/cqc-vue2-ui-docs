<template>
  <div>
    <cqc-button @click="handleClick">点击弹出消息</cqc-button>
    <cqc-button @click="handleSuccess">成功</cqc-button>
    <cqc-button @click="handleError">错误</cqc-button>
    <cqc-button @click="handleWarn">警告</cqc-button>
    <cqc-button @click="handleInfo">信息</cqc-button>
  </div>
</template>

<script>
import { Message } from 'cqc-vue2-ui'
export default {
  methods: {
    handleClick() {
        Message('哈哈哈', { type: 'success' })
    },
    handleSuccess() {
      Message.success('成功消息')
    },
    handleError() {
      Message.error('错误消息')
    },
    handleWarn() {
      Message.warn('警告消息')
    },
    handleInfo() {
      Message.info('普通消息', { duration: 6000 })
    }
  }
}
</script>

<style>

</style>