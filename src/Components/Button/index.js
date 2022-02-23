import React from "react";


function LoginButton ({ calsses,buttonText }){
    return(
      <button type="submit" className={calsses} >{buttonText}</button>
    )
}

export default LoginButton