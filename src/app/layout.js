import { Murecho } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/layout/navbar";

const murecho = Murecho({ subsets: ["latin"] });

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={murecho.className}>
      <Navbar />
      <div className="h-screen">
        <div className="h-full pt-[84px] pb-4">{children}</div>
      </div>
    </body>
  </html>
);

export const metadata = {
  title: "ShareTrip",
  description: "Bangladesh's leading online travel agency.",
};

export default RootLayout;
