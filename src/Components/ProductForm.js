import React, { useState } from "react";

const ProductForm = (props) => {

  const [fullProduct, setFullProduct] = useState({
    title: "", date:"", 
  })

  const titlechangehandler=(event)=>{
    setFullProduct((prevState)=>({
      ...prevState,
      title:event.target.value,
    })) 
  }

  const datechangehandler=(event)=>{
    setFullProduct((prevState)=>({
      ...prevState,
      date: event.target.value,
    }))
  }

  const submitbuttonpressed=(e)=>{
    console.log(fullProduct.title); console.log(fullProduct.date); e.preventDefault() ;
    props.passedfunc(30);
    setFullProduct({
      title: "", date:""
    })
  }

  return (
    <form className="w-full border" onSubmit={submitbuttonpressed}>
      <div className="w-1/2 m-auto"> 
        <div className="text-3xl uppercase "><label htmlFor="">Input other details</label></div>
        <div><input type="text" name="" id="" className="border" value={fullProduct.title} onChange={titlechangehandler}/></div>
        <span><input type="date" name="" id="" min="2023-01-01" max="2023-12-12" value={fullProduct.date} onChange={datechangehandler} /></span>
        <span><button className="text-white cursor-pointer rounded-lg p-4 bg-black" type="submit" >Add item</button></span>
      </div>
    </form>
  );
};

export default ProductForm;