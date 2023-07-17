import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settingsStore', {
  state: () => ({
    purchaseAmount: 0,
    cryptoCoin: {},
    fiatCoin: {},
    periodicity: {},
    starting: {},
  }),
  persist: true,
});
