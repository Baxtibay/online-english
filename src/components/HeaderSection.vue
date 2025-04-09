<template>
  <header class="site-header" >
    <div class="site-header__container container">
      <routerLink class="site-header__logo logo" to="/">
        <!-- Logo svg -->
        <img src="../assets/icons/logo.svg" alt="Logo img" width="40" height="40">
        <div class="logo-text">
          <p class="logo-text-inner">Online</p>
          <p class="logo-text-inner">English</p>
        </div>
      </routerLink>
      
      <div class="site-header__right">
        <button @click="toggleDarkMode" class="dark-mode-toggle">
          <svg v-if="isDarkMode" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V1M12 23V21M4.22 4.22L2.81 2.81M21.19 21.19L19.78 19.78M1 12H3M21 12H23M4.22 19.78L2.81 21.19M19.78 4.22L21.19 2.81M16 12A4 4 0 1 1 8 12A4 4 0 0 1 16 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#black" viewBox="0 -960 960 960"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
        </button>
        
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: localStorage.getItem('darkMode') === 'true',
      
    };
  },
  mounted() {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    },
    
  }
};
</script>
<style>
/* HEADER */
.icon {
  color: var(--primary-color);
  width: 24px;
}
header {
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--body-bg);
  color: var(--body-bg);
  /* box-shadow: 0 0.1px var(--black-100); */
  z-index: 5000;
}



.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  text-decoration: none;
  color: var(--text-color);
}

.logo:hover {
  opacity: 0.8;
}

.logo-text {
  margin-left: 4px;
}

.logo-text-inner {
  display: block;
  line-height: 0;
  letter-spacing: 1px;
  font-style: italic;
  font-weight: 500;
}

.site-header__right {
  display: flex;
}

.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.menu-btn {
  background-color: transparent;
  border: none;
  color: var(--text-color);
  display: none;
}

@media only screen and (max-width: 768px) {
  .menu-btn {
    display: block;
  }
}

</style>