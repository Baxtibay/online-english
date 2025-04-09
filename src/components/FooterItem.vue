<template>
  <li 
    class="footer-item" 
    :class="{ active: isActive }" 
    @click="navigate"
  >
    <img :src="imgSrc" :alt="imgAlt" class="footer-img" />
  </li>
</template>

<script>
export default {
  props: {
    imgSrc: { type: String, required: true },
    imgAlt: { type: String, default: "Footer image" },
    route: { type: String, required: true }
  },
  computed: {
    isActive() {
      return this.$route.path === this.route;
    }
  },
  methods: {
    navigate() {
      this.$router.push(this.route);
    }
  }
};
</script>

<style>
.footer-item {
  display: flex;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 9px;
  background-color: var(--element-bg);
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.footer-item:not(:last-child) {
  margin-right: 8px;
}

.footer-item:hover {
  background-color: #f0f0f0;
}

.footer-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

/* Active class */
.footer-item.active {
  background-color: #2E7DD7;
  transform: scale(1.1); 
}

@media only screen and (max-width: 768px) {
  .footer-item {
    padding: 8px;
    border-radius: 4px;
  }

  .footer-img  {
    width: 30px;
    height: 30px;
  }
}
</style>
