<template>
  <ion-card>
    <canvas id="crypto-chart"></canvas>
  </ion-card>
</template>

<script setup lang="ts">
import { Chart, ChartItem, ChartConfiguration } from 'chart.js/auto';

import { IonCard } from '@ionic/vue';
import { onMounted, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '@/stores/transactionStore';
import { useSettingsStore } from '@/stores/settingsStore';

const transactionStore = useTransactionStore();
const { transactions } = storeToRefs(transactionStore);
const settingsStore = useSettingsStore();
const { cryptoCoin, fiatCoin } = storeToRefs(settingsStore);
let chart: Chart;

const chartData: ChartConfiguration = {
  type: 'line',
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
};

onMounted(() => {
  const canvasTag = document.getElementById('crypto-chart') as ChartItem;
  chart = new Chart(canvasTag, chartData) as Chart;
});

watchEffect(async () => {
  if (!transactions.value.length) return;

  const arrayOfDateTime: string[] = transactions.value.map(obj => obj.dateTime);
  const arrayOfPurchaseAcc: number[] = transactions.value.map(
    obj => obj.purchaseAcc,
  );
  const arrayOfValueCryptoAcc: number[] = transactions.value.map(
    obj => obj.valueCryptoAcc,
  );

  chartData.data.labels = arrayOfDateTime;

  chartData.data.datasets = [
    {
      label: `Invested (${fiatCoin.value?.id})`,
      backgroundColor: '#35B969',
      data: arrayOfPurchaseAcc,
      borderColor: '#35B969',
      pointBorderColor: '#35B969',
      pointBackgroundColor: '#FFFFFF',
    },
    {
      label: `Available ${cryptoCoin.value?.name} (${fiatCoin.value?.id})`,
      backgroundColor: '#10C7F4',
      data: arrayOfValueCryptoAcc,
      borderColor: '#10C7F4',
      pointBorderColor: '#10C7F4',
      pointBackgroundColor: '#FFFFFF',
    },
  ];
  chart?.update();
});
</script>

<style scoped>
canvas {
  padding-top: 0px;
}
</style>
