if (!localStorage.getItem('przeglady')) {
  localStorage.setItem('przeglady', JSON.stringify([
    {
      id: 1,
      adres: "Armii Krajowej 2",
      typ: "budowlany",
      data: "2025-01-10",
      zarzadca: "TBS",
      wykonawca: "MA-KRU",
      status: "OK"
    },
    {
      id: 2,
      adres: "Kościuszki 10",
      typ: "gazowy",
      data: "2025-01-12",
      zarzadca: "Wspólnota",
      wykonawca: "MA-KRU",
      status: "USTERKI"
    }
  ]));
}
