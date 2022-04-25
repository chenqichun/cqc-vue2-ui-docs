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
