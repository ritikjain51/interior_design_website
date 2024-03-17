import Address from './components/Address';
import Background from './components/Background';
import ContactForm from './components/ContactForm';
import Details from './components/Details';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ShowCase from './components/ShowCase';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className="w-full">
      <Hero />
      <Details />
      <Logos />
      <Spotlight />
      <Background />
      <ContactForm />
      <ShowCase />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
