import Image from "next/image";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Encrypted from "./components/Encrypted";
import Whatwedo from "./components/Whatwedo";
import Slide from "./components/Slide";
import Features from "./components/Features";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Fq from "./components/Fq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Encrypted />
      <Whatwedo />
      <Slide />
      <Features />
      <Whyus />
      <Testimonials />
      <Fq />
      <Footer />
    </main>
  );
}
