import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Gallery from "../../Components/Gallery/Gallery";
import PaymentMethods from "../../Components/Paymentmethods/Paymentmethods";
import LocationBanner from "../../Components/LocationBanner/LocationBanner";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <PaymentMethods />
      <LocationBanner />
      <Footer />
    </>
  );
}
