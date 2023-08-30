<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title
          >Report - {{ periodicity?.name.charAt(0).toUpperCase()
          }}{{ periodicity?.name.slice(1) }} started
          {{ starting?.name }}</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >Date</ion-col
          >
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >Price</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >Invested</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >Qty Acc {{ cryptoCoin?.symbol }}</ion-col
          >
        </ion-row>
        <ion-row
          v-for="(transaction, key) in transactions"
          :key="key"
          class="ion-justify-content-center"
          :class="key % 2 == 0 ? 'odd-row' : 'even-row'"
        >
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >{{ transaction.dateTime }}</ion-col
          >
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >{{ fiatCoin?.symbol }} {{ transaction.price?.toFixed(2) }}</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
          >
            {{ fiatCoin?.symbol }}
            {{ transaction.purchaseAcc }}</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >{{ transaction.quantityCryptoAcc?.toFixed(8) }}</ion-col
          >
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/vue';
import { useSettingsStore } from '@/stores/settingsStore';
import { useTransactionStore } from '@/stores/transactionStore';
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const transactionStore = useTransactionStore();

const { cryptoCoin, fiatCoin, periodicity, starting } =
  storeToRefs(settingsStore);
const { transactions } = storeToRefs(transactionStore);
</script>

<style scoped>
.even-row {
  background-color: #dfe9fa;
}

.odd-row {
  background-color: white;
}
</style>
