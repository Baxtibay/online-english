<template>
  <div class="course-page">
    <button class="saidbar-button" @click="toggleSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -960 960 960"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
    </button>
    <div class="content" :class="{ 'collapsed': isCollapsed }">
      <!-- Darslar ro‘yxati - Mobil uchun accordion qo‘shildi -->
      <div class="lessons-container" :class="{ 'open': isSidebarOpen }">
        <ul class="lessons-list" v-show="isMenuOpen">
          <li 
          class="lessons-item" 
          v-for="(video, index) in course.videos" 
          :key="index"
          @click="selectVideo(video)"
          :title="video.title" 
        >
          {{ getShortTitle(video.title) }}
        </li>
        </ul>
      </div>

      <!-- YouTube window -->
       <div class="video-container__wrapper">
         <div class="video-container">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
           <div v-if="selectedVideo && !isPaused">
            <iframe
              ref="youtubePlayer"
              width="400"
              height="500"
              :src="selectedVideo.embedUrl"
              frameborder="0"
              allowfullscreen
            ></iframe>
           </div>
         </div>
         <h2 v-if="selectedVideo" class="lesson-title">Tema: {{ selectedVideo.title }}</h2>
         <!-- Here test  -->
         <Test v-if="selectedVideo && selectedVideo.test" :questions="selectedVideo.test" />
       </div>
    </div>
  </div>
</template>


<script>
import { languages } from "@/variables/languages.js"
import Test from "../components/Test.vue"
export default {
  components: {Test},
  data() {
    return {
      selectedVideo: null,
      isLoading: false, // Progress bar boshida ko‘rinmaydi
      isMenuOpen: true, // Menyu yopiq holatda boshlanadi
      isCollapsed: false,
      isSidebarOpen: false,
      isMobile: window.innerWidth <= 768,
    };
  },
  computed: {
    course() {
      const id = Number(this.$route.params.id);
      return languages.find(lang => lang.id === id) || { title: "Not Found", videos: [] };
    }
  },
  methods: {
    toggleSidebar() {
      if (this.isMobile) {
        this.isSidebarOpen = !this.isSidebarOpen;
      } else {
        this.isCollapsed = !this.isCollapsed;
      }
    },
    getShortTitle(title) {
      return this.isCollapsed ? title.charAt(0) : title;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) this.isSidebarOpen = false;
    },
    selectVideo(video) {
      this.isLoading = true; // Show Spinner
      const videoId = this.extractYouTubeId(video.url);
      this.selectedVideo = {
        ...video,
        embedUrl: `https://www.youtube.com/embed/${videoId}?enablejsapi=1`
      };
      this.isPaused = false;
      
      this.$nextTick(() => {
        this.initPlayer();
      });
    },
    extractYouTubeId(url) {
      const regExp = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:.*v=|v\/|embed\/|user\/.*\/))([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[1] ? match[1] : null;
    },
    initPlayer() {
      if (!window.YT) {
        let tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          this.createPlayer();
        };
      } else {
        this.createPlayer();
      }
    },
    createPlayer() {
      this.player = new YT.Player(this.$refs.youtubePlayer, {
        events: {
          onReady: this.videoLoaded, // Video yuklanganini bilish
          onStateChange: this.onPlayerStateChange
        }
      });
    },
    videoLoaded() {
      this.isLoading = false; // Video yuklandi, spinnerni yashiramiz
    },
    onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PAUSED) {
        this.isPaused = true; // Pauza bo'lganda iframe ni yashiramiz
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style>

.course-page {
  /* margin-top: 70px; */
  padding: 20px 0;
}
.saidbar-button {
  margin-bottom: 4px;
  position: relative;
  padding: 6px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--element-bg);
  border: none;
  color: var(--text-color);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.06)0 0 1px 2px;
}
.saidbar-button:hover {
  opacity: 0.6;
}
.saidbar-button:hover::after {
  content: "Sabaqliqlar dizimi";
  position: absolute;
  left: 110%; /* Info to the right */
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  font-size: 14px;
}
.content {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.lessons-container {
  width: 30%;
  transition: width 0.3s ease;
  margin-bottom: 106px;
  height: 500px; /* Video-container bilan bir xil balandlik */
}

.lessons-list {
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
  height: 100%; /* Balandlikni to'liq olish */
  overflow-y: auto; /* Scroll holatga keltirish */
}

.lessons-item {
  width: 100%;
  cursor: pointer;
  padding: 10px;
  background-color: var(--body-bg);
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
}

.lessons-item:not(:last-child) {
  margin-bottom: 4px;
}

.lessons-item:hover {
  background: #959393;
}

.video-container__wrapper {
  width: 70%;
  transition: width 0.3s ease;
}
.video-container {
  box-shadow: rgba(0, 0, 0, 0.06)0 0 1px 2px;
  height: 500px;
  border-radius: 12px;
  flex-grow: 1;
  min-height: 300px;
  border: 1px solid #F1F5F9FF;
}
.content.collapsed .lessons-container {
  width: 5%;
}
.content.collapsed .video-container__wrapper {
  width: 95%;
}

/* loading progress  start */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* loading progress end */
.video-container iframe {
  width: 100%;
  height: 500px;
  margin-bottom: 8px;
}

.lesson-title {
  margin: 0;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .course-page {
    margin-top: 0;
    padding-top: 0;
  }
  .content {
    flex-direction: column;
  }

  .lesson-title {
    font-size: 18px;
  }

  .lessons-list {
    width: 100%;
    margin-bottom: 65px;
    z-index: 0;
    background-color: var(--body-bg);
  }
  .video-container__wrapper {
    width: 100%;
    height: 380px;
  }
  .lessons-container {
    position: fixed;
    top: 104px;
    left: 0;
    width: 100%;
    /* height: 100vh; */
    /* background: red; */
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
  }
  .lessons-container.open {
    transform: translateX(0);
  }
  .video-container__wrapper {
    width: 100%;
  }

  .video-container {
    height: 250px;
  }

  .video-container iframe {
    height: 250px; 
  }

  .video-container iframe {
    width: 100%;
    aspect-ratio: 16 / 9; /* 16:9 proporsiya saqlanadi */
  }
  /* FOOTER */
  .footer-list {
    padding: 8px;
    justify-content: start;
  }
  .footer-item {
    padding: 4px;
  }
}
</style>
