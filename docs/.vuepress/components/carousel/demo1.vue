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
