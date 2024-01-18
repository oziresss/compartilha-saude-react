import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function RecuperaSenha() {
  const [error, setError] = useState(null);

  const validateCredentials = async (email) => {
    try {
        const response = await fetch("https://compartilhasaude-backend-di7vbasruq-rj.a.run.app/api/User/SendEmailForgetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
   
        if (response.ok) {
          // Se a requisição foi bem-sucedida, redirecione o usuário para a página principal
          window.location.href = "/Home";
        } else if (response.status === 401) {
          // Se a requisição falhou com status 401 (Unauthorized), ignore a mensagem de erro e redirecione para a página de login
          //setError("Não foi possível encontrar suas credenciais. Por favor, tente novamente.");
        } else {
          // Se a requisição falhou com qualquer outro status, mostre uma mensagem de erro genérica
          const errorData = await response.json();
          //setError(errorData.message);
        }
    } catch (error) {
        // Se houve algum erro durante a requisição, mostre uma mensagem de erro
        //setError("Erro ao validar as credenciais. Por favor, tente novamente.");
    }
   };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Recuperação de Senha
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={(e) => {
                                                                  e.preventDefault();
                                                                  const email = e.target.email.value;
                                                                  validateCredentials(email);
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
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar
                </button>
              </div>
              <p className="mt-5 text-center text-sm text-gray-500">
                Já tem uma conta?{' '}
                  <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Faça login
                  </Link>
              </p>
            </form>
          </div>
        </div>
    )
  }  