# 消息提示

## 基本用法

<demo-block>
:::slot descript
<p>
  Message(msg, opts):  msg是内容， opts是配置
</p>
<h4> 两种写法:</h4>
<p>Message.success(msg)</p>
<p>Message(msg, { type: 'success' })</p>
:::

:::slot example
<message-demo1></message-demo1>
:::

:::slot code
```html
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
```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|type|类型|string|success/error/warn/info|info|
|msg|内容|string|-||