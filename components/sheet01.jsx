const Sheet01 = () => {
  return (
    <div className="bg-indigo-700 flex justify-center  text-center py-32 ">
      <div className="w-1/3">
        <h6 className="text-cyan-300 mb-8">Testimonial</h6>
        <p className="text-3xl text-white font-bold mb-10">
          “Simply the best. Better than all the rest. I’d recommend this product
          to beginners and advanced users.”
        </p>
        <div className="flex justify-center mb-4 ">
          <img
            src="/images/img2.png"
            alt=""
            className="w-20 h-20 rounded-full"
          />
        </div>

        <h5 className="text-white font-bold">Ian Klein</h5>
        <p className="text-cyan-100 mb-8">Digital Marketer</p>
      </div>
    </div>
  );
};
export default Sheet01;
