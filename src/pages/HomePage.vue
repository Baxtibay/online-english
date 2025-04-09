<script>
export default {
  Components: {
  }
}
</script>

<template>
  <main>
    <div class="main__content">
      <img class="content__img" src="../assets/projects-img/books-img/english-book.png" alt="Book img" width="300" height="400">
      <div class="content__about">
        <h5 class="content__heading">Inglis tili sabaqlarin alip bariw ushin web qosimsha.</h5>
        <p class="content__text">Inglis tilin zamanago'y texnologiyalar ja'rdeminde an'sat uyrenin'</p>
      </div>
    </div>

  </main>

</template>
../components/Portfolio.vue

<style>
main {
  margin-top: 70px;
}

.main__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content__img {
  margin-right: 20px;
}
.content__about {
  max-width: 400px;
}
.content__heading {
  margin: 0;
  font-size: 23px;
  font-weight: 600;
}
.content__text {
  margin: 0;
}

@media only screen and (max-width: 768px) {
  .main__content {
    flex-direction: column;
  }
  .content__img {
    width: 250px;
    height: auto;
    margin-right: 0;
    margin-bottom: 4px;
  }
}
</style>