import Navbar from "./Navbar";

const Hero = (props) => {
  return (
    <main className="w-full">
      <div className={props.class_name}>
      <Navbar />
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className=" text-white px-5 md:px-0 pt-52">
            <h1 className="md:text-[5rem] text-[3rem] tracking-tight font-bold">
              {props.title}
            </h1>
            <h1 className="md:text-[5rem] text-[3rem] leading-[80px] font-bold">
            {props.subtitle}
            </h1>
            <p className="mt-16 text-wrap w-[300px] md:w-[600px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
