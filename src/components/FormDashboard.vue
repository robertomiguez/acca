<template>
  <ion-card>
    <ion-item>
      <ion-input
        label="Purchased Amount"
        labelPlacement="floating"
        type="number"
      ></ion-input>
    </ion-item>
    <ion-item>
      <ion-select
        label="Crypto Coin"
        labelPlacement="floating"
        value="BTC"
        okText="Okay"
        cancelText="Dismiss"
      >
        <ion-select-option
          v-for="criptoCoin in criptoCoins"
          :key="criptoCoin.id"
          value="{{criptoCoin.symbol}}"
          >{{ criptoCoin.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Fiat"
        labelPlacement="floating"
        value="USD"
        okText="Okay"
        cancelText="Dismiss"
      >
        <ion-select-option
          v-for="fiatCoin in fiatCoins"
          :key="fiatCoin.id"
          value="{{fiatCoin.symbol}}"
          >{{ fiatCoin.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Periodicity"
        labelPlacement="floating"
        value="1"
        okText="Okay"
        cancelText="Dismiss"
      >
        <ion-select-option
          v-for="periodicity in periodicities"
          :key="periodicity.id"
          value="{{periodicity.id}}"
          >{{ periodicity.name }}</ion-select-option
        >
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Starting"
        labelPlacement="floating"
        value="30"
        okText="Okay"
        cancelText="Dismiss"
      >
        <ion-select-option
          v-for="starting in startings"
          :key="starting.id"
          value="{{starting.id}}"
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

import CryptoCoinsService from '@/services/CryptoCoins';
import FiatCoinsService from '@/services/FiatCoins';
import PeriodicitiesService from '@/services/Periodicities';
import StartingsService from '@/services/Startings';

import { Coin } from '@/types/Coin';
import { Periodicity } from '@/types/Periodicity';
import { Starting } from '@/types/Starting';

const criptoCoins = ref<Coin[]>([]);
const fiatCoins = ref<Coin[]>([]);
const periodicities = ref<Periodicity[]>([]);
const startings = ref<Starting[]>([]);

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
