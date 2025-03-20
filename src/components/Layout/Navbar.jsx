import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto w-[85%] py-2 flex justify-end">
      <Link to="/login" className="kirish_button text-blue-500 hover:underline text-lg">
        Kirish
      </Link>
    </div>
  );
};

export default Navbar;
