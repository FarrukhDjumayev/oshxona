import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { meals, salads, drinks } from '../../constants/index';
import { Typography, Card, Button } from 'antd';
import { CoffeeOutlined, AppstoreOutlined, ShoppingOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Meals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const mealsWithId = meals.map((meal, i) => ({ ...meal, id: `meal-${i}` }));
  const saladsWithId = salads.map((salad, i) => ({ ...salad, id: `salad-${i}` }));
  const drinksWithId = drinks.map((drink, i) => ({ ...drink, id: `drink-${i}` }));

  return (
    <div className="container mx-auto p-6">
      
      <Title level={2} style={{ color: '#389e0d', marginBottom: '20px' }}>
        <AppstoreOutlined /> Taomlar
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {mealsWithId.map((meal) => (
          <Card 
            key={meal.id} 
            hoverable 
            className="rounded-2xl" 
            data-aos="fade-up"
            cover={<img src={meal.image} alt={meal.name} className="h-64 object-cover rounded-t-2xl" />}
          >
            <Title level={4}>{meal.name}</Title>
            <p className="font-bold text-green-500">{meal.price} UZS</p>
            <div className='flex justify-center gap-3 items-center'>
              <Button icon={<MinusOutlined/>}/>
              <span className='text-center text-lg font-semibold'>0</span>
              <Button icon={<PlusOutlined/>}/>
            </div>
          </Card>
        ))}
      </div>

      <Title level={2} style={{ color: '#1890ff', marginBottom: '20px' }}>
        <ShoppingOutlined /> Salatlar
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {saladsWithId.map((salad) => (
          <Card 
            key={salad.id} 
            hoverable 
            data-aos="fade-up"
            cover={<img src={salad.image} alt={salad.name} className="h-64 object-cover rounded-t-2xl" />}
          >
            <Title level={4}>{salad.name}</Title>
            <p className="font-bold">{salad.price} UZS</p>
            <div className='flex justify-center gap-3 items-center'>
              <Button icon={<MinusOutlined/>}/>
              <span className='text-center text-lg font-semibold'>0</span>
              <Button icon={<PlusOutlined/>}/>
            </div>
          </Card>
        ))}
      </div>

      <Title level={2} style={{ color: '#cf1322', marginBottom: '20px' }}>
        <CoffeeOutlined /> Ichimliklar
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drinksWithId.map((drink) => (
          <Card
            key={drink.id}
            hoverable
            data-aos="fade-up"
            className="shadow-2xl shadow-green-600"
            cover={
              <img
                src={drink.image} 
                alt={drink.name} 
                className="h-64 object-cover rounded-t-2xl"
              />
            }
          >
            <div className="text-center">
              <Title level={4} className="text-gray-800">{drink.name}</Title>
              <p className="text-lg font-bold text-green-600">{drink.price} UZS</p>
            </div>
      
            <div className="flex justify-center gap-4 items-center mt-3">
              <Button 
                icon={<MinusOutlined />}
              />
              <span className="text-lg font-semibold w-8 text-center">0</span>
              <Button 
                icon={<PlusOutlined />}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Meals;
