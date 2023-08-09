import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";

const NewProduct = (props) => {
  const [statusstate, setstatusstate] = useState("");
  const settingstatus=(data)=>{
    setstatusstate(data);
  }
  useEffect(() => {
    console.log(statusstate)
  }, [statusstate])
  
  return (
    <div>
      <ProductForm passedfunc= {settingstatus}/>
    </div>
  );
};

export default NewProduct;
