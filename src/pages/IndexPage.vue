<template>
  <q-page class="column justify-center items-center" style="height: 450px">
    <div class="col">
      <img
        alt="Quasar logo"
        src="~assets/Aspire Logo.svg"
        style="width: 200px; height: 200px"
      />
    </div>
    <div class="col">
      <span class="text-capitalize text-body1 gt-sm">{{
        route.fullPath.substring(1)
      }}</span>
      <span class="text-capitalize text-body1 lt-md text-white">{{
        route.fullPath.substring(1)
      }}</span>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.fullPath);
</script>
