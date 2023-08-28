<template>
  <ion-card>
    <ion-item>
      <ion-label>
        <h2>Total Invested</h2>
        <p>{{ fiatCoin?.symbol }} {{ purchaseAcc }}</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>
        <h2>Profit</h2>
        <p>{{ fiatCoin?.symbol }} {{ profit.toFixed(2) }}</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>
        <h2>Total Available</h2>
        <p>{{ fiatCoin?.symbol }} {{ (purchaseAcc + profit).toFixed(2) }}</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>
        <h2>Quantity of Bitcoin</h2>
        <p>{{ cryptoCoin?.symbol }} {{ quantityCryptoAcc?.toFixed(8) }}</p>
      </ion-label>
    </ion-item>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonItem, IonLabel } from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '@/stores/settingsStore';
import { useTransactionStore } from '@/stores/transactionStore';

const settingsStore = useSettingsStore();
const transactionStore = useTransactionStore();

const { cryptoCoin, fiatCoin } = storeToRefs(settingsStore);
const { purchaseAcc, quantityCryptoAcc, profit } =
  storeToRefs(transactionStore);
</script>

<style scoped></style>
