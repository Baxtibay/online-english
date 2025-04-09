<template>
  <HeaderSection />

  <main class="main-content">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <FooterSection />
</template>

<style scoped></style>

<script>
import HeaderSection from "./HeaderSection.vue"
import FooterSection from "./FooterSection.vue"
export default {
  components: {HeaderSection,FooterSection,},
}

</script>