import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import img from '../../assets/images/restable.jpg';
import { Tabs } from 'antd';
import Meals from './Meals';
import { FaArrowLeft } from "react-icons/fa";

const Menu = () => {
  const params = useParams();
  const navigate = useNavigate();  // useNavigate hook'ini chaqiramiz

  console.log(params.client_id);

  const items = [
    {
      key: 1,
      label: 'Ovqatlar',
      children: <Meals />,
    },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <button
        className="forsticky flex fixed items-center gap-2 px-4 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-purple-600 rounded-lg 
                      shadow-lg hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95"
        onClick={() => navigate(-1)}  // navigate() ni ishlatish to'g'ri bo'ladi
      >
        <FaArrowLeft /> Orqaga
      </button>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
        <img className="w-32 sm:w-48 rounded-2xl" src={img} alt="stol img" />
        <span className="bg-green-500 p-2 text-white rounded-2xl text-sm sm:text-base">
          {params.client_id}
        </span>
      </div>

      <div className="mt-4 w-full">
        <Tabs items={items} centered />
      </div>
    </div>
  );
};

export default Menu;
