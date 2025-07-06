import {
  Merriweather,
  Merriweather_Sans,
  Noto_Sans,
  Noto_Serif,
} from "next/font/google";

export const merriweather = Merriweather({
  variable: "--font-merrieweather",
  weight: ["400", "700", "300"],
  subsets: ["latin"],
});

export const merriweatherSans = Merriweather_Sans({
  variable: "--font-merrieweather-sans",
  weight: ["400", "700", "300", "500"],
  subsets: ["latin"],
});

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "700", "300", "200"],
  subsets: ["latin"],
});

export const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  weight: ["400", "700", "300", "200"],
  subsets: ["latin"],
});
