<template>
  <ion-card>
    <ion-item>
      <ion-input
        label="Purchased Amount"
        labelPlacement="floating"
        type="number"
        v-model="purchaseAmount"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-select
        label="Crypto Coin"
        labelPlacement="floating"
        v-model="cryptoCoin"
        :compareWith="compareWith"
      >
        <ion-select-option
          v-for="criptoCoin in criptoCoins"
          :key="criptoCoin.id"
          :value="criptoCoin"
          >{{ criptoCoin.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Fiat"
        labelPlacement="floating"
        v-model="fiatCoin"
        :compareWith="compareWith"
      >
        <ion-select-option
          v-for="fiatCoin in fiatCoins"
          :key="fiatCoin.id"
          :value="fiatCoin"
          >{{ fiatCoin.symbol }} - {{ fiatCoin.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Periodicity"
        labelPlacement="floating"
        v-model="periodicity"
        :compareWith="compareWith"
      >
        <ion-select-option
          v-for="periodicity in periodicities"
          :key="periodicity.id"
          :value="periodicity"
          >{{ periodicity.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Starting"
        labelPlacement="floating"
        v-model="starting"
        :compareWith="compareWith"
      >
        <ion-select-option
          v-for="starting in startings"
          :key="starting.id"
          :value="starting"
          >{{ starting.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
  </ion-card>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue';
import {
  IonCard,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue';

import CryptoCoinsService from '@/services/CryptoCoinsService';
import FiatCoinsService from '@/services/FiatCoinsService';
import PeriodicitiesService from '@/services/PeriodicitiesService';
import StartingsService from '@/services/StartingsService';

import { Coin } from '@/types/CoinType';
import { Periodicity } from '@/types/PeriodicityType';
import { Starting } from '@/types/StartingType';

import { useSettingsStore } from '@/stores/settingsStore';
import { useTransactionStore } from '@/stores/transactionStore';
import { storeToRefs } from 'pinia';
import PriceService from '@/services/PricesService';

const settingsStore = useSettingsStore();
const transactionStore = useTransactionStore();

const { purchaseAmount, cryptoCoin, fiatCoin, periodicity, starting, loading } =
  storeToRefs(settingsStore);

const { prices } = storeToRefs(transactionStore);
const { fillTransactions } = transactionStore;

// initial states
const criptoCoins = ref<Coin[]>([]);
const fiatCoins = ref<Coin[]>([]);
const periodicities = ref<Periodicity[]>([]);
const startings = ref<Starting[]>([]);

onMounted(async () => {
  try {
    loading.value = true;
    criptoCoins.value = await CryptoCoinsService.getCryptoCoins();
    fiatCoins.value = await FiatCoinsService.getFiatCoins();
    periodicities.value = await PeriodicitiesService.getPeriodicities();
    startings.value = await StartingsService.getStartings();
    loading.value = false;

    // if first time get default values
    purchaseAmount.value = purchaseAmount.value ?? 10;
    cryptoCoin.value = cryptoCoin.value ?? criptoCoins.value[0];
    fiatCoin.value = fiatCoin.value ?? fiatCoins.value[0];
    periodicity.value = periodicity.value ?? periodicities.value[0];
    starting.value = starting.value ?? startings.value[0];
  } catch (e) {
    console.error('Failed to fetch', e);
  }
});

watchEffect(async () => {
  try {
    loading.value = true;
    prices.value = await PriceService.getPrices(
      cryptoCoin.value?.id as string,
      fiatCoin.value?.id as string,
      starting.value?.id as number,
    );
    prices.value.pop(); // drop the last e current price
    fillTransactions();
    loading.value = false;
  } catch (e) {
    console.error('Failed to fetch market chart', e);
  }
});

watch(
  () => [periodicity.value, purchaseAmount.value],
  () => {
    try {
      loading.value = true;
      fillTransactions();
      loading.value = false;
    } catch (e) {
      console.error('Failed to fill transactions', e);
    }
  },
);

// select component is working with objects
const compareWith = (o1: { id: any }, o2: { id: any }) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};
</script>
