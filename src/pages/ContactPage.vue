<template>
  <section class="contact">
    <div class="contact-about-contact-form-wrapper">
      <div class="contact__info">
        <ul class="info__list">
          <li class="info__item">
            <span class="icon icon-location">
              <i class="fa-solid fa-location-dot fa-lg location-color"></i>
            </span>
            <div class="info__item-inner">
              <h3 class="info__heading">Manzilimiz:</h3>
              <div class="info__item-about">
                <dl class="info__definition-list">
                  <dt class="info__definition-title">Rayon:</dt>
                  <dd class="info__definition-description">Shimbay</dd>
                </dl>
                <dl class="info__definition-list">
                  <dt class="info__definition-title">Ko'she:</dt>
                  <dd class="info__definition-description">T.Erniyazov 1</dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="info__item">
            <span class="icon icon-phone">
              <i class="fa-solid fa-phone fa-ss telefon-color"></i>
            </span>
            <div class="info__item-inner">
              <h3 class="info__heading">Tel nomer:</h3>
              <p class="info__text">+998(90) 574 76 16</p>
            </div>
          </li>
          <li class="info__item">
            <span class="icon icon-email">
              <i class="fa-solid fa-at fa-ss email-color"></i>
            </span>
            <div class="info__item-inner">
              <h3 class="info__heading">Email</h3>
              <p class="info__text">baxtibaybekniyazov@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="contact__form-wrapper">
        <ContactMeForm />
      </div>
    </div>
  </section>
</template>
<script>
import ContactMeForm from '../components/ContactMeForm.vue'
export default {
  components: {
    ContactMeForm,
  },

}
</script>
<style scoped>
.contact {
  margin-top: 85px;
}
.contact__content {
  margin-bottom: 100px;
  padding-top: 40px;
  text-align: center;
}


.contact-about-contact-form-wrapper {
  display: flex;
  justify-content: space-between;
}

.info__list {
  margin: 0;
  margin-right: 15px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
}
.info__item {
  display: flex;
}

.info__item:not(:last-child) {
  margin-bottom: 20px;
}

.info__item-inner {
  display: flex;
  flex-direction: column;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 20px;
  margin-right: 10px;
  background-color:var(--blue-color);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.location-color {
  color: red;
}

.telefon-color {
  color: var(--white-color);
}

.email-color {
  color: var(--white-color);
}

.info__heading {
  color: var(--text-color);
  margin: 0;
}

.info__definition-list {
  display: flex;
  margin: 0;
}

.info__definition-title {
  color: var(--text-color);
  font-weight: 600;
  margin-right: 10px;
  font-size: 14px;
}

.info__definition-description {
  color: var(--text-color);
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.4px;
}

.info__text {
  margin: 0;
  color: var(--text-color);
  font-weight: 500;
}


/* CONTACT-FORM */
.contact__form-wrapper {
  margin-bottom: 30px;
}

@media only screen and (max-width: 1100px) {
  .contact__content {
    margin-bottom: 62px;
    padding-top: 30px;
  }
}

@media only screen and (max-width: 1000px) {
  .contact__content {
    margin-bottom: 40px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
}

@media only screen and (max-width: 768px) {
  .contact-about-contact-form-wrapper {
    flex-direction: column;
  }
}

@media only screen and (max-width: 650px) {
  .contact__info {
    margin-bottom: 40px;
  }

  .contact__text {
    font-size: 14px;
  }
}

@media only screen and (max-width: 500px) {
  .contact__form {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 450px) {
  .info__heading {
    font-size: 14px;
  }

  .info__text {
    font-size: 13px;
  }

  .info__definition-title,
  .info__definition-description {
    font-size: 13px;
  }

  .contact__heading {
    font-size: 15px;
    margin-bottom: 6px;
  }
}
</style>