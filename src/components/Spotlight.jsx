import logo1 from '../assets/design.png';
import logo2 from '../assets/plan.png';
import logo3 from '../assets/aminities.png';
import SpotCard from './SpotCard';

const Spotlight = () => {
  return (
    <div id="about" className="max-w-[1200px] mx-auto py-32">
      <div className="w-ful flex flex-col gap-6 items-center ">
        <h1 className="mx-auto text-3xl font-bold ">Construction Spotlight</h1>
        <div className="border  border-[#ff7a3d] w-52"></div>
      </div>
      <div className="md:grid flex flex-col md:grid-cols-3 gap-20 place-items-center pt-28">
        <div>
          <SpotCard
            image={logo1}
            h1={'Design Built'}
            p={
              'Nullam, cursus lacus assumenda, laboriosam. Laudantium per esse occaecati. Sociis veritatis velit commo.'
            }
          />
        </div>
        <div>
          <SpotCard
            image={logo2}
            h1={'Eco Friendly'}
            p={
              'Nullam, cursus lacus assumenda, laboriosam. Laudantium per esse occaecati. Sociis veritatis velit commo.'
            }
          />
        </div>
        <div>
          <SpotCard
            image={logo3}
            h1={'Modern Amenities'}
            p={
              'Nullam, cursus lacus assumenda, laboriosam. Laudantium per esse occaecati. Sociis veritatis velit commo.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
