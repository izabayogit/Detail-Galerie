<template>
  <div>
    <div class="bg-bannerBg text-color">
      <div class="ml-5 font-bold">
        {{ slides + 1 }}/{{ data.imageDetails.length }}
      </div>
      <div class="font-bold m-5">
        <p class="text-sm w-20 pr-80 inline">Shanghai Wukang Road</p>
      </div>
      <div class="ml-5 mr-5 border-b-[1px] border-borderColor">
        <p class="font-normal text-sm leading-5 mb-2.5">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div class="ml-5 mr-5">
        <div
          :class="{
            'font-bold flex justify-between mt-5 mb-5': theMore,
            ' hidden': !theMore,
          }"
        >
          <div class="font-bold">Less information</div>
          <div class="font-bold w-3.5 hover:cursor-pointer" @click="lessInfo">
            _
          </div>
        </div>
        <div
          :class="{
            'font-bold flex justify-between mt-5 mb-5': !theMore,
            ' hidden': theMore,
          }"
        >
          <div class="font-bold">More information</div>
          <div class="font-bold w-3.5 hover:cursor-pointer" @click="moreInfo">
            +
          </div>
        </div>
        <div :class="{ 'hidden ': !theMore }">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipisca consect
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theMore: Boolean,
    slides: Number,
    moreInfo: { type: Function },
    lessInfo: { type: Function },

    data: Object,
    slideNext: { type: Function },
    slidePrev: { type: Function },
  },
  data() {
    return {
      isMore: this.theMore,
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      this.index = swiper;
    };
    return {
      onSwiper,
    };
  },
};
</script>

<style>
@media (min-width: 420px) {
  .swiper-pagination-bullet-active {
    background: black !important;
  }
}
@media (min-width: 50px) {
  .swiper-pagination-bullet-active {
    background: black !important;
  }
}
</style>
