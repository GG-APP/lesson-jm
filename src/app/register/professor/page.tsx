'use client'
export default function RegisterProfessor() {
  return (
    <div className="flex flex-row">
      <div className="flex w-screen h-screen bg-gradient-to-r from-blue-500 to-blue-600 justify-center items-center">
        <div className="w-80">
          <div className="text-7xl font-bold select-none">
            Cadastro de Professor
          </div>
        </div>
      </div>
      <div className="flex flex-col w-screen h-screen bg-white justify-center items-center">
        <div className="flex w-full h-14 max-w-sm border-blue-500 border-2 rounded-md justify-center items-center">
          <div className="text-2xl font-bold text-black">
            Criar meu Perfil
          </div>
        </div>
        <div className="flex flex-wrap bg-white w-full border-2 mt-16 max-w-sm rounded-md shadow-2xl justify-center">
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mt-3 mb-2" for="username">
              Nome Completo
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              CPF
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              RG
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Data de Nascimento
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" placeholder="Username"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Idade
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Username"></input>
          </div>
          <div className="flex w-full mt-5 mb-5 max-w-xs items-center align-middle justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-56 rounded focus:outline-none focus:shadow-outline" type="button">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
