<template>
  <carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    @slide-end="handleSlideEnd"
    ref="cardCarousel"
  >
    <slide v-for="card in cards" :key="card.id">
      <CardItem :card="card" />
    </slide>

    <template #addons>
      <pagination class="gt-sm" />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useAccountStore } from "src/stores/AccountStore";
import CardItem from "./CardItem.vue";
import { useQuasar } from "quasar";

import { ref, onMounted, onUnmounted } from "vue";

const $q = useQuasar();

const cardCarousel = ref(null);
const props = defineProps(["cards"]);
let account = useAccountStore();

onMounted(() => {
  //account.cardCarousel = cardCarousel;
  window.addEventListener("resize", handleWindowResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleWindowResize);
});

let handleWindowResize = () => {
  cardCarousel.value.updateSlideWidth();
};

let settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

let breakpoints = {
  300: {
    itemsToShow: 1.05,
    snapAlign: "center",
  },

  800: {
    itemsToShow: 1,
    snapAlign: "start",
  },
};
function handleSlideEnd(data) {
  account.currentCard = account.cards[data.currentSlideIndex];
  console.log(account.currentCard);
}
</script>

<style>
.gt-sm {
  .carousel__slide {
    height: 100%;
    padding: 10px;
    width: 100%;
  }
}
.lt-md {
  .carousel__slide {
    padding: 10px;
    height: 40vh;
  }
}
</style>
