# 进度条

## 基本用法

<demo-block>
:::slot descript
<i class="cqc-icon-tishi" style="color: #E6A23C"></i>
进度条没有设置长度， 默认继承父元素的长度，所以你需要用一个标签把它包起来
（type为circle,dashboard的圆形进度条不受父元素控制）
:::

:::slot example
<div style="width: 350px">
  <cqc-progress :percentage="50" :strokeWidth="20"></cqc-progress>
</div>
:::

:::slot code
```html
<div style="width: 350px">
  <cqc-progress :percentage="50" :strokeWidth="20"></cqc-progress>
</div>
```
:::
</demo-block>

## 设置颜色, 位置, 线宽, 背景图

<demo-block>
:::slot descript
属性分别为 color, textPosition, strokeWidth,  bgColor
:::

:::slot example
<div style="width: 350px">
  <cqc-progress :percentage="50" :strokeWidth="20" color="yellow" textPosition="top"></cqc-progress>
  <br>
  <cqc-progress :percentage="60" :strokeWidth="20" color="red" textPosition="center"></cqc-progress>
  <br>
  <cqc-progress :percentage="70" :strokeWidth="14" bgColor="green" textPosition="bottom"></cqc-progress>
</div>
:::

:::slot code
```html
<div style="width: 350px">
  <cqc-progress :percentage="50" :strokeWidth="20" color="yellow" textPosition="top"></cqc-progress>
  <br>
  <cqc-progress :percentage="60" :strokeWidth="20" color="red" textPosition="center"></cqc-progress>
  <br>
  <cqc-progress :percentage="70" :strokeWidth="14" bgColor="green" textPosition="bottom"></cqc-progress>
</div>
```
:::
</demo-block>

## 自定义进度条内容

<demo-block>
:::slot descript
通过默认插槽来展示自定义内容
:::

:::slot example
<div style="width: 350px">
  <cqc-progress :percentage="60" :strokeWidth="20">
    <span>你过来呀 {{60}}%</span>
  </cqc-progress>
</div>
:::

:::slot code
```html
<div style="width: 350px">
  <cqc-progress :percentage="60" :strokeWidth="20">
    <span>你过来呀 60%</span>
  </cqc-progress>
</div>
```
:::
</demo-block>

## 进度条类型

<demo-block>
:::slot descript
通过设置type属性来实现
:::

:::slot example
<div style="width: 350px">
  <div style="display:inline-block;">
    <cqc-progress :width="120" type="dashboard" :percentage="70" :strokeWidth="6" color="blue">
      <span>70摄氏</span>
    </cqc-progress>
  </div>
  <div style="display:inline-block;margin-left: 50px;">
    <cqc-progress :width="140" type="circle" :percentage="50" :strokeWidth="6" color="red"></cqc-progress>
  </div>
</div>
:::

:::slot code
```html
<div style="width: 350px">
  <div style="display:inline-block;">
    <cqc-progress :width="120" type="dashboard" :percentage="70" :strokeWidth="6" color="blue">
      <span>70摄氏</span>
    </cqc-progress>
  </div>
  <div style="display:inline-block;margin-left: 50px;">
    <cqc-progress :width="140" type="circle" :percentage="50" :strokeWidth="6" color="red"></cqc-progress>
  </div>
</div>
```
:::
</demo-block>

## 动态改变值

<demo-block>

:::slot example
<progress-demo1></progress-demo1>
:::

:::slot code
```html
<template>
  <div style="width: 350px; position:relative">
  <cqc-progress :percentage="percentage" :strokeWidth="20"></cqc-progress>
  <cqc-button-group style="position:absolute; right: -100px; top:0">
    <cqc-button type="primary" @click="handleAdd(-10)">-</cqc-button>
    <cqc-button type="primary" @click="handleAdd(10)">+</cqc-button>
  </cqc-button-group>
  <div style="padding-top: 20px"></div>
  <cqc-progress :width="100" type="dashboard" :percentage="percentage" :strokeWidth="6" color="blue"></cqc-progress>
</div>
</template>

<script>
  export default {
    data() {
      return {
        percentage: 60
      }
    },
    methods: {
      handleAdd(count) {
        this.percentage += count
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
|type|类型|string|line/circle/dashboard|line|
|percentage|百分比|number|0-100|0|
|strokeWidth|线条宽度|number|-|6|
|width|尺寸宽度，用于circle,dashboard|number|-|50|
|color|进度条颜色|string|-|#409EFF|
|bgColor|背景颜色|string|-|#ebeef5|
|radius|是否倒角，只对type=line有效|boolean|true/false|true|
|showText|是否展示文本|boolean|true/false|true|
|textPosition|文本的位置|string|top/center/bottom|center|
|strokeLinecap|线端点形状，只对circle,dashboard有效|string|round/butt/square|round|