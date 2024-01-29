import add_card from "./assets/addcard_form.png";
import trip_table from "./assets/trip_table.png";
import fuel_table from "./assets/fuel_table.png";
import generate_pdf from "./assets/generate_pdf2.png";

export const howItWorksData = [
  {
    number: "01",
    header: "Create card",
    paragraph:
      "Add card with random or specific number that can contains numbers and letters",
    image: add_card,
  },
  {
    number: "02",
    header: "Add trips",
    paragraph:
      "Add visited places from point A to point B, application will count mileage from each road.",
    image: trip_table,
  },
  {
    number: "03",
    header: "Add refuelling data (optional)",
    paragraph:
      "Write all refuelling points visited during your trip - petrol and adBlue if it was used. At the end summary will be counted.",
    image: fuel_table,
  },
  {
    number: "04",
    header: "Generate PDF",
    paragraph:
      "Open first, second or both pages. All trips with created cargo’s information, refuelling are formatted to clean table, your truck information signed via your email are also fetched from server and put into PDF.",
    image: generate_pdf,
  },
];
