<template>
  <div class="not-found">
    <picture class="not-found__picture">
      <img class="not-found__img" src="@/assets/icons/404-icon.svg" alt="" width="420" height="344" />
    </picture>
    <h4 class="not-found__heading">404!</h4>
    <p class="not-found__text">
      <strong class="not-found__strong-text">Opps!... </strong>Qandaydur qatelik ketti
    </p>
    <HomeButton />
  </div>
</template>
<script>
import HomeButton from '@/ui-components/HomeButton.vue'
export default {
  components: {
    HomeButton
  }
}
</script>
<style scoped>
.not-found {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 50px;
  /* margin-bottom: 30px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.not-found__picture {
  margin-bottom: 32px;
}

.not-found__heading {
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 64px;
  color: var(--black-80);
}

.not-found__text {
  margin-top: 0;
  margin-bottom: 28px;
  letter-spacing: 0.32px;
  font-size: 32px;
  color: var(--black-80);
}

.not-found__strong-text {
  font-weight: 600;
  font-size: 48px;
}

@media only screen and (max-width: 768px) {
  .not-found__img {
    width: 320px;
    height: 262px;
  }
  .not-found__heading {
    font-weight: 500;
    font-size: 58px;
    margin-bottom: 8px;
  }
  .not-found__text {
    font-size: 26px;
  }
  .not-found__strong-text {
    font-size: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .not-found__heading {
    font-size: 48px;
  }
  .not-found__text {
    font-size: 18px;
  }
  .not-found__strong-text {
    font-size: 30px;
  }
}

@media only screen and (max-width: 500px) {
  .not-found__heading {
    font-size: 38px;
    font-weight: 600;
  }
  .not-found__text {
    font-size: 16px;
  }
  .not-found__strong-text {
    font-size: 22px;
  }
}
</style>