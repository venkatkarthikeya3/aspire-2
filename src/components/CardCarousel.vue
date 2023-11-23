<template>
  <carousel class="gt-sm" :items-to-show="1" @slide-end="handleSlideEnd">
    <slide v-for="card in cards" :key="card.id">
      <CardItem :card="card" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
  <carousel class="lt-md" :items-to-show="1.2" @slide-end="handleSlideEnd">
    <slide v-for="card in cards" :key="card.id">
      <CardItem :card="card" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useAccountStore } from "src/stores/AccountStore";
import CardItem from "./CardItem.vue";
const props = defineProps(["cards"]);
let account = useAccountStore();

function handleSlideEnd(data) {
  account.currentCard = account.cards[data.currentSlideIndex];
  console.log(account.currentCard);
}
</script>

<style></style>
