import trip_group_image from "./assets/trip_group.png";
import trip_group_video from "./assets/trip_group.mp4";
import truck_icon_svg from "./assets/truck-svgrepo-com.svg";
import invoice_svg from "./assets/invoice-bill-svgrepo-com.svg";
import invoice_image from "./assets/invoice.png";
import statistics_svg from "./assets/statistics-analytics-svgrepo-com.svg";
import statistics_image from "./assets/stats_wide.png";
import archive_svg from "./assets/archives-file-svgrepo-com.svg";
import archive_image from "./assets/archive.png";
import update_svg from "./assets/update-svgrepo-com.svg";
import update_image from "./assets/updates.png";

export const featuresData = [
  {
    Icon: truck_icon_svg,
    header: "Group trips with same cargo",
    description:
      "Added trips describes place where driver is loading cargo and then unloading it. Application allows user to group those trips with same cargo.",
    image: trip_group_image,
    video: trip_group_video,
  },
  {
    Icon: invoice_svg,
    header: "Create invoice with selected trips",
    description:
      "Select desired trips and count driven hours for invoice information. Choose from specific EURO rate straight from NBP, select hourly rate from country based on data provided by your employer and copy ready to use formula for your invoice.",
    image: invoice_image,
    video: undefined,
  },
  {
    Icon: statistics_svg,
    header: "Statistics for drivers",
    description:
      "While creating new cards and adding trips in the background statistic mechanism is working. Card counter is increased or decreased, also subtracted kilometers from each trip are added and showed for you on chart.",
    image: statistics_image,
    video: undefined,
  },
  {
    Icon: archive_svg,
    header: "Archived cards",
    description:
      "All created cards by you are stored in database so you can go back to your data at anytime with Archive feature. Pick specific date or range of dates when you created your cards and feel free to check what you\ve putted there, generate PDF etc.",
    image: archive_image,
    video: undefined,
  },
  {
    Icon: update_svg,
    header: "Updates information",
    description:
      "Built in updates information system. When new feature or minor update is added in navbar update icon will change color, you can then read all information from administrators what has changed or what was added and then mark those information as read. This helps to keep communication between users and administrators.",
    image: update_image,
    video: undefined,
  },
];
