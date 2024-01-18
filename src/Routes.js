import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormUsuario from "./pages/FormUsuario";
import RecuperaSenha from "./pages/RecuperaSenha";
import Home from "./pages/Home";
import App from './App';
import FormProduto from "./pages/FormProduto";
import Produtos from "./pages/Produtos";
import Contatos from "./pages/Contatos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/FormUsuario" element={<FormUsuario/>}></Route>
                <Route path="/RecuperaSenha" element={<RecuperaSenha/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/FormProduto" element={<FormProduto/>}></Route>
                <Route path="/Produtos" element={<Produtos/>}></Route>
                <Route path="/Contatos" element={<Contatos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}