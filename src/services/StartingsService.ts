class StartingsService {
  static async getStartings(lang = 'en') {
    return [
      { id: 30, name: lang === 'en' ? 'one month ago' : 'um mês atrás' },
      { id: 183, name: lang === 'en' ? 'six months ago' : 'seis meses atrás' },
      { id: 365, name: lang === 'en' ? 'one year ago' : 'um ano atrás' },
      { id: 730, name: lang === 'en' ? 'two years ago' : 'dois anos atrás' },
    ];
  }
}

export default StartingsService;
