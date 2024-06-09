import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  EB_Garamond,
  M_PLUS_Rounded_1c,
  M_PLUS_1,
  Nanum_Myeongjo,
  Nanum_Gothic,
  Handlee,
  Gothic_A1,
} from "next/font/google";

export const handlee = Handlee({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-handlee",
});

export const notojp = Noto_Sans_JP({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
});

export const notosjp = Noto_Serif_JP({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosjp",
});

export const eb = EB_Garamond({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb",
});

export const mplus = M_PLUS_Rounded_1c({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus",
});

export const mplus1 = M_PLUS_1({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mplus1",
});

export const nanum = Nanum_Myeongjo({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum",
});

export const nanumgo = Nanum_Gothic({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanumgo",
});

export const gothic = Gothic_A1({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gothic",
});

export const fonts = [
  "notosjp",
  "notojp",
  "mplus",
  "nanum",
  "nanumgo",
  "eb",
  "mplus1",
  "gothic",
  "handlee",
];

export type FontKey =
  | "notosjp"
  | "notojp"
  | "mplus"
  | "nanum"
  | "nanumgo"
  | "eb"
  | "mplus1"
  | "gothic"
  | "handlee";

export const fontNames = {
  handlee: "Handlee",
  notojp: "Noto Sans JP",
  notosjp: "Noto Serif JP",
  eb: "EB Garamond",
  mplus: "M PLUS Rounded 1c",
  mplus1: "M PLUS 1",
  nanum: "Nanum Myeongjo",
  nanumgo: "Nanum Gothic",
  gothic: "Gothic A1",
};
