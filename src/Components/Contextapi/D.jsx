import React from 'react'
import { FirstName, LastName, Age } from './A'
import { useContext } from 'react';


const D = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const age = useContext(Age);
    return (
        <div>
            <marquee direction="left"> <h1 style={{ color: "green", marginTop: "20px" }}>This is example of useContext Api</h1></marquee>
            <h2>  {fname} {lname} {age} </h2>
            {/* <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <Age.Consumer>
                                        {(age) => {
                                            return (<h1>{fname} {lname} {age}</h1>)
                                        }}
                                    </Age.Consumer>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer> */}
        </div>
    )
}

export default D;
