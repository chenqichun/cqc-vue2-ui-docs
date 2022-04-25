# 拖拽排序

## 基本用法

<demo-block>
:::slot descript
拖拽列表需要的数据是对象数组，如[{...}, {...}], 不能是基本类型数组,如[1,2,3,4]
<div>
  如果数据不满足要求，请把数据构建成对象数组
</div>
<div>
  每一条数据，都通过作用域插槽返回，对应 row
</div>
:::
:::slot example
<drag-demo></drag-demo>
:::

:::slot code
```html
<cqc-drag-list :data="listData" @change="handleChange">
  <template slot-scope="{row}">
    <div
    :style="{
      padding:'6px',
      border:'1px solid #ddd',
      marginBottom:'10px',
      cursor: 'move'
    }">
    {{ row.name }}
    </div>
  </template>
</cqc-drag-list>
<script>
  export default {
    data() {
      return {
        listData:[
        { name: '张三', age: 18 },
        { name: '李四', age: 30 },
        { name: '王五', age: 45 },
        { name: '老六', age: 13 }
      ],
      }
    },
    methods: {
      handleChange(data) {
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
|data|数组数据|array|-|-|

## 方法

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|change|回调,返回排序后的数据|arrary|||