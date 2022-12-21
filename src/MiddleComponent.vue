<template>
  <div>
    <div class="desktop" v-if="screenWidth > 896">
      <div class="slider_progress-bar absolute top-[0px] z-50">
        <div class="slider_progress-bar_bar"></div>
      </div>

      <swiper
        :scrollbar="{
          hide: true,
        }"
        :modules="modules"
        class="h-fit"
        @swiper="onSwiper"
        s
      >
        <swiper-slide
          v-for="image in galleryData.imageDetails"
          :key="image"
          :pagination="{
            type: 'fraction',
          }"
        >
          <img
            :src="image.desktopImage"
            class="max-h-screen min-w-full"
            v-if="screenWidth > 896"
          />
          <img
            :src="image.tabletImage"
            class="max-h-screen min-w-full"
            v-if="screenWidth > 600 && screenWidth < 896"
          />
        </swiper-slide>
      </swiper>
      <DescriptionComponent
        :theMore="more"
        :lessInfo="closeInformation"
        :moreInfo="openInformation"
        :currentSlide="swiper"
        :slides="slide"
        :isMore="more"
        :data="galleryData"
        :slideNext="nextSlide"
        :slidePrev="prevSlide"
        :slides:="slide"
      />
    </div>

    <div class="tablet" v-if="screenWidth > 600 && screenWidth < 896">
      <div class="slider_progress-bar absolute top-[0px] z-50">
        <div class="slider_progress-bar_bar"></div>
      </div>
      <swiper
        :scrollbar="{
          hide: true,
        }"
        :modules="modules"
        class="h-fit"
      >
        <swiper-slide v-for="image in galleryData.imageDetails" :key="image">
          <img :src="image.tabletImage" class="max-h-screen min-w-full" />
        </swiper-slide>
      </swiper>
      <DescriptionComponent
        :theMore="more"
        :lessInfo="closeInformation"
        :moreInfo="openInformation"
        :slides="slide"
        :isMore="more"
        :data="galleryData"
        :slideNext="nextSlide"
        :slidePrev="prevSlide"
        :slides:="slide"
      />
    </div>
    <div class="mobile" v-if="screenWidth < 600">
      <div class="slider_progress-bar absolute top-[0px] z-50">
        <div class="slider_progress-bar_bar"></div>
      </div>
      <swiper
        :pagination="{
          type: 'bullets',
        }"
        :scrollbar="{
          hide: true,
        }"
        :modules="modules"
        class="h-fit"
        @swiper="onSwiper"
        s
      >
        <swiper-slide
          v-for="image in galleryData.imageDetails"
          :key="image"
          :pagination="{
            type: 'fraction',
          }"
        >
          <img :src="image.mobileImage" class="max-h-screen min-w-full" />
        </swiper-slide>
      </swiper>
      <MobileDescription
        :theMore="more"
        :lessInfo="closeInformation"
        :moreInfo="openInformation"
        :currentSlide="swiper"
        :slides="slide"
        :isMore="more"
        :data="galleryData"
        :slideNext="nextSlide"
        :slidePrev="prevSlide"
        :slides:="slide"
      />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Scrollbar } from "swiper";
import DescriptionComponent from "./DescriptionComponent.vue";
import MobileDescription from "./MobileDescription.vue";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);
export default {
  data() {
    return {
      more: false,
      index: null,
      slide: 0,
      screenWidth: 0,
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  props: {
    galleryData: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
    DescriptionComponent,
    MobileDescription,
  },
  setup() {
    return {
      modules: [Pagination, Scrollbar],
    };
  },
  methods: {
    async startProgress(data) {
      const progressBarElement = document.querySelector(
        ".slider_progress-bar_bar"
      );
      progressBarElement.classList.remove("slider_progress-bar_bar--moving");
      progressBarElement.style.setProperty("transition", "none");
      setTimeout(function async() {
        progressBarElement.classList.add("slider_progress-bar_bar--moving");
        progressBarElement.style.setProperty("transition", data + "ms");
      }, 100);
    },
    openInformation() {
      this.more = true;
    },
    closeInformation() {
      this.more = false;
    },

    nextSlide() {
      const swiper = document.querySelector(".swiper").swiper;

      swiper.slideNext(this.galleryData.singleCardAutoplayTime);

      if (this.slide + 1 < this.galleryData.imageDetails.length) {
        this.slide++;
        this.startProgress(this.galleryData.singleCardAutoplayTime);
      }
    },
    prevSlide() {
      const swiper = document.querySelector(".swiper").swiper;
      swiper.slidePrev(this.galleryData.singleCardAutoplayTime);

      if (this.slide > 0) {
        this.slide--;
        this.startProgress(this.galleryData.singleCardAutoplayTime);
      }
    },
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      console.log(this.screenWidth, ",,,,,,,,,,,,,,,,,,");
    },
  },
};
</script>

<style>
.swiper-pagination-progressbar-fill {
  background-color: black !important;
}
.slider_slide {
  width: 100%;
  max-width: 900px;
  display: none;
}
.slider_progress-bar {
  width: 100%;
  max-width: 900px;
}

.slider_slide {
  width: 100%;
  display: none;
}

/* ... */

.slider_progress-bar {
  width: 100%;
}
.slider_progress-bar {
  width: 100%;
  height: 5px;
  /* background-color: #000; */
}
.slider_progress-bar {
  width: 100%;
  height: 7px;
  background-color: non;
}

.slider_progress-bar_bar {
  width: 0;
  height: 100%;
  background-color: #000;
}
.slider_progress-bar_bar--moving {
  transition: none;
  width: 202.3%;
}
.tablet {
  display: none;
}
.mobile {
  display: none;
}
@media only screen and (max-width: 896px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: none;
  }
  .tablet {
    display: block !important;
  }
}
@media only screen and (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .tablet {
    display: none !important;
  }
}
</style>
