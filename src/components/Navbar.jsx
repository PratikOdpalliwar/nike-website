const Navbar = () => {
  return (
    <div>
      <nav className="h-14 w-full bg-white text-black px-10 py-2 flex flex-row space-x-4 justify-between items-center font-mono shadow-2xl transition-all duration-200 ease-in-out">
        <li className="flex flex-row list-none justify-between items-center cursor-pointer">
          <ul>
            <img className="h-8 w-16" src="./nike.webp" alt="NIKE" />
          </ul>
        </li>

        <li className="flex flex-row list-none justify-between items-center w-3/5 lg:w-1/2 ">
          <ul className="text-xl sm:text-md md:text-md cursor-pointer hover:text-sm transition-all duration-200 ease-in-out">
            MENU
          </ul>
          <ul className="text-xl sm:text-md md:text-md cursor-pointer hover:text-sm transition-all duration-200 ease-in-out">
            LOCATION
          </ul>
          <ul className="text-xl sm:text-md md:text-md cursor-pointer hover:text-sm transition-all duration-200 ease-in-out">
            ABOUT
          </ul>
          <ul className="text-xl sm:text-md md:text- cursor-pointer hover:text-sm transition-all duration-200 ease-in-out">
            CONTACT
          </ul>
        </li>

        <li className="flex flex-row list-none justify-between items-center">
          <button className="bg-rose-500 text-white px-1 py-1 h-7 w-16 flex justify-center items-center rounded hover:bg-black hover:text-white hover:h-8 hover:w-20 transition-all duration-200 ease-in-out">
            Login
          </button>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
