import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  EB_Garamond,
  M_PLUS_Rounded_1c,
  M_PLUS_1,
  Nanum_Myeongjo,
  Nanum_Gothic,
  Handlee,
} from "next/font/google";

export const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-handlee",
});

export const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
});

export const notosjp = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosjp",
});

export const eb = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb",
});

export const mplus = M_PLUS_Rounded_1c({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

export const mplus1 = M_PLUS_1({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus1",
});

export const nanum = Nanum_Myeongjo({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum",
});

export const nanumgo = Nanum_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanumgo",
});

export const fonts = [
  handlee,
  notojp,
  notosjp,
  eb,
  mplus,
  mplus1,
  nanum,
  nanumgo,
];
