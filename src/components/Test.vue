<template>
  <div id="quiz-container">
    <h2 class="test-heading" @click="isCollapsed = !isCollapsed">
      Test {{ isCollapsed ? "▲" : "▼" }}
    </h2>
    <transition name="fade">
      <div v-if="isCollapsed">
        <div v-if="questions.length > 0">
          <div v-for="(q, index) in questions" :key="index" class="question-block">
            <p class="question-text">{{ index + 1 }}. {{ q.question }}</p>
            <label v-for="(answer, i) in q.answers" :key="i">
              <input type="radio" :name="'q' + index" :value="i" v-model="userAnswers[index]" />
              {{ answer }}
            </label>
          </div>
          <button @click="submitQuiz">Natiyjeni tekseriw</button>
          <p id="result">{{ resultText }}</p>
        </div>
        <p v-else>Qatelik: Sorawlar tabilmadi!</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
  },
  data() {
    return {
      isCollapsed: false, // Boshlang‘ich holatda test yashiringan
      userAnswers: [],
      resultText: "",
    };
  },
  methods: {
    submitQuiz() {
      let score = 0;
      let totalQuestions = Math.min(this.questions.length, 5);
      this.questions.slice(0, 5).forEach((q, index) => {
        if (this.userAnswers[index] == q.correct) {
          score++;
        }
      });
      let percentage = ((score / totalQuestions) * 100).toFixed(2);
      this.resultText = `Sizin' natiyjen'iz: ${score} / ${totalQuestions} (${percentage}%)`;
    },
  },
  mounted() {
    this.userAnswers = new Array(this.questions.length).fill(null);
  },
};
</script>

<style scoped>
#quiz-container {
  width: 100%;
  padding: 20px 0;
  margin-bottom: 130px;
  /* background-color: #fff; */
}

.test-heading {
  margin: 0;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  background: #007bff;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.test-heading:hover {
  background: #0056b3;
}

.question-block {
  background-color: var(--body-bg);
  /* color: var(--element-bg); */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  text-align: start;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin: 5px 0;
  font-size: 16px;
  text-align: start;
}

/* Collapse animatsiya */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

#result {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
}

@media only screen and (max-width: 768px) {
  #quiz-container {
    width: 100%;
    margin-bottom: 160px;
  }
  .test-heading {
    font-size: 18px;
    padding: 4px;
  }
  .question-block {
    z-index: 1000;
  }
  .question-text {
    margin: 0;
    margin-bottom: 4px;
  }
  #result {
    margin-bottom: 150px;
  }
}
</style>
