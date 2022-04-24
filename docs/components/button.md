# 按钮

## 基本用法
<demo-block>
:::slot example
<cqc-button type="default">默认</cqc-button>
<cqc-button type="primary">主要按钮</cqc-button>
<cqc-button type="danger">危险</cqc-button>
<cqc-button type="warning">警告</cqc-button>
<cqc-button type="success">成功</cqc-button>
<cqc-button type="info">信息</cqc-button>
:::

:::slot code
```html
<cqc-button type="default">默认</cqc-button>
<cqc-button type="primary">主要按钮</cqc-button>
<cqc-button type="danger">危险</cqc-button>
<cqc-button type="warning">警告</cqc-button>
<cqc-button type="success">成功</cqc-button>
<cqc-button type="info">信息</cqc-button>

<script>
  import { CqcButton } from 'cqc-vue2-ui'
  components: {
    CqcButton
  }
</script>
```
:::
</demo-block>

## 添加图标
<demo-block>
:::slot example
<cqc-button type="primary" :loading="true">主要按钮</cqc-button>
<cqc-button type="danger" icon="cqc-icon-tishi">危险</cqc-button>
<cqc-button type="success" icon="cqc-icon-dagou1" position="right">成功</cqc-button>
:::
:::slot code
```html
<cqc-button type="primary" :loading="true">主要按钮</cqc-button>
<cqc-button type="danger" icon="cqc-icon-tishi">危险</cqc-button>
<cqc-button type="success" icon="cqc-icon-dagou1" position="right">成功</cqc-button>
```
:::
</demo-block>

## 使用阴影
<demo-block>
:::slot example
<cqc-button type="primary" :shadow="true">主要按钮</cqc-button>
<cqc-button type="danger" shadow="3px 3px 15px red">危险</cqc-button>
:::
:::slot code
```html
<cqc-button type="primary" :shadow="true">主要按钮</cqc-button>
<cqc-button type="danger" shadow="3px 3px 15px red">危险</cqc-button>
```
:::
</demo-block>

## 按钮组
<demo-block>
:::slot example
<cqc-button-group>
<cqc-button type="primary" icon="cqc-icon-left">上一页</cqc-button>
<cqc-button type="primary">1</cqc-button>
<cqc-button type="primary" icon="cqc-icon-right" position="right">下一页</cqc-button>
</cqc-button-group>
:::
:::slot code
```html
<cqc-button-group>
<cqc-button type="primary" icon="cqc-icon-left">上一页</cqc-button>
<cqc-button type="primary">1</cqc-button>
<cqc-button type="primary" icon="cqc-icon-right" position="right">下一页</cqc-button>
</cqc-button-group>
```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|type|类型|string|primary/danger/success/warning/info/default|default|
|icon|图标|string|-|-|
|loading|loading状态|boolean|true/false|false|
|disabled|禁止点击|boolean|true/false|false|
|position|图标位置|string|left/right|left|
|shadow|是否展示阴影,可接收具体的阴影值|boolean/string|boolean/string|false|
|iconColor|图标颜色|string|-|-|