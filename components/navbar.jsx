const Navbar = () => {
  return (
    <nav className="flex justify-around h-14 bg-white text-black  items-center mt-4">
      <div className="flex gap-6 items-center">
        <h1 className="font-bold text-lg ">Brainwave.io</h1>
        <ul className="flex gap-10 ">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>

      <button className="font-bold text-white bg-indigo-700 px-4 py-2.5 rounded-lg">
        Get started a project
      </button>
    </nav>
  );
};
export default Navbar;
