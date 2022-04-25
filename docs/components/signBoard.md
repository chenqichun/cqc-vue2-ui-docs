# 画板

## 基本用法

<demo-block>
:::slot descript
画板的内容导出的是base64的图片
:::

:::slot example
<signBoard-demo1></signBoard-demo1>
:::

:::slot code
```html
<template>
  <cqc-sign-board
    :lineWidth="10"
    strokeStyle="red"
    @getData="handleData"
  />
</template>

<script>
export default {
  methods: {
    handleData (data)  {
      console.log(data)
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
|width|画板宽度|number|-|600|
|height|画板高度|number|-|400|
|lineWidth|线的宽度|number|-|2|
|strokeStyle|线的颜色|string|-|#000|
|lineCap|线头形状|string|butt/round/square|round|
|lineDash|线的形状,可以设置成虚线|array|-|[0,0]|
|doubleLine|是否要双线绘制|boolean|true/false|false|
|previewBtn|预览按钮|boolean|true/false|true|
|miniType|导出图片格式|string|miniType|image/png|
|canvasBg|画板的背景色,不设置则为透明底|string/booean|-|false|

## 方法

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|getData|获取画板的数据，为base64的图片||||