import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAccountStore = defineStore("account", {
  state: () => ({
    balance: 0,
    cards: [],
    currentCard: {},
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    fill(data) {
      api
        .get("/account")
        .then((response) => {
          let account = response.data;
          this.balance = account.balance;
          this.cards = account.cards;
          this.currentCard = this.cards[0];
          console.log(this.cards);
        })
        .catch(() => {
          //data not loaded response..toast.
        });
    },

    addCard(name) {
      let card = {};
      card.name = name;
      card.number = "5555-5555-5555-5555";
      card.date = "11-23-2023";
      card.cvv = "231";
      card.frozen = false;
      card.transactions = [
        {
          id: 1,
          place: "Pizza hut",
          amount: 2.5,
          date: "27-23-30",
          type: "debit",
        },
      ];
      this.cards.unshift(card);
      this.currentCard = this.cards[0];
      console.log(this.cards);
    },
  },
});
