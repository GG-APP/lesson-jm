import BUTTON_TYPE_1 from "@/components/BUTTON_TYPE_1";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  function GoToRegister() {
    router.push("/register/professor")
  }

  return (
    <div className="flex bg-gradient-to-r from-green-500 to-green-600">
      <div className="h-screen w-full">
        <div className="flex flex-row m-5 justify-between place-items-center select-none">
          <div className="title text-6xl hover:shadow-sm duration-300">
            lesson-jm
          </div>
          <div className="flex flex-row space-x-4">
            <BUTTON_TYPE_1 functionTrigger={GoToRegister} text="Registrar" />
            <BUTTON_TYPE_1 text="Entrar" />
          </div>
        </div>
      </div>
    </div>
  )
}
