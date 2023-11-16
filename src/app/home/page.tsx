'use client'
import BUTTON_TYPE_1 from "@/components/BUTTON_TYPE_1";
export default function Home() {
  function Register() {
    console.log("Tentou Registrar");
  }

  function LogIn() {
    console.log("Tentou Logar");
  }

  return (
    <div className="flex bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="h-screen w-full">
        <div className="flex flex-row m-5 justify-between place-items-center select-none">
          <div className="title text-6xl hover:shadow-sm duration-300">
            lesson-jm
          </div>
          <div className="flex flex-row space-x-4">
            <BUTTON_TYPE_1 functionTrigger={Register} text="Registrar" />
            <BUTTON_TYPE_1 functionTrigger={LogIn} text="Entrar" />
          </div>
        </div>
      </div>
    </div>
  )
}
