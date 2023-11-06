import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "./categories";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
    </div>
  );
}
