<template>
  <routerLink  class="home-btn" to="/">Bas menyug'a qaytiw</routerLink>
</template>
<script>
export default {
}
</script>
<style>
.home-btn {
  padding: 8px 15px;
  display: inline-block;
  color: var(--black-50);
  border-radius: 40px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  border: 1px solid var(--primary-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
.home-btn:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}
.home-btn:active {
  opacity: 0.6;
}
</style>