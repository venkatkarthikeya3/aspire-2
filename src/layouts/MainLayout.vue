<template>
  <q-layout v-if="account.balance" class="gt-sm" view="lhh LpR lff">
    <q-drawer class="bg-info" show-if-above :width="340" side="left">
      <div class="text-start items-start drawer-container">
        <div>
          <q-icon
            class="logo"
            size="100px"
            name="img:./src/assets/Aspire Logo.svg"
          />
        </div>
        <div class="text-white headline">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
        <div class="route-container text-white">
          <div @click="changeRoute('home')" class="route">
            <q-icon size="24px" name="img:./src/assets/Home.svg" />
            <span class="route-label">Home</span>
          </div>
          <div @click="changeRoute('cards')" class="route text-primary">
            <q-icon size="24px" name="img:./src/assets/Card.svg" />
            <span class="route-label">Cards</span>
          </div>
          <div @click="changeRoute('payments')" class="route">
            <q-icon size="24px" name="img:./src/assets/Payments.svg" />
            <span class="route-label">Payments</span>
          </div>
          <div @click="changeRoute('credit')" class="route">
            <q-icon size="24px" name="img:./src/assets/Credit.svg" />
            <span class="route-label">Credit</span>
          </div>
          <div @click="changeRoute('settings')" class="route">
            <q-icon size="24px" name="img:./src/assets/Account.svg" />
            <span class="route-label">Settings</span>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!-- <CardsPage /> -->
    </q-page-container>
  </q-layout>

  <q-layout v-if="account.balance" class="lt-sm bg-info" view="hHh lpR fFf">
    <q-page-container>
      <router-view />
      <!-- <CardsPage /> -->
    </q-page-container>

    <q-footer elevated class="bg-white">
      <div class="row justify-evenly items-center route-tabs-row">
        <div class="col-2">
          <div class="column items-center text-center text-caption">
            <div class="col">
              <q-icon size="24px" name="img:./src/assets/Logo-1.svg" />
            </div>
            <div class="col route-label-sm" style="color: gray !important">
              Home
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="column items-center text-center text-caption">
            <div class="col">
              <q-icon size="24px" name="img:./src/assets/pay-1.svg" />
            </div>
            <div class="col route-label-sm" style="color: #01d167 !important">
              Cards
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="column items-center text-center text-caption">
            <div class="col">
              <q-icon size="24px" name="img:./src/assets/Payments.svg" />
            </div>
            <div class="col route-label-sm" style="color: gray !important">
              Payments
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="column items-center text-center text-caption">
            <div class="col">
              <q-icon size="24px" name="img:./src/assets/Credit-1.svg" />
            </div>
            <div class="col route-label-sm" style="color: gray !important">
              Credit
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="column items-center text-center text-caption">
            <div class="col">
              <q-icon size="24px" name="img:./src/assets/Account-1.svg" />
            </div>
            <div class="col route-label-sm" style="color: gray !important">
              Settings
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAccountStore } from "src/stores/AccountStore";
import { useRouter } from "vue-router";

let account = useAccountStore();
account.fill();
let router = useRouter();
let currentRoute = ref("");
let changeRoute = (newRoute) => {
  currentRoute.value = newRoute;
  router.push(`${currentRoute.value}`);
};

changeRoute("cards");
</script>
<style scoped>
.drawer-container {
  padding: 45px;
}
.logo {
  width: 125px;
  height: 35px;
}
.headline {
  font-size: 15px;
  opacity: 30%;
  margin-top: 20px;
}
.route-label {
  margin-left: 16px;
  font-size: 16px;
}
.route {
  margin-top: 50px;
}
.route-container {
  margin-top: 90px;
}
.route-tabs-row {
  padding: 2px;
  margin-top: 5px;
}
.route-label-sm {
  font-size: 9px;
  font-weight: bold;
}
</style>
