import React, {createContext, useState, useEffect} from 'react';

export const ProdutoContexto = createContext();

const ProdutoProvider = ({children}) => {
  const [produtos, setProducts] = useState([])
  const requestOptions = {
    method: 'GET',
    headers: {
        'Context-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI2YTVhZDM1OC04NzdkLTQzZTAtOWRlMy0zZGMxZWFiMmEzNDAiLCJpYXQiOiIwMS8yMy8yMDI0IDAyOjQ3OjE1IiwiVXNlcklkIjoiOCIsIkRpc3BsYXlOYW1lIjoiT3ppcmVzIiwiVXNlck5hbWUiOiJvemlyZXNhbHZlczAwMDFAZ21haWwuY29tIiwiZXhwIjoxNzA2MDY0NDM1LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.GfoU2oFauMQe9AMlVzmh1BW31aj14ki1Ej1YluJKwOk'
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://compartilhasaude-backend-di7vbasruq-rj.a.run.app/api/DonationProduct', requestOptions)
        const data = await response.json();
        setProducts(data);
    };
    fetchProducts();
  }, [])
  return <ProdutoContexto.Provider value={{ produtos }}>{children}</ProdutoContexto.Provider>;
};

export default ProdutoProvider;