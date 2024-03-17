const Address = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-28">
      <div className="md:grid flex flex-col gap-12 ml-12 md:ml-0 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-medium">Our Office</h2>
          <h1 className="text-2xl font-bold"><a href="https://maps.app.goo.gl/HefA9zvWmwEJjHaw9" target="_blank" rel="noreferrer noopener"> G-334, PREET VIHAR DELHI</a></h1>
          <p className="text-lg tracking-wide font-medium">
            NEW DELHI - 110092
          </p>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.7910005311488!2d77.29997791251274!3d28.640146759952568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb783806ddf3%3A0xb7e2d24e7d0a8fc1!2sGRACE%20DECOR!5e0!3m2!1sen!2sin!4v1710654918735!5m2!1sen!2sin" width="600" height="450" style="border:0;"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

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
          <h1 className="text-2xl font-bold">info.gracedecore.com</h1>
          <p className="text-lg tracking-wide font-medium">
            Write Us For All Your Queries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
