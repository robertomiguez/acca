class PeriodicitiesService {
  static async getPeriodicities(lang = 'en') {
    return [
      { id: 1, name: lang === 'en' ? 'daily' : 'diariamente' },
      { id: 7, name: lang === 'en' ? 'weekly' : 'semanalmente' },
      {
        id: 14,
        name: lang === 'en' ? 'biweekly' : 'uma vez a cada duas semanas',
      },
      { id: 31, name: lang === 'en' ? 'monthly' : 'mensalmente' },
    ];
  }
}

export default PeriodicitiesService;
