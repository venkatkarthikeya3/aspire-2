<template>
  <q-item class="q-pa-xm">
    <div class="item-row full-width">
      <div
        class="col-auto icon-div"
        :class="{
          'blue-bg': isBluebg,
          'pink-bg': isPinkbg,
          'green-bg': isGreenbg,
        }"
      >
        <q-icon
          v-if="icon == 'box'"
          class="icon"
          name="img:./src/assets/file-storage.svg"
        />
        <q-icon
          v-if="icon == 'flight'"
          class="icon"
          name="img:./src/assets/flights.svg"
        />
        <q-icon
          v-if="icon == 'speaker'"
          class="icon"
          name="img:./src/assets/megaphone.svg"
        />
      </div>
      <div class="col items-start q-pa-xs details-div">
        <div class="place">{{ transaction.place }}</div>
        <div class="date">{{ convertDateToString(transaction.date) }}</div>
        <div class="transaction-details">
          <!-- <div class="col-auto details-icon-div">
            <q-icon
              class="details-icon"
              name="img:./src/assets/megaphone.svg"
            />
          </div> -->

          <span>{{ transactionDetailsText }}</span>
        </div>
      </div>
      <div class="col-auto amount-div">
        <span class="amount" v-if="!isCredit">-</span
        ><span class="amount" :class="{ 'text-primary': isCredit }">
          S$ {{ transaction.amount }}</span
        >
        <q-icon class="next-icon" name="img:./src/assets/next.svg" />
      </div>
    </div>
  </q-item>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["transaction"]);
console.log(props.transaction.type);
let isCredit = ref(props.transaction.type == "credit");
let dateConversionOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
let icon = ref("");
let isBluebg = ref("false");
let isGreenbg = ref("false");
let isPinkbg = ref("false");
let placesAndIconsMap = [
  {
    place: "Hamleys",
    icon: "box",
    background: "blue",
  },
  {
    place: "Air Asia",
    icon: "flight",
    background: "green",
  },
  {
    place: "Pizza hut",
    icon: "speaker",
    background: "pink",
  },
  {
    place: "default",
    icon: "box",
    background: "blue",
  },
];
let transactionDetailsText = ref("");
let convertDateToString = (date) => {
  let dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", dateConversionOptions);
};
let getIconDetails = (place) => {
  let mapObj = placesAndIconsMap.find((p) => p.place == place);
  if (!mapObj) {
    mapObj = placesAndIconsMap.find((p) => p.place == "default");
  }
  icon.value = mapObj.icon;
  switch (mapObj.background) {
    case "blue":
      isBluebg.value = true;
      break;
    case "pink":
      isPinkbg.value = true;
      break;
    case "green":
      isGreenbg.value = true;
      break;
    default:
      isBluebg.value = true;
  }
  console.log(isGreenbg);
};
let getTransactionDetailsText = (transaction) => {
  if (transaction.type == "credit") {
    transactionDetailsText.value = "Refund on card";
  } else {
    transactionDetailsText.value = "Charged to card";
  }
};
getIconDetails(props.transaction.place);
getTransactionDetailsText(props.transaction);
</script>
<style scoped>
.icon {
  height: 12px;
  width: 12px;
}
.details-icon {
  height: 10px;
  width: 8px;
}
.details-icon-div {
  display: inline;
  border-radius: 50%;

  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  height: 12px;
  width: 12px;
}
.blue-bg {
  background-color: #009dff1a;
}
.pink-bg {
  background-color: #f251951a;
}
.green-bg {
  background-color: #00d6b51a;
}
.icon-div {
  border-radius: 50%;

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
}
.date {
  font-size: 13px;
  color: #aaaaaa;
}
.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px #f5f5f5 solid;
  padding: 4px;
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
