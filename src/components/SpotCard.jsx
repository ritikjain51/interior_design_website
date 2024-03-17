const SpotCard = ({ image, h1, p }) => {
  return (
    <div className="flex flex-col gap-8">
      <img className=" w-20 h-20" src={image} alt="/" />
      <h1 className=" md:text-left text-center text-3xl font-bold ">{h1}</h1>
      <p className="text-lg  text-left font-light">{p}</p>
    </div>
  );
};

export default SpotCard;
