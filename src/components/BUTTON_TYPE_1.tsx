interface BUTTON_TYPE_1_PROPS {
  text: string
}
export default function BUTTON_TYPE_1(props: BUTTON_TYPE_1_PROPS) {
  return (
    <div className="flex justify-center items-center w-40 h-14 rounded-full duration-300 button_type_1 hover:shadow-xl">
      <div className="text-center text-2xl">
        {props.text}
      </div>
    </div>
  )
}