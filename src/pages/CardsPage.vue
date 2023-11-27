<template>
  <q-page padding class="gt-sm q-pa-xl">
    <div class="q-pa-md">
      <div class="row justify-between">
        <div class="row justify-evenly">
          <div class="column items-start align-center">
            <div class="col balance-header">Available Balance</div>
            <div class="col">
              <div class="row q-mt-xs justify-between items-center">
                <div class="bg-primary text-white dollar-badge">S$</div>
                <div class="balance">
                  {{ account.balance.toLocaleString() }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          @click="showAddPopup = true"
          class="col-auto add-button self-center q-pa-xs"
        >
          <q-icon class="icon" name="img:./src/assets/box.svg" />
          <span class="label"> New Card </span>
        </div>
      </div>
    </div>

    <div class="row justify-start tabs-row">
      <div class="cards-tab">My Debit cards</div>
      <div class="all-cards-tab">All Company cards</div>
    </div>

    <div
      v-show="currentCard"
      class="row justify-evenly details-container z-top"
    >
      <div class="col-4 q-gutter-y-md">
        <div
          @click="showCardNumber()"
          class="col row justify-end show-card-button"
        >
          <q-icon
            class="show-card-icon q-mr-sm"
            name="img:./src/assets/remove_red_eye-24px.svg"
          />
          <span class="show-card-label text-primary"> Show card number </span>
        </div>
        <CardCarousel :cards="cards" />
        <CardActions />
      </div>
      <CardDetails />
    </div>
  </q-page>
  <qpage padding class="lt-md">
    <div class="q-pa-md text-white">
      <div class="row justify-between q-my-xs">
        <div class="balance-header-sm">Account Balance</div>
        <div><q-icon size="25px" name="img:./src/assets/Logo.svg" /></div>
      </div>
      <div class="row justify-between items-center second-header">
        <div class="row items-start items-center">
          <div class="bg-primary dollar-badge">S$</div>
          <div class="balance-sm">{{ account.balance.toLocaleString() }}</div>
        </div>

        <div
          @click="showAddPopup = true"
          class="col-auto add-button-sm self-center q-pa-xs items-center"
        >
          <q-icon class="add-icon-sm" name="img:./src/assets/box-1.svg" />
          <span class="add-label-sm"> New Card </span>
        </div>
      </div>
      <div class="text-white row justify-start tabs-row tabs-row-sm">
        <div class="cards-tab">My Debit cards</div>
        <div class="all-cards-tab">All Company cards</div>
      </div>
      <div class="row justify-end q-mt-xs show-card-details">
        <q-btn
          @click="showCardNumber()"
          class="bg-white text-primary card-details-btn"
          flat
          no-caps
          icon="img:./src/assets/remove_red_eye-24px-1.svg"
          label="Show card number"
        />
      </div>
    </div>
    <CardCarousel :cards="account.cards" />
    <CardActions />
    <CardDetails />
  </qpage>
  <q-dialog v-model="showAddPopup" persistent>
    <q-card style="min-width: 300px">
      <q-card-section>
        <div class="text-h6">Name on Card</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          ref="cardNameInput"
          :rules="[(val) => (val && val.length > 0) || 'Please type a name']"
          dense
          v-model="cardname"
          autofocus
          @keyup.enter="addCard"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn @click="addCard" flat label="Add Card" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useAccountStore } from "src/stores/AccountStore";
import CardActions from "src/components/pages/cards/CardActions.vue";
import CardDetails from "src/components/pages/cards/CardDetails.vue";
import CardCarousel from "src/components/pages/cards/CardCarousel.vue";
let slide = ref("style");
let cardNameInput = ref(null);
let account = useAccountStore();
let cards = account.cards;
let currentCard = account.currentCard;

let showAddPopup = ref(false);
let cardname = ref("");

let addCard = () => {
  if (cardNameInput.value.validate()) {
    account.addCard(cardname.value);
    cardname.value = "";
    showAddPopup.value = false;
  }
};
let showCardNumber = () => {
  account.currentCard.showNumber = !account.currentCard.showNumber;
};
</script>
<style>
.balance-header {
  font-size: 14px;
  font-weight: bold;
}
.dollar-badge {
  font-size: 14px;
  font-weight: bold;
  width: 40px;
  height: 24px;
  border-radius: 4px;
  text-align: center;
}
.balance {
  font-size: 26px;
  margin-left: 12px;
  font-weight: 800;
}
.add-button {
  background-color: #325baf;
  color: white;
  border-radius: 4px;

  .icon {
    height: 16px;
    width: 16px;
    margin-left: 12px;
  }

  .label {
    font-size: 13px;
    margin-left: 8px;
    margin-right: 12px;
    font-weight: bold;
  }
}
.cards-tab {
  margin-right: 32px;
  border-bottom: #23cefd 4px solid;
  border-radius: 1px;
}
.all-cards-tab {
  opacity: 30%;
}
.tabs-row {
  color: black;
  font-size: 14px;
  margin-top: 34px;
  font-weight: bold;
}
.details-container {
  margin-top: 16px;
  box-shadow: 0px 2px 15px #00000014;
  border-radius: 8px;
  padding: 32px;
}
.show-card-icon {
  height: 16px;
  width: 16px;
}
.show-card-label {
  font-size: 14px;
  font-weight: bold;
}
.show-card-button {
  /* margin-left: 260px;
  position: absolute; */
}
.balance-header-sm {
  font-size: 14px;
  margin-top: 10px;
}
.balance-sm {
  font-size: 20px;
  margin-left: 8px;
  font-weight: bold;
}
.add-button-sm {
  color: #23cefd;
  font-size: 12px;
  font-weight: bold;
}
.add-icon-sm {
  height: 16px;
  width: 16px;
}
.second-header {
  margin-top: 12px;
}

.cards-tab {
  margin-right: 32px;
  border-bottom: #23cefd 2px solid;
  border-radius: 1px;
}
.tabs-row-sm {
  font-size: 12px;
}
.show-card-details {
  z-index: 2;
  position: absolute;
  right: 42px;
  top: 168px;
  .card-details-btn {
    border-radius: 6px;
  }
}
</style>
