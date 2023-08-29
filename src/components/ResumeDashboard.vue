<template>
  <ion-card class="ion-card-small">
    <ion-card-content>
      If I had started buying {{ fiatCoin?.symbol }}{{ purchaseAmount }} of
      {{ cryptoCoin?.name }}, {{ periodicity?.name }} {{ starting?.name }}, I
      would have turned {{ fiatCoin?.symbol }}{{ purchaseAcc }} into
      {{ fiatCoin?.symbol }} {{ (purchaseAcc + profit).toFixed(2) }}* ({{
        fiatCoin?.symbol
      }}{{ profit.toFixed(2) }}* in <span v-if="profit >= 0">profit</span
      ><span v-else>loss</span> ), equals {{ quantityCryptoAcc.toFixed(8) }}
      {{ cryptoCoin?.symbol }}.
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent } from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '@/stores/settingsStore';
import { useTransactionStore } from '@/stores/transactionStore';

const settingsStore = useSettingsStore();
const transactionStore = useTransactionStore();

const { cryptoCoin, fiatCoin, purchaseAmount, periodicity, starting } =
  storeToRefs(settingsStore);
const { purchaseAcc, quantityCryptoAcc, profit } =
  storeToRefs(transactionStore);
</script>

<style scoped></style>
