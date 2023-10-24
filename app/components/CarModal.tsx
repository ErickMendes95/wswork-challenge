import React from 'react';
import { Car } from '../types/Car';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-70">
      <div className="bg-white border border-gray-300 p-4 w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">{car.nome_modelo}</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-right">
            <p><span className='font-bold'>Ano:</span></p>
            <p><span className='font-bold'>Combustível:</span></p>
            <p><span className='font-bold'>Número de Portas:</span></p>
            <p><span className='font-bold'>Cor:</span></p>
            <p><span className='font-bold'>Valor:</span></p>
          </div>
          <div className="text-left">
            <p>{car.ano}</p>
            <p>{car.combustivel}</p>
            <p>{car.num_portas}</p>
            <p>{car.cor}</p>
            <p>R$ {(car.valor * 1000).toLocaleString('pt-BR')}</p>
          </div>
        </div>
        <button className="w-full bg-red-400 hover:bg-red-600 text-white px-4 py-2 mt-4" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CarModal;