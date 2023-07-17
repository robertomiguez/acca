class CryptoCoinsService {
  static async getCryptoCoins() {
    return [
      { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
      { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
      { id: 'polkadot', symbol: 'DOT', name: 'Polkadot' },
    ];
  }
}

export default CryptoCoinsService;
