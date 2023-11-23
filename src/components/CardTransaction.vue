<template>
  <q-item>
    <div class="item-row">
      <div class="col-auto icon-div">
        <q-icon class="icon" name="img:./src/assets/file-storage.svg" />
      </div>
      <div class="col-6 items-start q-pa-xs details-div">
        <div class="place">{{ transaction.place }}</div>
        <div class="date">{{ transaction.date }}</div>
      </div>
      <div class="col-auto amount-div">
        <span class="amount" v-if="!isCredit">-</span
        ><span class="amount" :class="{ 'text-primary': isCredit }">
          S${{ transaction.amount }}</span
        >
        <q-icon class="next-icon" name="img:./src/assets/next.svg" />
      </div>
    </div>
    <q-separator inset dark />
  </q-item>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["transaction"]);
console.log(props.transaction.type);
let isCredit = ref(props.transaction.type == "credit");
</script>
<style scoped>
.icon {
  height: 12px;
  width: 12px;
}
.icon-div {
  border-radius: 50%;
  background-color: #009dff1a;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.place {
  font-size: 14px;
  font-weight: bold;
}
.details-div {
  margin-left: 10px;
  width: 90px;
}
.date {
  font-size: 13px;
  color: #aaaaaa;
}
.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.amount-div {
  margin-left: 100px;
  font-size: 14px;
  font-weight: bold;
}
.next-icon {
  margin-left: 4px;
}
</style>
