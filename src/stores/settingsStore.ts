import { defineStore } from 'pinia';
import { Coin } from '@/types/CoinType';
import { Periodicity } from '@/types/PeriodicityType';
import { Starting } from '@/types/StartingType';

export const useSettingsStore = defineStore('settingsStore', {
  state: () => ({
    purchaseAmount: 0,
    cryptoCoin: {} as Coin,
    fiatCoin: {} as Coin,
    periodicity: {} as Periodicity,
    starting: {} as Starting,
  }),
  persist: true,
});
