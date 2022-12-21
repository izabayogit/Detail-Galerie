<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div
      :class="{
        'ml-5 mb-5 max-w-lg  text-color absolute bottom-5 z-50 min-w-[500px] ':
          data.bannerPosition == 'bottom-left',
        'ml-5 mb-5 max-w-lg absolute bottom-5 z-50 right-12 min-w-[500px] ':
          data.bannerPosition == 'bottom-right',
        'ml-5 mb-5 max-w-lg  absolute top-5 z-50 min-w-[500px]min-w-[500px]  ':
          data.bannerPosition == 'top-left',
        'ml-5 mb-5 max-w-lg  absolute top-5 z-50 right-12 min-w-[500px]  ':
          data.bannerPosition == 'top-right',
      }"
      :style="{
        'background-color': data.detailsBackgroundColor,
        color: data.detailsElementsColor,
      }"
    >
      <div class="font-bold m-5 flex justify-between">
        <div class="text-sm leading-5 pr-80">Shanghai Wukang Road</div>
        <div>{{ slides + 1 }}/{{ data.imageDetails.length }}</div>
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
    <div
      :class="{
        'absolute bottom-10 ml-[540px] z-50':
          data.bannerPosition == 'bottom-left',
        'absolute bottom-10 right-4 z-50':
          data.bannerPosition == 'bottom-right',
        'absolute top-[127.5px] ml-[540px] z-50':
          theMore === false && data.bannerPosition === 'top-left',
        'absolute top-[200.5px] ml-[540px] z-50 ':
          theMore === true && data.bannerPosition === 'top-left',
        'absolute top-[127.5px] right-4 z-50':
          data.bannerPosition == 'top-right' && theMore === false,
        'absolute top-[200.5px] right-4 z-50':
          data.bannerPosition == 'top-right' && theMore === true,
      }"
    >
      <div @click="slideNext()">
        <i
          :style="{
            'background-color': data.detailsBackgroundColor,
            color: data.detailsElementsColor,
          }"
          class="fas fa-angle-right p-2 mb-1 font-bold hover:cursor-pointer"
        ></i>
      </div>
      <div @click="slidePrev()">
        <i
          :style="{
            'background-color': data.detailsBackgroundColor,
            color: data.detailsElementsColor,
          }"
          class="fas fa-angle-left p-2 font-bold hover:cursor-pointer"
        ></i>
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

<style></style>
