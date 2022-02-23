import React from "react";


function InputBox ({placeHolder,name, type, InputBoxClassName ,handleChange }){
    return(
      <input 
      required 
      placeholder={placeHolder} 
      name={name} type={type} 
      className={InputBoxClassName} 
      onChange={(e) =>handleChange(e)}
      />
    )
}

export default InputBox