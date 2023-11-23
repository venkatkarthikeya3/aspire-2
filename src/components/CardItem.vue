<template>
  <div
    class="text-white column card-item-md q-mx-sm"
    :class="{ 'bg-primary': !card.frozen, 'bg-secondary': card.frozen }"
  >
    <div class="col self-end">
      <q-icon class="icon-1" name="img:./src/assets/Aspire Logo-1.svg" />
    </div>
    <div class="col self-start name">
      {{ card.name }}
    </div>
    <div class="col self-start number">&#9898; {{ card.number }}</div>
    <div class="col self-start">
      <span class="date">Thru: {{ card.date }}</span>
      <span class="text-caption cvv">CVV: {{ card.cvv }}</span>
    </div>
    <div class="col self-end">
      <q-icon class="icon-2" name="img:./src/assets/Visa Logo.svg" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["card"]);
</script>

<style scoped>
.card-item-md {
  height: 248px;
  width: 414px;
  border-radius: 15px;
  padding: 27px;
  .icon-1 {
    width: 84px;
    height: 24px;
  }
  .name {
    margin-top: 27px;
    font-size: 24px;
    font-weight: 800;
  }
  .number {
    font-size: 14px;
    margin-top: 27px;
  }
  .date {
    font-size: 13px;
    margin-top: 13px;
  }
  .cvv {
    font-size: 13px;
    margin-left: 36px;
  }
  .icon-2 {
    width: 67px;
    height: 23px;
  }
}
</style>
