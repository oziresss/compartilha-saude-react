import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import FormUsuario from './pages/FormUsuario';
import RecuperaSenha from './pages/RecuperaSenha';
import ProdutosDetalhes from './pages/ProdutosDetalhes';
import FormProduto from './pages/FormProduto';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path="/FormUsuario" element={<FormUsuario/>}></Route>
          <Route path="/RecuperaSenha" element={<RecuperaSenha/>}></Route>
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/Produtos/:id' element={<ProdutosDetalhes />} />
          <Route path="/FormProduto" element={<FormProduto/>}></Route>
        </Routes>
      </Router>
    </div>
  )
};

export default App;
