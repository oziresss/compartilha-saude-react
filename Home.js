import Logo from '../img/Logo.png';
import Doacao from '../img/doacao.png';
import { Link } from 'react-router-dom';

  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // More posts...
  ]

export default function Home() {
    return (
        <header>
            <nav className="bg-white border-gray-200 white:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={Logo} className="h-10" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap white:text-white">Compartilha Saúde</span>
                </a>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="#"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white white:bg-gray-800 md:white:bg-gray-900 white:border-gray-700">
                    <li>
                      <Link to="/Home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                        Home
                      </Link>
                    </li>                  
                    <li>
                      <Link to="/Produtos" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                        Produtos
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                        Contatos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <section className="bg-white lights:bg-gray-900">
            <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center mr-auto lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-dark">
                Doar é mais que um ato, é um elo de solidariedade
                </h1>
                <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Nós da Compartilha Saúde, acreditamos que o acesso à saúde é um direito universal. Nossa missão é transformar vidas por meio da doação responsável e eficiente de equipamentos médicos, construindo pontes entre a esperança e a cura em comunidades carentes ao redor do mundo.
                </p>
                <a
                    href="#"
                    className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-blue-700"
                >
                    Iniciar
                    <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </a>
                <Link
                    to="/FormProduto"
                    className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Doar-se
                </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Doacao} alt="doacao" />
                </div>
            </div>
            </section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    

    <footer class="bg-white white:bg-gray-900">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            <img class="w-auto h-7" src="" alt="" />
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <Link href="/Home" class="text-sm text-gray-600 transition-colors duration-300 text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Home
            </Link>

            <Link href="/Produtos" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Produtos
            </Link>

            <Link href="/Contatos" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Contatos
            </Link>
        </div>

        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023. </p>
    </div>
</footer>
    </header>
    )
}