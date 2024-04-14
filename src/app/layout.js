import { Jost, Raleway } from "next/font/google";
import "./globals.css";
import { NavProvider } from "./contexts/navcon";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${jost.variable} ${raleway.variable} `}>
        <NavProvider>{children}</NavProvider>
      </body>
    </html>
  );
}
