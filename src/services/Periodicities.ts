class PeriodicitiesService {
  static async getPeriodicities(lang = 'en') {
    return [
      { id: 1, name: lang === 'en' ? 'daily' : 'diariamente' },
      { id: 7, name: lang === 'en' ? 'weekly' : 'semanalmente' },
      { id: 14, name: lang === 'en' ? 'biweekly' : 'duas vezes por semana' },
      { id: 30, name: lang === 'en' ? 'monthly' : 'mensalmente' },
    ];
  }
}

export default PeriodicitiesService;
