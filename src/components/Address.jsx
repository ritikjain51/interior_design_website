const Address = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-28">
      <div className="md:grid flex flex-col gap-12 ml-12 md:ml-0 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-medium">Our Office</h2>
          <a href="https://maps.app.goo.gl/HefA9zvWmwEJjHaw9" target="_blank" rel="noreferrer noopener">
          <h1 className="text-2xl font-bold"> G-334, PREET VIHAR DELHI</h1>
          <p className="text-lg tracking-wide font-medium">
            NEW DELHI - 110092
          </p>
          </a>

        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-medium">Reach Us On</h2>
          <h1 className="text-2xl font-bold"><a href="tel:+919599277565">+91-9599277565</a></h1>
          <p className="text-lg tracking-wide font-medium">
            Call For Inquiries
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-medium">Email Us At</h2>
          <h1 className="text-2xl font-bold">info.gracedecor.com</h1>
          <p className="text-lg tracking-wide font-medium">
            Write Us For All Your Queries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
