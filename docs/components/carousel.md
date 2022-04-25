# 走马灯

## 基本用法

<demo-block>
:::slot example
<carousel-demo1></carousel-demo1>
:::

:::slot code
```html
<template>
  <div style="width: 400px">
    <cqc-carousel
      height="300px"
      autoplay
      :delay="3000"
      :initIndex="0"
      :duration="500"
      @change="handeChange"
    >
      <cqc-carousel-item v-for="(item, index) in count" :key="item">
        <div style="width: 100%; height: 100%" :style="{ background: item }">
          面板{{ index + 1 }}
        </div>
      </cqc-carousel-item>
    </cqc-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: ["blue", "red", "yellow"],
    };
  },
  methods: {
    handeChange(e) {
      console.log(e);
    },
  },
};
</script>

```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|height|高度|string|-|200px|
|autoplay|自动播放|boolean|true/false|true|
|delay|动画延迟时间|number|-|3000|
|duration|动画过渡时间|number|-|500|
|loop|是否衔接|boolean|true/false|true|
|initIndex|从哪个位置开始,索引值|number|-|0|
|reverse|是否倒着放|boolean|true/false|false|
|timeFn|css动画类型|string|-|ease|
|showBtn|是否显示左右按钮|boolean|true/false|true|
|showDots|是否显示指示点|boolean|true/false|true|