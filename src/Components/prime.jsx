import React from 'react';
import { useState } from 'react';

const Prime = () => {
    const [num, setnum] = useState("");

    const handleChange = e => {
        setnum(e.target.value);
    }

    const handlesubmit = e => {
        let flag=0;
        for (let i = 2; i < num; i++) {
           if(num%i==0){
            flag++;
           }
        }
        if(flag==0){
            document.write("prime number");
        }
        else{
            document.write("not a prime number");          
        }
    }

    return (
        <div>
            <label>input number: </label>
            <input type="number" value={num} name="num1" onChange={handleChange} /> &nbsp;<br /><br />
            <button className='btn btn-primary btn-sm' onClick={handlesubmit}>check prime</button>
        </div>
    )
}

export default Prime;

