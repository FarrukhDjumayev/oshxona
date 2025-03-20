import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import img from "../../assets/images/restable.jpg";

const RootGirgitton = () => {
  return (
    <div className="container mx-auto w-[85%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item}>
            <Link to={`/client/${item}`}>
              <div className="shadow-2xl shadow-amber-400 rounded-2xl">
              <Image className="w-full rounded-2xl h-[300px]" src={img} preview={false} />
              <p className="p-2">Stol {item}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RootGirgitton;
