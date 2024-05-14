export const singleFeatureData = [
  {
    id: "cargo",
    subheader: "Ładunek",
    header: "Grupowanie tras ze względu na ładunek",
    description1:
      "System dodaje trasy, które obejmują punkty A i B. Kierowca załadowuje towar na początku trasy, a następnie przewozi go do miejsca docelowego.",
    description2:
      "Użytkownik wybiera odpowiednie punkty i tworzy ładunek, który składa się z nazwy, tonarzu oraz temperatury.",
    explanation:
      "Wszystkie dane są opcjonalne, podobnie jak notatki dotyczące ładunku, co oznacza, że użytkownik może je dodać, ale nie jest to konieczne.",
    description3:
      "Dodane ładunki są automatycznie sformatowane na podstawie przypisanych tras. Użytkownik ma możliwość ich edycji lub usunięcia. Następnie, w identycznym formacie, są one eksportowane do pliku PDF, który można wygenerować.",
    images: [
      {
        uri: "src/assets/features/cargo1.png",
        caption: "Zaznacz punkty trasy, aby stworzyć nową grupę.",
      },
      {
        uri: "src/assets/features/cargo2.png",
        caption: "Punkty bez ładunku można dodać do istniejącej grupy.",
      },
      {
        uri: "src/assets/features/cargo3.png",
        caption:
          "Punkty można usuwać z grup (ładunków) i dodawać do nowych lub istniejących.",
      },
      {
        uri: "src/assets/features/cargo4.png",
        caption: "Grupę można edytować - zmieniać lub usuwać aktualne dane.",
      },
    ],
    videoSrc: "src/assets/features/videos/PTD Lite - Cargo.mp4",
  },
  {
    id: "invoice",
    header: "Invoice header",
    description: "Lorem ipsum",
    image: "image url",
    video: "video url",
  },
  {
    id: "statistics",
    header: "Statistics header",
    description: "Lorem ipsum",
    image: "image url",
    video: "video url",
  },
  {
    id: "archive",
    header: "Archive header",
    description: "Lorem ipsum",
    image: "image url",
    video: "video url",
  },
  {
    id: "update",
    header: "Updates header",
    description: "Lorem ipsum",
    image: "image url",
    video: "video url",
  },
];
