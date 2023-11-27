<template>
  <div class="gt-sm col-4 card-details-container" v-show="currentCard">
    <q-expansion-item
      icon="img:./src/assets/Group 11889.svg"
      label="Card Details"
      expand-icon="img:./src/assets/down-arrow.svg"
      expanded-icon="img:./src/assets/down-arrow-1.svg"
      header-class="bg-warning text-info accordion-header card-details-border"
    >
      <q-card class="bg-white card-details-border">
        <q-card-section>
          Name on card:
          <span class="card-details-span q-mx-sm">
            {{ account.currentCard.name }}
          </span>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      icon="img:./src/assets/Group 11889-1.svg"
      label="Recent Transactions"
      expand-icon="img:./src/assets/down-arrow.svg"
      expanded-icon="img:./src/assets/down-arrow-1.svg"
      header-class="bg-warning text-info accordion-header card-details-border"
      default-opened
    >
      <q-card class="bg-white card-details-border">
        <q-card-section>
          <CardTransaction
            v-for="transaction in account.currentCard.transactions"
            :key="transaction.id"
            :transaction="transaction"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="transactions-footer items-center text-center text-primary">
      View All Transactions
    </div>
  </div>
  <div class="lt-md bg-white">
    <div class="q-pa-md">
      <q-expansion-item
        icon="img:./src/assets/Group 11889.svg"
        label="Card Details"
        expand-icon="img:./src/assets/down-arrow.svg"
        expanded-icon="img:./src/assets/down-arrow-1.svg"
        header-class="bg-warning text-info accordion-header card-details-border"
      >
        <q-card class="bg-white text-caption text-info card-details-border">
          <q-card-section>
            Name on card:
            <span class="card-details-span q-mx-sm">
              {{ account.currentCard.name }}
            </span>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        icon="img:./src/assets/Group 11889-1.svg"
        label="Recent Transactions"
        expand-icon="img:./src/assets/down-arrow.svg"
        expanded-icon="img:./src/assets/down-arrow-1.svg"
        header-class="bg-warning text-info accordion-header card-details-border"
        default-opened
      >
        <q-card class="bg-white text-info card-details-border">
          <q-card-section>
            <CardTransaction
              v-for="transaction in account.currentCard.transactions"
              :key="transaction.id"
              :transaction="transaction"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <div class="transactions-footer items-center text-center text-primary">
        View All Transactions
      </div>
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
  height: 72px;
  .q-icon {
    height: 24px;
    width: 24px;
  }
  .q-item__label {
    font-size: 14px;
    font-weight: bold;
  }
}
.card-details-border {
  border: 1px #f0f0f0 solid;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #0000000a;
}
.card-details-span {
  font-size: 20px;
  font-weight: 800;
}
.transactions-footer {
  background-color: #ddffec;
  font-size: 13px;
  font-weight: bold;
  height: 50px;
  padding: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
