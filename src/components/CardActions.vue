<template>
  <div class="col bg-negative text-info action-buttons-container">
    <div class="row justify-evenly">
      <div class="col-2">
        <div @click="toggleCardFreezeState">
          <div class="column items-center text-center">
            <div class="col">
              <q-icon class="icon" name="img:./src/assets/Freeze card.svg" />
            </div>
            <div class="col label" v-if="!currentCard.frozen">Freeze card</div>
            <div class="col label" v-if="currentCard.frozen">
              Un-Freeze card
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="column items-center text-center">
          <q-icon class="icon" name="img:./src/assets/Set spend limit.svg" />

          <div class="label">Set Spend Limit</div>
        </div>
      </div>
      <div class="col-2">
        <div class="column items-center text-center">
          <div class="col">
            <q-icon class="icon" name="img:./src/assets/Gpay.svg" />
          </div>
          <div class="col label">Add to Gpay</div>
        </div>
      </div>
      <div class="col-2">
        <div class="column items-center text-center">
          <div class="col">
            <q-icon class="icon" name="img:./src/assets/Replace card.svg" />
          </div>
          <div class="col label">Replace card</div>
        </div>
      </div>
      <div class="col-2">
        <div @click="deleteCard" class="column items-center text-center">
          <div class="col">
            <q-icon class="icon" name="img:./src/assets/Deactivate card.svg" />
          </div>
          <div class="col label">Cancel card</div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Cancel this card?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
        <q-btn
          @click="deleteCard"
          flat
          label="Cancel Card"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useAccountStore } from "src/stores/AccountStore";
let account = useAccountStore();
let currentCard = account.currentCard;
let confirm = ref(false);

let toggleCardFreezeState = () => {
  currentCard.frozen = !currentCard.frozen;
  console.log(account.cards);
};
let deleteCard = () => {
  const index = account.cards.findIndex((card) => card.id === currentCard.id);
  if (account.cards.length > 1) {
    account.cards.splice(index, 1);
    currentCard = account.cards[0];
  } else {
    alert("can't delete all cards");
  }
};
</script>
<style scoped>
.action-buttons-container {
  border-radius: 16px;
  padding: 21px;
}
.icon {
  height: 32px;
  width: 32px;
}
.label {
  font-size: 12px;
  text-align: center;
  align-items: center;
  margin-top: 7px;
}
.action-button {
  margin-top: 0px;
}
.buttons-container {
  display: flex;
  margin-top: 24px;
}
</style>
