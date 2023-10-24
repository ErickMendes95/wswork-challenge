"use client"
import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';
import CarCreateModal from '../components/CarCreateModal';
import { Car } from '../types/Car';
import carsJson from '../utils/carsJson.json';
import carsBrandJson  from '../utils/carsBrandJson.json';

const CarList: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let combinedCars: Car[] = [];
        if (filter === 'Toyota') {
          combinedCars = carsBrandJson.filter((car) => car.brand === 1);
        } else {
          combinedCars = [...carsJson, ...carsBrandJson].filter(
            (car, index, self) => index === self.findIndex((c) => c.id === car.id)
          );
        }
        setAllCars(combinedCars);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [filter]);

  const openModal = (car: Car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };  

  return (
    <div>
      <h1 className='font-bold text-2xl ml-3 pt-4'>Lista de Carros</h1>
      <div className='pt-4 ml-3'>
        <label htmlFor="filterSelector">Filtrar por marca: </label>
        <select className='w-32 text-center bg-blue-200'
          id="filterSelector"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">Todos</option>
          <option value="Toyota">Toyota</option>
        </select>
        <button
          className='ml-3 bg-blue-400 hover:bg-blue-600 text-white px-2 py-1 rounded'
          onClick={openCreateModal}
        >
          Adicionar Carro
        </button>
      </div>
      <div className="grid grid-cols-2">
        {allCars.map((car) => (
          <CarCard key={car.id} car={car} onClick={() => openModal(car)} />
        ))}
      </div>
      {selectedCar && <CarModal car={selectedCar} onClose={closeModal} />}
      {isCreateModalOpen && <CarCreateModal onClose={closeCreateModal} />}
    </div>
  );
};

export default CarList;
