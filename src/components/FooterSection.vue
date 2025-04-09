<template>
  <footer class="site-footer">
    <div class="container">
      <FooterList />
    </div>
  </footer>
</template>
<script>
import FooterList from './FooterList.vue'
export default {
  components: {
    FooterList
  }
}
</script>

<style>
.site-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-bottom: 15px;
  backdrop-filter: blur(10px); /* 10px blur */
}


</style>