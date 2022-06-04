import Navbar from "../components/NavBars/IndexNavbar";
import FooterSection from "../components/Sections/FooterSection";
import ImageSection from "../components/Sections/ImageSection";
import InfoSection from "../components/Sections/InfoSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <ImageSection />
        <InfoSection />
        <FooterSection />
      </main>
    </div>
  );
}
