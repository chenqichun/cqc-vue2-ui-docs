# 图片预览

## 基本用法

<demo-block>

:::slot example
<previewImg-demo1></previewImg-demo1>
:::

:::slot code
```html
<template>
  <div>
    <cqc-button type="primary" @click="handleOpen">打开图片预览</cqc-button>
  </div>
</template>

<script>
import { PreviewImg } from 'cqc-vue2-ui'
export default {
  methods: {
    handleOpen() {
      PreviewImg([
        'https://img1.baidu.com/it/u=1195663233,4277983440&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=500',
        'https://img2.baidu.com/it/u=3791409505,2767159896&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        'https://img1.baidu.com/it/u=2026911532,1711476140&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        'https://img1.baidu.com/it/u=3403402246,3586529100&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
      ], { index: 0 })
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
|imgArr|图片数组|array|-|-|
|index|从那张开始，索引|number|-|-|
|width|图片的宽|number|-|600|
|height|图片的高|number|-|400|
|modelClose|点击遮罩层关闭|boolean|true/false|true|
|closeCb|关闭回调|function|-|-|