import React from 'react'
import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [registration, setregistration] = useState({
        fname: "",
        email: "",
        phone: "",
        password: ""

    });
    const [records, setRecords] = useState([]);

    const handelChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        //    console.log(name);
        //    console.log(value);
        setregistration({ ...registration, [name]: value })
        //    console.log(registration);
    }
    const handleSubmit = e => {
        e.preventDefault();

        const newRocrds = { ...registration }
        console.log(newRocrds);
        setRecords([newRocrds, ...records]);

        setregistration({ fname: "", email: "", phone: "", password: "" });
    }

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "50px", textDecoration: "underline", color: "red" }}>Registration form</h2>
            <form className='f' onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'>Username:</label>
                    <input type="text" name="fname" value={registration.fname} onChange={handelChange} />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={registration.email} onChange={handelChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={registration.phone} onChange={handelChange} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={registration.password} onChange={handelChange} />
                </div>

                <button type="submit" className='btn btn-primary btn-sm' id="btn" >Registration</button>
            </form>
            <div>
                {
                    records.map((value) => {
                        return (
                            <div className='styledata'>
                                <p>{value.fname}</p>
                                <p>{value.email}</p>
                                <p>{value.phone}</p>
                                <p>{value.password}</p>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    )
}

export default Form

