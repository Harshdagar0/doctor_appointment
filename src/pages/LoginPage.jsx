import React, { useState } from 'react'
import Registeration from '../component/Registeration';
import Login from '../component/Login';

function LoginPage() {
  const [dataFromChild, setDataFromChild] = useState("login");


  function type(data){
    setDataFromChild(data);
  }
    return (
      <div>
       {dataFromChild==='signup'&& <Registeration sendDataToParent={type}/>}
       {dataFromChild==='login'&& <Login sendDataToParent={type}/>}
      </div>
    )
}

export default LoginPage
