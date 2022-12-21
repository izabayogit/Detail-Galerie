<template>
  <div class="">
    <MiddleComponent :galleryData="detailGalleryData" />
  </div>
</template>

<script>
import MiddleComponent from "./MiddleComponent.vue";
import detailGalleryData from "../detailGalleryData";
// import DescriptionComponent from "./DescriptionComponent.vue";
export default {
  name: "App",
  data() {
    return {
      detailGalleryData,
    };
  },
  components: {
    // HeaderComponent,
    // DescriptionComponent,
    MiddleComponent,
  },
};
</script>
