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