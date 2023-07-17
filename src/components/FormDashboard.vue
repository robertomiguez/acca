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
      >
        <ion-select-option
          v-for="criptoCoin in criptoCoins"
          :key="criptoCoin.id"
          :value="JSON.stringify(criptoCoin)"
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
      >
        <ion-select-option
          v-for="fiatCoin in fiatCoins"
          :key="fiatCoin.id"
          :value="JSON.stringify(fiatCoin)"
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
      >
        <ion-select-option
          v-for="periodicity in periodicities"
          :key="periodicity.id"
          :value="JSON.stringify(periodicity)"
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
      >
        <ion-select-option
          v-for="starting in startings"
          :key="starting.id"
          :value="JSON.stringify(starting)"
          >{{ starting.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
  </ion-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
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

const { purchaseAmount, cryptoCoin, fiatCoin, periodicity, starting } =
  storeToRefs(useSettingsStore());

const criptoCoins = ref<Coin[]>([]);
const fiatCoins = ref<Coin[]>([]);
const periodicities = ref<Periodicity[]>([]);
const startings = ref<Starting[]>([]);

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
</script>
