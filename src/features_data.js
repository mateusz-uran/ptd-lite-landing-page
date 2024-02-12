import trip_group_image from "./assets/features/trip_group_big.png";
import truck_icon_svg from "./assets/features/icons/truck-svgrepo-com.svg";
import invoice_svg from "./assets/features/icons/invoice-bill-svgrepo-com.svg";
import invoice_image from "./assets/features/invoice_big.png";
import statistics_svg from "./assets/features/icons/statistics-analytics-svgrepo-com.svg";
import statistics_image from "./assets/features/stats_big.png";
import archive_svg from "./assets/features/icons/archives-file-svgrepo-com.svg";
import archive_image from "./assets/features/archive_big.png";
import update_svg from "./assets/features/icons/update-svgrepo-com.svg";
import update_image from "./assets/features/updates_big.png";

export const featuresData = [
  {
    Icon: truck_icon_svg,
    header: "Group trips with same cargo",
    description:
      "Added trips describes place where driver is loading cargo and then unloading it. Application allows user to group those trips with same cargo.",
    image: trip_group_image,
    video: "src/assets/features/videos/PTD Lite - Cargo.mp4",
  },
  {
    Icon: invoice_svg,
    header: "Create invoice with selected trips",
    description:
      "Select desired trips and count driven hours for invoice information. Choose from specific EURO rate straight from NBP, select hourly rate from country based on data provided by your employer and copy ready to use formula for your invoice.",
    image: invoice_image,
    video: "src/assets/features/videos/PTD Lite - Invoice.mp4",
  },
  {
    Icon: statistics_svg,
    header: "Statistics for drivers",
    description:
      "While creating new cards and adding trips in the background statistic mechanism is working. Card counter is increased or decreased, also subtracted kilometers from each trip are added and showed for you on chart.",
    image: statistics_image,
    video: "src/assets/features/videos/PTD Lite - Statistics.mp4",
  },
  {
    Icon: archive_svg,
    header: "Archived cards",
    description:
      "All created cards by you are stored in database so you can go back to your data at anytime with Archive feature. Pick specific date or range of dates when you created your cards and feel free to check what you've putted there, generate PDF etc.",
    image: archive_image,
    video: "src/assets/features/videos/PTD Lite - Archive.mp4",
  },
  {
    Icon: update_svg,
    header: "Updates information",
    description:
      "Built in updates information system. When new feature or minor update is added in navbar update icon will change color, you can then read all information from administrators what has changed or what was added and then mark those information as read. This helps to keep communication between users and administrators.",
    image: update_image,
    video: "src/assets/features/videos/PTD Lite - Updates.mp4",
  },
];
