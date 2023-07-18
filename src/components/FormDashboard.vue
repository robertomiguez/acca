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
        okText="Okay"
        cancelText="Dismiss"
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
        okText="Okay"
        cancelText="Dismiss"
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
        okText="Okay"
        cancelText="Dismiss"
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
        okText="Okay"
        cancelText="Dismiss"
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
import { onMounted, ref, watchEffect } from 'vue';
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
import { storeToRefs } from 'pinia';
import PriceService from '@/services/PricesService';

const { purchaseAmount, cryptoCoin, fiatCoin, periodicity, starting } =
  storeToRefs(useSettingsStore());

const criptoCoins = ref<Coin[]>([]);
const fiatCoins = ref<Coin[]>([]);
const periodicities = ref<Periodicity[]>([]);
const startings = ref<Starting[]>([]);

const prices = ref<number[][]>([]);

// const setupStore = useSettingsStore();

onMounted(async () => {
  try {
    criptoCoins.value = await CryptoCoinsService.getCryptoCoins();
    fiatCoins.value = await FiatCoinsService.getFiatCoins();
    periodicities.value = await PeriodicitiesService.getPeriodicities();
    startings.value = await StartingsService.getStartings();
  } catch (e) {
    console.error('Failed to fetch', e);
  }
});

watchEffect(async () => {
  try {
    // TODO: after that fill the calcs
    prices.value = await PriceService.getPrices(
      cryptoCoin.value.id,
      fiatCoin.value.id,
      starting.value.id,
    );
    console.log('prices', prices.value);
  } catch (e) {
    console.error('Failed to fetch Bitcoin market chart', e);
  }
});

// select component is working with objects
const compareWith = (o1: { id: any }, o2: { id: any }) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};
</script>
