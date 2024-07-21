import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Sheet01 from "@/components/sheet01";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Sheet01 />
      <Footer />
    </main>
  );
}
