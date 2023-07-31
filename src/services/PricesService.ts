class PriceService {
  static async getPrices(
    cryptoCoinId: string,
    fiatCoinId: string,
    startingId: number,
  ): Promise<number[][]> {
    const url =
      `https://api.coingecko.com/api/v3/coins/${cryptoCoinId}/` +
      `market_chart?vs_currency=${fiatCoinId}&days=${startingId}&interval=daily`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { prices } = await response.json();
    return prices;
  }
}

export default PriceService;
