import Image from "next/image";
import HeroSectrion from "../Components/HeroSection";
import Container from "postcss/lib/container";
import Navbar from "../Components/Navbar";
import AboutSection from "@/Components/AboutSection";
import ProjectSection from "@/Components/ProjectSection";
import EmailSection from "@/Components/EmailSection";
import Footer from "@/Components/Footer"

export default function header(){
  return(
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
     <div className ="Container mx-auto py-4 px-12">
      <HeroSectrion/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      
      </div>
      <Footer/>
    </main>
  )
} 

 