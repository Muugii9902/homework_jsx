const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-24">
      <div className="flex justify-center items-center pb-24 gap-96 ">
        <div className="w-1/4">
          <h2 className="text-2xl  font-bold">
            Ready to launch your next project?
          </h2>
          <p className="text-slate-500 ">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div>
          <button className="font-bold text-white bg-indigo-700 px-4 py-2.5 rounded-lg">
            Get started a project
          </button>
        </div>
      </div>
      <div className="border-b-2 mb-24 border-slate-600 opacity-50 mx-96"></div>
      <div className="flex justify-center gap-80">
        <div>
          <div className="w-64 ">
            <h1 className="font-bold text-2xl mb-9">Brainwave.io</h1>
            <p className="">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>

        <div className="flex gap-32">
          <div>
            <h1 className="opacity-50">Company</h1>
            <ul className="">
              <li className="my-2">About us</li>
              <li>Contact us</li>
              <li className="my-2">Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h1 className="opacity-50">Product</h1>
            <ul>
              <p className="my-2">Features</p>
              <p>Pricing</p>
              <p className="my-2">News</p>
              <p>Help desk</p>
              <p className="my-2">Support</p>
            </ul>
          </div>
          <div>
            <h1 className="opacity-50">Services</h1>
            <ul>
              <p className="my-2">Digital Marketing</p>
              <p className="my-2">Content Writing</p>
              <p className="my-2">SEO for Business</p>
              <p className="my-2">UI Design</p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
