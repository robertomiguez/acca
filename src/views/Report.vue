<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Report</ion-title>
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
            >Qty Acc BTC</ion-col
          >
        </ion-row>
        <ion-row
          v-for="(price, key) in prices"
          :key="key"
          class="ion-justify-content-center even-row"
        >
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >{{ price[0] }}</ion-col
          >
          <ion-col
            sizeLg="1"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >{{ price[1] }}</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >0.00062428 (€10)</ion-col
          >
          <ion-col
            sizeLg="2"
            sizeMd="3"
            sizeXs="3"
            class="ion-text-center"
            >0.00062428 (€10.00)</ion-col
          >
        </ion-row>
      </ion-grid>
      <ExploreContainer name="Tab 3 page" />
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
import ExploreContainer from '@/components/ExploreContainer.vue';
import { onMounted, ref } from 'vue';
import PriceService from '@/services/PricesService';

const prices = ref<number[][]>([]);

// TODO: remove from here, get from pinia state
onMounted(async () => {
  try {
    prices.value = await PriceService.getPrices();
    console.log('prices', prices.value);
  } catch (e) {
    console.error('Failed to fetch Bitcoin market chart', e);
  }
});
</script>

<style scoped>
.even-row {
  background-color: rgb(250, 232, 232);
}

.odd-row {
  background-color: white;
}
</style>
