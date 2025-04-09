<template>
  <div class="loading-bar_box">
    <div class="loading-bar__content">
      <span class="loading-bar_text">Project in progress... {{percentage}}%</span>
      <div class="loading-bar">
        <div class="percentage" :style="{'width': percentage + '%'}"></div>
      </div>
      <HomeButton />
    </div>
  </div>
</template>
<script>
import HomeButton from '@/ui-components/HomeButton.vue'
export default {
  data() {
    return {
      percentage: 95
    }
  },
  components: {
    HomeButton,
  }
}
</script>
<style scoped>
.loading-bar_box {
  height: 80vh;
  position: relative;
}
.loading-bar__content {
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
}
.loading-bar_text {
  font-weight: 500;
  color: var(--black-80);
}
.loading-bar {
  position: relative;
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0,0,0, 0.3 );
  background-color: #DDDDDD;
}
.percentage {
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  height: 100%;
  border-radius: 15px;
  background-color: #a5df41;
  background-size: 30px 30px;
  background-image: linear-gradient(
    135deg,
    rgba(225,255,255,0.5) 25%,
     transparent 25%, transparent 50%,
     rgba(225,255,255,0.5) 50%,
     rgba(225,255,255,0.5) 75%,
     transparent 75%,
     transparent
    );
  animation: animate-stripes 3s linear infinite;
}

@keyframes animate-stripes {
  0% {background-position: 0 0;}
  100% {background-position: 60px 0;}
}

@media only  screen and (max-width: 768px) {
  .loading-bar {
    width: 300px;
  }
}
</style>