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
<style>

</style>