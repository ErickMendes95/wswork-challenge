import React, { useState } from 'react';
import carsJson from '../utils/carsJson.json'

interface CarCreateModalProps {
  onClose: () => void;
}

const CarCreateModal: React.FC<CarCreateModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    ano: 0,
    combustivel: '',
    num_portas: 2,
    cor: '',
    nome_modelo: '',
    valor: 0,
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const novoCarro = {
            id: carsJson.length + 1,
            timestamp_cadastro: Date.now(),
            modelo_id: Math.floor(Math.random() * 100) + 1,
            ...formData
        };

        carsJson.push(novoCarro)
        
        setTimeout(() => {
            window.location.reload();
        }, 2000);
      } catch (error) {
        console.error('Erro ao enviar os dados para a API:', error);
      }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-75 z-50'>
      <div className='bg-white p-4 rounded shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>Adicionar Novo Carro</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='ano'>Ano:</label>
            <input
              type='number'
              id='ano'
              value={formData.ano}
              onChange={(e) => setFormData({ ...formData, ano: Number(e.target.value) })}
              className='border p-1 w-full'
              required
              min={1}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='combustivel'>Combustível:</label>
            <input
              type='text'
              id='combustivel'
              placeholder='Gasolina, Flex, Diesel'
              value={formData.combustivel}
              onChange={(e) => setFormData({ ...formData, combustivel: e.target.value })}
              className='border p-1 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='num_portas'>Número de Portas:</label>
            <select
              id='num_portas'
              value={formData.num_portas}
              onChange={(e) => setFormData({ ...formData, num_portas: Number(e.target.value) })}
              className='border p-1 w-full bg-white'
              required
            >
              <option value='2'>2</option>
              <option value='4'>4</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='cor'>Cor:</label>
            <input
              type='text'
              id='cor'
              value={formData.cor}
              onChange={(e) => setFormData({ ...formData, cor: e.target.value })}
              className='border p-1 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='nome_modelo'>Nome do Modelo:</label>
            <input
              type='text'
              id='nome_modelo'
              placeholder='Jetta, Fox, Gol'
              value={formData.nome_modelo}
              onChange={(e) => setFormData({ ...formData, nome_modelo: e.target.value })}
              className='border p-1 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='valor'>Valor:</label>
            <input
              type='number'
              id='valor'
              value={formData.valor}
              onChange={(e) => setFormData({ ...formData, valor: Number(e.target.value) })}
              className='border p-1 w-full'
              required
              min={1}
            />
          </div>
          <div className='flex justify-between'>
            <button type='submit' className='bg-blue-400 hover:bg-blue-600 text-white px-2 py-1 rounded'>
              Adicionar Carro
            </button>
            <button
              type='button'
              onClick={onClose}
              className='bg-red-400 hover:bg-red-600 text-white px-2 py-1 rounded'
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarCreateModal;
