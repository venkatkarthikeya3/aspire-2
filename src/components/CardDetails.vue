<template>
  <div class="gt-sm col-4 card-details-container" v-show="currentCard">
    <q-expansion-item
      icon="img:./src/assets/Group 11889.svg"
      label="Card Details"
      expand-icon="img:./src/assets/down-arrow.svg"
      expanded-icon="img:./src/assets/down-arrow-1.svg"
      header-class="bg-negative text-info accordion-header"
    >
      <q-card class="bg-white">
        <q-card-section> Name on card: {{ currentCard.name }} </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      icon="img:./src/assets/Group 11889-1.svg"
      label="Recent Transactions"
      expand-icon="img:./src/assets/down-arrow.svg"
      expanded-icon="img:./src/assets/down-arrow-1.svg"
      header-class="bg-negative text-info accordion-header"
    >
      <q-card class="bg-white">
        <q-card-section>
          <CardTransaction
            v-for="transaction in currentCard.transactions"
            :key="transaction.id"
            :transaction="transaction"
          />
          <q-separator inset dark />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <div class="lt-md bg-white">
    <div class="q-pa-md">
      <q-expansion-item
        icon="img:./src/assets/Group 11889.svg"
        label="Card Details"
        expand-icon="img:./src/assets/down-arrow.svg"
        expanded-icon="img:./src/assets/down-arrow-1.svg"
        header-class="bg-negative text-info"
      >
        <q-card class="bg-white text-caption text-info">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        icon="img:./src/assets/Group 11889-1.svg"
        label="Recent Transactions"
        expand-icon="img:./src/assets/down-arrow.svg"
        expanded-icon="img:./src/assets/down-arrow-1.svg"
        header-class="bg-negative text-info"
      >
        <q-card class="bg-white text-info">
          <q-card-section>
            <CardTransaction
              v-for="transaction in currentCard.transactions"
              :key="transaction.id"
              :transaction="transaction"
            />
            <q-separator inset dark />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script setup>
import { useAccountStore } from "src/stores/AccountStore";
import CardTransaction from "./CardTransaction.vue";
let account = useAccountStore();
let cards = account.cards;
let currentCard = account.currentCard;
</script>
<style>
.card-details-container {
  width: 366px;
  margin-top: 60px;
}
.accordion-header {
  border-radius: 8px;
}
</style>
