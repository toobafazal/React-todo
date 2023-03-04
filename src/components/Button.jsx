import react from "react";

export default function TodoButton(props) {
  return (
    <>
      <button 
      className={props.className}
      onClick={props.onClick}
      variant="contained" >{props.label}</button>
      </>
  );
}
