// things related to data

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

import imdbi from "@/public/imdb.svg";
import rotten from "@/public/rotten.svg";
import metaI from "@/public/meta.svg";
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

import movie3 from "@/public/movie3.svg";
import movie2 from "@/public/movie2.png";
import movie1 from "@/public/movie1.png";
export const moviesList = [
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: "400000",
    image: movie1,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: "400000",
    image: movie3,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: "400000",
    image: movie2,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: "400000",
    image: movie3,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: "400000",
    image: movie1,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: 400000,
    image: movie2,
  },
  {
    name: "Shutter Island",
    genre: "ئەکشن",
    year: "2012",
    rates: [
      { name: "imdb", icon: imdbi, rate: "8.2" },
      { name: "rotten", icon: rotten, rate: "89" },
      { name: "meta", icon: metaI, rate: "80" },
    ],
    time: "100",
    views: 400000,
    image: movie3,
  },
] as const;

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import avatar from "@/public/alis.svg";

export const translator = {
  name: "ئەلیستا عەبدوڵا",
  icon: avatar,
  username: "@sanria",
  socials: [
    { title: "fb", icon: <FaFacebook /> },
    { title: "twitter", icon: <FaTwitter /> },
    { title: "discord", icon: <FaDiscord /> },
  ],
  movies: [
    { title: "", poster: movie1 },
    { title: "", poster: movie2 },
    { title: "", poster: movie3 },
    { title: "", poster: movie1 },
    { title: "", poster: movie2 },
    { title: "", poster: movie3 },
    { title: "", poster: movie1 },
    { title: "", poster: movie2 },
    { title: "", poster: movie3 },
  ],
} as const;
