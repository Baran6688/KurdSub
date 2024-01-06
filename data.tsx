type navShape = {
  title: string;
  sublinks: { title: string; href: string }[];
  href: string;
}[];

export const navlinks: navShape = [
  { title: "سەرەتا", sublinks: [], href: "" },
  {
    title: "فیلم",
    sublinks: [
      { title: "هۆڵیوود", href: "" },
      { title: "بۆڵیوود", href: "" },
    ],
    href: "",
  },
  {
    title: "زنجیرە",
    sublinks: [
      {
        title: "باشترینەکان",
        href: "",
      },
      {
        title: "خراپترینەکان",
        href: "",
      },
    ],
    href: "",
  },
  { title: "مانگا", sublinks: [], href: "" },
  { title: "زنجیرە فیلم", sublinks: [], href: "" },
  { title: "٢٥٠ی مێژوو", sublinks: [], href: "" },
  { title: "پێداچوونەوە", sublinks: [], href: "" },
  { title: "ستاف", sublinks: [], href: "" },
  { title: "دەربارە", sublinks: [{ title: "نازانم", href: "" }], href: "" },
];
