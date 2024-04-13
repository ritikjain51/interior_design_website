import Address from '../components/Address';
import Enquiry from '../components/Enquiry';
import ContactForm from '../components/ContactForm';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Projects from '../components/Projects';
import Spotlight from '../components/Spotlight';

function Home() {
  return (
    <div className="w-full">
      <Hero
        title="Grace Decor"
        subtitle="Interior - Construction"
        description="Designing with grace, building with purpose – where every eco-friendly choice is a step towards a sustainable future."
        class_name="main_image"
      />
      <Details />
      {/* <Logos /> */}
      <Spotlight />
      <Enquiry />
      <ContactForm />
      <Projects />
      <Address />
      <Footer />
    </div>
  );
}

export default Home;
