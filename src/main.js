import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')


const toggleMenuBtn = document.querySelector('.site-header__sitenav-toggler'),
  header = document.querySelector('.site-header'),
  navbarCloseButton = document.querySelector('.close-sitenav-button')


if(toggleMenuBtn) {
  toggleMenuBtn.addEventListener('click', () => {
    header.classList.toggle('site-header--open')
  })
}

if(navbarCloseButton) {
  navbarCloseButton.addEventListener('click', () => {
    header.classList.remove('site-header--open')
  })
}
