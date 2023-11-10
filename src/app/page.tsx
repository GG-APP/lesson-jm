import BUTTON_TYPE_1 from "@/components/BUTTON_TYPE_1";

export default function Home() {
  return (
    <div className="h-screen w-full backgroudSkyBlue">
      <div className="mx-5 flex flex-row">
        <div className="text-7xl">
          lesson-jm
        </div>
        <BUTTON_TYPE_1 text="Registrar"/>
      </div>
    </div>
  )
}