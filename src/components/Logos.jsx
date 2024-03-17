import logo1 from '../assets/gd-logo1.png';
import logo2 from '../assets/gd-logo1.png';
import logo3 from '../assets/gd-logo1.png';

const Logos = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h1 className="text-xl font-bold">Launched Projects:</h1>
        <img className="max-w-[120px] " src={logo1} alt="/" />
        <img className="max-w-[120px] " src={logo2} alt="/" />
        <img className="max-w-[120px] " src={logo1} alt="/" />
        <img className="max-w-[120px] " src={logo3} alt="/" />
        <img className="max-w-[120px] " src={logo1} alt="/" />
      </div>
    </div>
  );
};

export default Logos;
