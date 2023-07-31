import { defineStore } from 'pinia';
import { Coin } from '@/types/CoinType';
import { Periodicity } from '@/types/PeriodicityType';
import { Starting } from '@/types/StartingType';
import { ref } from 'vue';

export const useSettingsStore = defineStore(
  'settingsStore',
  () => {
    const purchaseAmount = ref<number>(0);
    const cryptoCoin = ref<Coin>();
    const fiatCoin = ref<Coin>();
    const periodicity = ref<Periodicity>();
    const starting = ref<Starting>();
    return { purchaseAmount, cryptoCoin, fiatCoin, periodicity, starting };
  },
  { persist: true },
);
