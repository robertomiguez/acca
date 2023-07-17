class PriceService {
  static async getPrices() {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=183&interval=daily',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { prices } = await response.json();
    return prices;
  }
}

export default PriceService;
