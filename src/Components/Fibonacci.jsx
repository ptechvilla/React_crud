import React from 'react'
import { useState } from 'react'

const Fibonacci = () => {
    const [num,setNum]=useState("");

    const handleChange=e=>{
        setNum(e.target.value);
    }
    const HandleSubmit=e=>{
        let a=0;
        let b=1;
        let c;
        document.write("fibonacci series are => ")
        for(let i=1;i<=num;i++){
            document.write(a+" ");
            c=a+b;
            a=b;
            b=c;     
        }

    }
  return (
    <div>
        <label>Enter number: </label>
      <input type="number" name="num1" onChange={handleChange} /> &nbsp;<br /> 
      <button type="submit" className='btn btn-success btn-sm' onClick={HandleSubmit}>Print Fibonacci</button>
    </div>
  )
}

export default Fibonacci
