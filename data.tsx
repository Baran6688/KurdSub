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

import imdbi from "@/public/imdb.png";
import rotten from "@/public/rotten.png";
import metaI from "@/public/meta.png";
import opp from "@/public/opp.png";

export const sliderFilms = [
  {
    title: "Oppenhimer",
    bg: opp,
    year: "2013",
    genres: ["رۆمانسی", "داروبەرد"],
    short:
      "لە داهاتوویەکی نزیکدا، مرۆڤایەتی هەستی بینین لە دەست دەدات، لەسەر کۆمەڵگەش پێویستە ڕێگەیەکی دیکە بگرنە بەر",
    rates: [
      {
        name: "Rotten",
        rate: "8.2",
        icon: rotten,
      },
      {
        name: "IMDB",
        rate: "8.2",
        icon: imdbi,
      },
      {
        name: "meta",
        rate: "50",
        icon: metaI,
      },
    ],
  },
  {
    title: "Oppenhimer",
    bg: opp,
    year: "2013",
    genres: ["رۆمانسی", "داروبەرد"],
    short:
      "لە داهاتوویەکی نزیکدا، مرۆڤایەتی هەستی بینین لە دەست دەدات، لەسەر کۆمەڵگەش پێویستە ڕێگەیەکی دیکە بگرنە بەر",
    rates: [
      {
        name: "Rotten",
        rate: "8.2",
        icon: rotten,
      },
      {
        name: "IMDB",
        rate: "8.2",
        icon: imdbi,
      },
      {
        name: "meta",
        rate: "50",
        icon: metaI,
      },
    ],
  },
  {
    title: "Oppenhimer",
    bg: opp,
    year: "2013",
    genres: ["رۆمانسی", "داروبەرد"],
    short:
      "لە داهاتوویەکی نزیکدا، مرۆڤایەتی هەستی بینین لە دەست دەدات، لەسەر کۆمەڵگەش پێویستە ڕێگەیەکی دیکە بگرنە بەر",
    rates: [
      {
        name: "Rotten",
        rate: "8.2",
        icon: rotten,
      },
      {
        name: "IMDB",
        rate: "8.2",
        icon: imdbi,
      },
      {
        name: "meta",
        rate: "50",
        icon: metaI,
      },
    ],
  },
] as const;
