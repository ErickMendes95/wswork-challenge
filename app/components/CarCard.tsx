import React from 'react';
import Image from 'next/image';
import { Car } from '../types/Car';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div className="border border-gray-400 mt-4 mx-3 flex justify-evenly items-center">
      <div className="w-48 h-36 relative">
        <Image
          src="/carIcon.jpeg"
          alt={car.nome_modelo}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="my-2 flex flex-col justify-between gap-2">
        <p className="text-xl font-bold">{car.nome_modelo}</p>
        <p><span className='font-bold'>Valor:</span> R$ {(car.valor*1000).toLocaleString('pt-BR')}</p>
        <button className="bg-blue-400 hover:bg-blue-600 text-white cursor-pointer px-4 py-2" onClick={onClick}>
          + Informações
        </button>
      </div>
    </div>
  );
};

export default CarCard;
