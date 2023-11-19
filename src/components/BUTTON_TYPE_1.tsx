interface BUTTON_TYPE_1 {
  text: string
  functionTrigger?: () => void
}

export default function BUTTON_TYPE_1(props: BUTTON_TYPE_1) {
  return (
    <button onClick={props.functionTrigger}>
      <div className="flex justify-center items-center w-40 h-14 rounded-full transition duration-300 hover:rounded-xl button_type_1 hover:shadow-xl">
        <div className="text-center text-2xl">
          {props.text}
        </div>
      </div>
    </button>
  )
}