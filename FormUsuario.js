import { Link } from 'react-router-dom'

export default function FormUsuario() {
  async function handleSubmit(event) {
    try {
      event.preventDefault();
  
      const formData = extractFormData(event.target);
  
      if (!validateFormData(formData)) {
        // Validation failed, display an error message to the user
        return;
      }
  
      const response = await sendApiRequest(formData);
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error during form submission:', error);
      // Display a generic error message to the user
    }
    window.location.href = '/';
  }
  
  function extractFormData(form) {
    return {
      username: form.firstname.value,
      lastName: form.lastname.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      typeUser: '1',
      addressNumber: form.streetaddress.value,
      cep: form.postalcode.value,
    };
  }
  
  function validateFormData(formData) {
    // Implement your validation logic here
    // Return true if validation passes, false otherwise
    // Display error messages to the user as needed
    return true;
  }
  
  async function sendApiRequest(data) {
    return await fetch('https://compartilhasaude-backend-di7vbasruq-rj.a.run.app/api/User/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

    return (
        <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
    <form onSubmit={handleSubmit}>
        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informações Pessoais</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use um endereço permanente onde você possa receber correspondências.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Sobrenome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                E-mail
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

            <div className="sm:col-span-4">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirmar Senha
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  autoComplete="confirmPassword"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              País
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Brazil</option>
                  <option>Argentina</option>
                  <option>Chile</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="streetaddress" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetaddress"
                  id="streetaddress"
                  autoComplete="streetaddress"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Estado / Província
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postalcode" className="block text-sm font-medium leading-6 text-gray-900">
                CEP / Código postal
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalcode"
                  id="postalcode"
                  autoComplete="postalcode"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link type="button" to="/" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
    </div>
    )
}