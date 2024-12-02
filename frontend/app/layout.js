import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LotteryInfo from "./components/LotteryInfo";
import ConnectWallet from "./components/ConnectWallet";
import ActionButtons from "./components/ActionButtons"; 
import CurrentPlayers from "./components/CurrentPlayers";
import PreviousWinners from "./components/PreviousWinners";
import LotteryPotCard from "./components/LotteryPotCard";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
require('dotenv').config()

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lottery - A.A Demo",
  description: "Account Abstraction Demo",
};

const client = createThirdwebClient({ clientId: '5aaa21e877f5f6045408ccd638dace6c' });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThirdwebProvider>
        <body className="bg-custom min-h-screen">
          <Header />
          <div className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </div>
        </body>
      </ThirdwebProvider>
    </html>
  );
}