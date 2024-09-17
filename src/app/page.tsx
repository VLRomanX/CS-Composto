
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-700 via-green-500 to-green-600 text-white font-sans">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          CS <span className="text-[hsl(150,100%,70%)]">Composto</span>
        </h1>

        {/* Área de login do usuário */}
        <div className="flex items-center justify-center mb-12 space-x-6">
          {/* Ícone do usuário */}
          <div className="w-24 h-24 border-4 border-green-400 rounded-full flex items-center justify-center">
            <img src="/image-removebg-preview.png" alt="User Icon" className="w-12 h-12" />
          </div>

          {/* Input e botões de login */}
          <div className="ml-4 flex flex-col items-start space-y-4">
            <input
              type="text"
              placeholder="Nome de Usuário"
              className="px-6 py-3 rounded-full bg-green-300 text-green-900 font-semibold placeholder-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex space-x-6">
              <button className="text-white hover:underline">Cadastrar</button>
              <button className="text-white hover:underline">Logar</button>
            </div>
          </div>
        </div>

        {/* Botões de ação para salas */}
        <div className="flex space-x-6 mt-8">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-full shadow-md">
            Procurar Sala
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md">
            Criar Sala
          </button>
        </div>
      </div>
    </main>
  );
}
