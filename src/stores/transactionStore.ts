import { defineStore, storeToRefs } from 'pinia';
import { Transaction } from '@/types/TransactionType';
import { format } from 'date-fns';
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
          (index % (periodicity.value?.id as number) === 0 && //  or calc the periodicity
            !(
              format(new Date(price[0]), 'ddMMyy') ===
              format(new Date(), 'ddMMyy')
            )) // do not add today into array
        ) {
          dayPrice = price[1];
          purchaseAcc.value += +(<number>purchaseAmount.value);
          quantityCrypto = +(<number>purchaseAmount.value) / +price[1];
          quantityCryptoAcc.value += +quantityCrypto;
          transactions.value.push({
            dateTime: format(new Date(price[0]), 'dd/MM/yy'),
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
