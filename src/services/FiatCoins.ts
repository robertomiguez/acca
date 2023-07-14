class FiatCoinsService {
  static async getFiatCoins(lang = 'en') {
    return [
      { id: 'USD', symbol: '$', name: lang === 'en' ? 'Dollar' : 'Dólar' },
      { id: 'EUR', symbol: '€', name: 'Euro' },
      {
        id: 'GBP',
        symbol: '£',
        name: lang === 'en' ? 'British pound' : 'Libra Esterlina',
      },
      {
        id: 'BRL',
        symbol: 'R$',
        name: lang === 'en' ? 'Brazilian Real' : 'Real',
      },
    ];
  }
}

export default FiatCoinsService;
