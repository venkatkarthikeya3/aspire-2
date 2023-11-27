<template>
  <div
    class="text-white column full-width card-item-md"
    :class="{
      'bg-primary': !card.frozen,
      'bg-secondary': card.frozen,
    }"
  >
    <div class="col self-end">
      <q-icon
        :class="{
          icon1: !isMobile,
          'icon1-sm': isMobile,
        }"
        name="img:./src/assets/Aspire Logo-1.svg"
      />
    </div>
    <div
      class="col self-start"
      :class="{
        name: !isMobile,
        'name-sm': isMobile,
      }"
    >
      {{ card.name }}
    </div>
    <div
      class="col self-start"
      :class="{
        number: !isMobile,
        'number-sm': isMobile,
        'number-show-font': !isMobile && card.showNumber,
        'number-show-font-sm': isMobile && card.showNumber,
      }"
    >
      <span v-if="!card.showNumber">&#9898;&#9898;&#9898;&#9898;</span>
      <span v-if="card.showNumber">{{ cardNumberArr[0] }}</span
      >&nbsp; <span v-if="!card.showNumber">&#9898;&#9898;&#9898;&#9898;</span>
      <span v-if="card.showNumber">{{ cardNumberArr[1] }}</span> &nbsp;
      <span v-if="!card.showNumber">&#9898;&#9898;&#9898;&#9898;</span>
      <span v-if="card.showNumber">{{ cardNumberArr[2] }}</span> &nbsp;
      <span>{{ cardNumberArr[3] }}</span>
    </div>
    <div class="col self-start date-cvv-container">
      <span
        :class="{
          date: !isMobile,
          'date-sm': isMobile,
        }"
        >Thru: {{ card.date }}</span
      >
      <span
        :class="{
          cvv: !isMobile,
          'cvv-sm': isMobile,
        }"
        >CVV:
      </span>
      <span
        :class="{
          'cvv-value': !isMobile,
          'cvv-value-sm': isMobile,
        }"
        >{{ getCVV }}</span
      >
    </div>
    <div class="col self-end">
      <q-icon
        :class="{
          icon2: !isMobile,
          'icon2-sm': isMobile,
        }"
        name="img:./src/assets/Visa Logo.svg"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
const props = defineProps(["card"]);
import { useQuasar } from "quasar";
const $q = useQuasar();
const isMobile = computed(() => {
  console.log($q.screen.lt.md);
  return $q.screen.lt.md;
});
const getCVV = computed(() => {
  return props.card.showNumber ? props.card.cvv : "***";
});

let cardNumberArr = props.card.number.split("-");
</script>

<style scoped>
.card-item-md {
  /* height: 248px; */
  /* width: 414px; */
  border-radius: 15px;
  padding: 27px;

  .icon1 {
    width: 84px;
    height: 24px;
  }
  .icon1-sm {
    width: 84px;
    height: 24px;
  }
  .name {
    margin-top: 27px;
    font-size: 24px;
    font-weight: 800;
  }
  .name-sm {
    margin-top: 24px;
    font-size: 22px;
    font-weight: 800;
  }
  .number {
    font-size: 14px;
    margin-top: 32px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .number-sm {
    font-size: 14px;
    margin-top: 24px;
    font-weight: bold;
  }

  .date {
    font-size: 13px;
    margin-top: 13px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .date-sm {
    margin-top: 13px;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .cvv {
    font-size: 13px;
    margin-left: 36px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .cvv-sm {
    font-size: 13px;
    margin-left: 36px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .cvv-value {
    margin-top: 20px;
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .cvv-value-sm {
    margin-top: 20px;
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .icon2 {
    width: 67px;
    height: 23px;
  }
  .icon2-sm {
    width: 59px;
    height: 20px;
  }
  .date-cvv-container {
    margin-top: 17px;
  }
  .number-show-font {
    font-size: 24px;
    letter-spacing: 3px;
  }
  .number-show-font-sm {
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
