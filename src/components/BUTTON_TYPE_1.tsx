interface BUTTON_TYPE_1_PROPS {
  text : string 
}
export default function BUTTON_TYPE_1 (props: BUTTON_TYPE_1_PROPS) { 
  return ( 
    <div className="w-14 h-14 contrastSkyBlue">
      <div className="">
        {props.text}
      </div>
    </div>
  )
}