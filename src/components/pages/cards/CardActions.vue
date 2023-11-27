<template>
  <div
    class="col bg-warning text-info action-buttons-container"
    :class="{ 'action-button-container-sm': isMobile }"
  >
    <div class="row justify-evenly">
      <div class="col-2">
        <div @click="toggleCardFreezeState">
          <div class="column items-center text-center">
            <div class="col">
              <q-icon class="icon" name="img:./src/assets/Freeze card.svg" />
            </div>
            <div class="col label" v-if="!account.currentCard.frozen">
              Freeze card
            </div>
            <div class="col label" v-if="account.currentCard.frozen">
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
        <div
          @click="showCancelPopup = true"
          class="column items-center text-center"
        >
          <div class="col">
            <q-icon class="icon" name="img:./src/assets/Deactivate card.svg" />
          </div>
          <div class="col label">Cancel card</div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="showCancelPopup" persistent>
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
import { ref, computed } from "vue";
import { useAccountStore } from "src/stores/AccountStore";
import { useQuasar } from "quasar";
const $q = useQuasar();

const isMobile = computed(() => {
  console.log($q.screen.lt.md);
  return $q.screen.lt.md;
});
let account = useAccountStore();

let showCancelPopup = ref(false);

let toggleCardFreezeState = () => {
  account.currentCard.frozen = !account.currentCard.frozen;
};
let deleteCard = () => {
  const index = account.cards.findIndex(
    (card) => card.id === account.currentCard.id
  );
  if (account.cards.length > 1) {
    account.cards.splice(index, 1);
    account.currentCard = account.cards[0];
  } else {
    alert("can't delete all cards");
  }
  showCancelPopup.value = false;
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
.action-button-container-sm {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
