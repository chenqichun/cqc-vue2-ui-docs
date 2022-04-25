<template>
  <div>
    <div style="margin-bottom: 10px; color: #E6A23C">拖动它们进行排序</div>
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
  </div>
</template>

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

<style>

</style>