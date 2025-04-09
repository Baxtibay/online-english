<template>
  <div v-if="isLoading" class="loading-bar_box">
    <div class="loading-bar__content">
      <span class="loading-bar_text">Loading...</span>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean, // Yuklanish holati
  },
  data() {
    return {
      progress: 10,
    };
  },
  watch: {
    isLoading(newValue) {
      if (newValue) {
        this.startProgress();
      } else {
        this.progress = 20;
      }
    },
  },
  methods: {
    startProgress() {
      this.progress = 0;
      let interval = setInterval(() => {
        if (this.progress >= 100) {
          clearInterval(interval);
        } else {
          this.progress += 10;
        }
      }, 300);
    },
  },
};
</script>

<style scoped>
.loading-bar_box {
	margin-top: 70px;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.loading-bar__content {
  text-align: center;
}

.loading-bar_text {
  font-weight: 500;
  color: #333;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 20px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
  background-color: #ddd;
}

.percentage {
  height: 100%;
  border-radius: 10px;
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>
