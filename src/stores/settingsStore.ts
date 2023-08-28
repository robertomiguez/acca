import { defineStore } from 'pinia';
import { Coin } from '@/types/CoinType';
import { Periodicity } from '@/types/PeriodicityType';
import { Starting } from '@/types/StartingType';
import { ref } from 'vue';

export const useSettingsStore = defineStore(
  'settingsStore',
  () => {
    const purchaseAmount = ref<number>();
    const cryptoCoin = ref<Coin>();
    const fiatCoin = ref<Coin>();
    const periodicity = ref<Periodicity>();
    const starting = ref<Starting>();
    const loading = ref<boolean>(false);
    return {
      purchaseAmount,
      cryptoCoin,
      fiatCoin,
      periodicity,
      starting,
      loading,
    };
  },
  { persist: true },
);
