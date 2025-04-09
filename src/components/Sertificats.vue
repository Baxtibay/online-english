<template>
  <div class="sertificat__wrapper">
    <h2 class="sertificat__heading">Sertifikat</h2>
    <img class="sertificat__img" src="../assets/english-sertificat.jpg" width="1200" height="700" />
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sertificat__wrapper {
  padding-top: 20px;
  padding-bottom: 40px;
}
.sertificat__heading {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 48px;
  color: var(--black-100);
}
.sertificat__img {
  width: 60%;
}

@media only screen and (max-width: 950px) {
  .sertificat__heading {
    font-size: 42px;
  }
}
@media only screen and (max-width: 768px) {
  .sertificat__heading {
    font-size: 32px;
  }
  .sertificat__img {
    width: 80%;
  }
}
@media only screen and (max-width: 650px) {
  .sertificat__heading {
    font-size: 30px;
  }
  .sertificat__img {
    width: 100%;
  }
}
@media only screen and (max-width: 450px) {
  .sertificat__heading {
    font-size: 24px;
  }
}
</style>