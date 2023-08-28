import { defineStore, storeToRefs } from 'pinia';
import { Transaction } from '@/types/TransactionType';
import moment from 'moment';
import { ref } from 'vue';
import { useSettingsStore } from '@/stores/settingsStore';

export const useTransactionStore = defineStore('transactionStore', () => {
  const prices = ref<number[][]>([]);
  const purchaseAcc = ref<number>(0);
  const quantityCryptoAcc = ref<number>(0);
  const profit = ref<number>(0);
  const transactions = ref<Transaction[]>([]);
  const settingsStore = useSettingsStore();

  const { purchaseAmount, periodicity } = storeToRefs(settingsStore);

  const fillTransactions = async () => {
    try {
      purchaseAcc.value = 0;
      quantityCryptoAcc.value = 0;
      let quantityCrypto = 0;
      let dayPrice = 0;
      transactions.value = [];
      prices.value.forEach((price: number[], index: number) => {
        if (
          periodicity.value?.id === 1 || // if is diary print all
          index % (periodicity.value?.id as number) === 0 //  or calc the periodicity
        ) {
          dayPrice = price[1];
          purchaseAcc.value += +purchaseAmount.value;
          quantityCrypto = +purchaseAmount.value / +price[1];
          quantityCryptoAcc.value += +quantityCrypto;
          transactions.value.push({
            dateTime: moment(price[0]).format('DD/MM/YY'),
            price: dayPrice,
            purchaseAcc: purchaseAcc.value,
            quantityCrypto,
            quantityCryptoAcc: quantityCryptoAcc.value,
            valueCryptoAcc: quantityCryptoAcc.value * dayPrice,
          });
        }
      });
      profit.value = quantityCryptoAcc.value * dayPrice - purchaseAcc.value;
      // transactions.value.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));
      // console.table(transactions.value);
    } catch (error) {
      return error;
    }
  };

  return {
    prices,
    transactions,
    purchaseAcc,
    quantityCryptoAcc,
    profit,
    fillTransactions,
  };
});
