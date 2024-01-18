import Logo from './img/Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function App() {
  const [error, setError] = useState(null);

  const validateCredentials = async (email, password) => {
    try {
        const response = await fetch("https://compartilhasaude-backend-di7vbasruq-rj.a.run.app/api/User/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
   
        if (response.ok) {
          // Se a requisição foi bem-sucedida, redirecione o usuário para a página principal
          window.location.href = "/Home";
        } else if (response.status === 401) {
          // Se a requisição falhou com status 401 (Unauthorized), ignore a mensagem de erro e redirecione para a página de login
          setError("Não foi possível encontrar suas credenciais. Por favor, tente novamente.");
        } else {
          // Se a requisição falhou com qualquer outro status, mostre uma mensagem de erro genérica
          const errorData = await response.json();
          setError(errorData.message);
        }
    } catch (error) {
        // Se houve algum erro durante a requisição, mostre uma mensagem de erro
        setError("Erro ao validar as credenciais. Por favor, tente novamente.");
    }
   };

  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça login em sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={(e) => {
                                                                  e.preventDefault();
                                                                  const email = e.target.email.value;
                                                                  const password = e.target.password.value;
                                                                  validateCredentials(email, password);
                                                                  }}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço de email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="text-sm">
                  <Link to="/RecuperaSenha" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu sua senha?</Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              to="/Home"
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
        Não é um membro?{' '}
          <Link to="/FormUsuario" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}
